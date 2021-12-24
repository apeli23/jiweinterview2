import type {Genre, ResponseData} from '../types';
import {useState, useEffect} from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {Button,ListWrapper, ListItem, ListContent, Menu, MenuItem, Image} from './tags';
import GamesList from './GamesList'

interface Props {
    categories: Genre[];  
}
const LOGO= 'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80'
const client = new ApolloClient({
    uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'jiwe-interview',
    },

    //incase of new request check to see when last req was updated
    cache: new InMemoryCache(),
});
 
 
const CategoryList: React.FunctionComponent<Props> = ({categories}) => {

    const[allgames, setAllGames] = useState<ResponseData | undefined>(undefined);
    const[genregame, setGenreGames] =useState<ResponseData | undefined>(undefined);
    const[img, setImg] = useState('')
    const[title, setTitle] = useState('')
    const[genre, setGenre] = useState('')
    
    const handleGenreName = async(genre)=>{
        console.log(genre)
        const genre_res  = await client.query({
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
        setGenreGames(genre_res?.data.tags[0].game_genres[0].game)
        setTitle(genre_res?.data.tags[0].game_genres[0].game.title)
        setImg(genre_res?.data.tags[0].game_genres[0].game.game_posters[0]?.file.path)
        setGenre(genre_res?.data.tags[0].game_genres[0].game.title)

    }

    const prefetchGames = async () => {
      const { data }  = await client.query({
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
      setAllGames(data)
    }

    useEffect(()=>{
       prefetchGames()
    },[])
    return(
        <>
          <Menu>
            <MenuItem>
              {categories?.map((category) => (
                <Button onClick={()  => {handleGenreName(category.tag.name)}}>{category.tag.name}</Button>
              ))}
            </MenuItem>
          </Menu>
          <ListWrapper>
                {genregame? 
                <ListItem>
                  <ListContent>
                    <Image 
                      alt = {title}
                      src={img ? (img):(LOGO)}
                      width={300}
                      height={250} 
                    />
                    <h2><b>{title}</b></h2>
                    <p>{genre}</p>
                  </ListContent>
                </ListItem>
                : <GamesList games={allgames.games}/>}
          </ListWrapper>
        </>
    )
};
export default CategoryList;