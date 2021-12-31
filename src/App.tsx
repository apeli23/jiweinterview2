
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import type { ResponseData, Genres, Genre, QueryResponse } from './types';
import { Global, css } from '@emotion/react';
import Layout from './components/Layout';
import CategoryList from './components/CategoryList';
import GamesList from './components/GamesList';
import { Menu, MenuItem, Button, ListWrapper } from './tags/tags'
// import { fetchGames } from './queries';

const client = new ApolloClient({
  uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'jiwe-interview',
  },

  //incase of new request check to see when last req was updated
  cache: new InMemoryCache(),
});


function App() {

  useEffect(() => {
    prefetchGenres()
    handleGenre("")
    fetchGames1()

  }, [])

  const [genres, setGenres] = useState<Genre[] | undefined>(undefined)
  const [games, setGames] = useState<ResponseData | undefined>(undefined);

  const fetchGames1 = async () => {
    // if (genre === "undefined") {
    const { data } = await client.query({
      query: gql`
    query GetAllGames {
      games {
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
        game_posters: game_files(
          where: { file: { type: { _eq: "game_poster" } } }
        ) {
          file {
            id
            path
          }
        }
        game_serving_points {
          __typename
          id
          serving_point {
            id
            name
            value
          }
        }
      }
    }
    `,
    });
    setGames(data)
  }

  const prefetchGenres = async () => {
    const res_genres = await client.query({

      query: gql`
      query MyQuery {
        game_genres {
          tag {
            name
          }
        }
      }      
      `
    })

    setGenres(res_genres.data.game_genres)

  }

  const handleGenre = async (genre: string) => {
    const data = await client.query({
      query: gql`query GetGamesByGenre($genreName: String!="${genre}") {
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

    let data1 = data.data as QueryResponse
    let response: ResponseData = { games: [], id: "", __typename: "" }

    data1.tags.map((tag) => {
      tag.game_genres.map((game) => {
        response.games.push(game.game)

      })
    })

    setGames(response)

  }
  return (
    <>
      <Global
        styles={css`
      *{
        list-style: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PT Sans', sans-serif;
        
      }
      body  {
        background: #42275a;
        max-width:100%
        text-align:center;
      }
      grow: {
        flexGrow: 1,
      },
      #id: {
        
      } 
      #rightItems{
        margin-left: 24px;
      }
      .item {
        background-color: #21262b;
        cursor: pointer;
        padding: 24px;
        margin-top: 24px;
        display: flex;
        /* grid-template-columns: 1fr 11fr; */
        color: aliceblue;
      }
      .img {
        border-radius: 100%;
        -webkit-border-radius:100%;
        -moz-border-radius:100%;
        -ms-border-radius:100%;
        -o-border-radius:100%;
      }
      
      .imgContainer {
        margin: auto;
      }
      
      @media only screen and (min-width: 1200px) {
        .content__blog__container {
          width: 84%;
        }
      }
      
      @media only screen and (min-width: 1024px) {
        .cards__items {
          display: flex;
        }
      }
      
      @media only screen and (max-width: 1024px) {
        .cards__item {
          margin-bottom: 2rem;
        }
    }
      `} />
      <Layout>
        <Menu>
          <MenuItem>
          {console.log(genres)}
            {genres?.map((genre) => (
              <Button onClick={() => { handleGenre(genre.tag.name) }}>{genre.tag.name}</Button>
            ))}
          </MenuItem>
        </Menu>
        <ListWrapper>
          {games ? <GamesList games={games.games} /> : 'loading...'}
        </ListWrapper>

      </Layout>
    </>
  );
}

export default App;
