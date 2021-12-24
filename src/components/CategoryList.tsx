import type {Genre, ResponseData} from '../types';
import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

interface Props {
    categories: Genre[];  
}
const Button = styled.button`
  font-size: 7px;
  border-radius: 0.7rem;
  color: white;
  border:0px;
  font-weight: bold;
  margin: 10px;
  padding: 1em 3em;
  background-size: 300% 300%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(to right top, #ed433f, #df3a37, #d2302f, #c42627, #b71b1f);
}
`
const client = new ApolloClient({
    uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'jiwe-interview',
    },

    //incase of new request check to see when last req was updated
    cache: new InMemoryCache(),
});

const ListItem = styled.li`
list-style-type: none;
text-align: center;
margin-top: 10px;
margin: 1rem;
`;
const ListContent = styled.div`
    background-color: #f7f7f7;
    width: 20rem;
    border-radius: 1rem;
    box-shadow: 0 0 5rem rgba(0,0,0,1);
    cursor:pointer;
    
`;
const Image = styled.img`
    border-radius: 1rem;
    margin: 10px;
`
 
 
const CategoryList: React.FunctionComponent<Props> = ({categories}) => {
    const[game, setGame] = useState<ResponseData | undefined>(undefined);
    const[genre, setGenre] = useState('')
    const handleGenreName = async(genre)=>{
        console.log("genre",genre)
        // setGenreName(genre)
        const genre_res  = await client.query({
            query: gql`query GetGamesByGenre($genreName: String!=${genre}) {
                tags(where: { name: { _eq: ${genre} } }) {
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
        // console.log('genre_res :>> ', genre_res);
        setGame(genre_res.data.tags[0].game_genres[0].game)
        console.log('game :>> ', game);
    }
    // useEffect(() => {
    //   handleGenreName(genre)
    // }, [])  
    return(
        <>
            {
                categories.map((category) => (
                    <Button onClick={()  => {handleGenreName(category.tag.name)}}>{category.tag.name}</Button>
                ))
            } 
        </>
    )
};
export default CategoryList;