import type { Genre, QueryResponse, ResponseData, } from '../types';
import { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Button, ListWrapper, ListItem, ListContent, Menu, MenuItem, Image } from '../tags';
// import GamesList from './GamesList'
import fetch from '../App'
// import { fetchGames } from '../queries';

interface Props {
  genres: Genre[];
}
const LOGO = 'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80'
const client = new ApolloClient({
  uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'jiwe-interview',
  },

  //incase of new request check to see when last req was updated
  cache: new InMemoryCache(),
});



const CategoryList: React.FunctionComponent<Props> = ({ genres }) => {
  const [genregames, setGenreGames] = useState<ResponseData | undefined>(undefined);


  const fetchGames12 = async (genre) => {
    const { data } = await client.query({
      query: gql`query GetGamesByGenre($genreName: String!=${genre}) {
        tags(where: { name: { _eq: $genreName } }) {
          id
          game_genres {
            id
            game {
              id
              language
              author_id
              author_type
              description
              created_at
              genre
              title
              updated_at
              author {
                avatar
                bio
                created_at
                email
                id
                locale
                location
                mfa_enabled
                name
                password
                phone_number
                remember_token
                updated_at
                username
                email_verified_at
              }
              game_posters: game_files(where: {file: {type: {_eq: "game_poster"}}}) {
                file {
                  id
                  path
                }
              }
            }
          }
        }
      }
    `
    })

    let data1 = data as QueryResponse
    let response: ResponseData

    data1.tags.map((tag) => {
      tag.game_genres.map((game) => {
        console.log('game', JSON.stringify(game.game))
        response.games.push(game.game)

      })
    })

    return response

  }
  return (
    <>
      <MenuItem>
        {genres?.map((genre) => (
          <Button onClick={() => { fetchGames12(genre.tag.name) }}>{genre.tag.name}</Button>
        ))}
      </MenuItem>

    </>
  )
};
export default CategoryList;