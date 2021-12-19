import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import './App.css';
import {useEffect} from 'react';

function App() {
  const prefetchTodos = async () => {
    // The results of this query will be cached like a normal query
    
    const client = new ApolloClient({
      uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'jiwe-interview',
      },
      //incase of new request check to see when last req was updated
      cache: new InMemoryCache(),
    });
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
    
     
    console.log(data)
  }

  
  useEffect(() => {
    prefetchTodos()
  },[])
  return (
    <div>
      works
    </div>
  );
}

export default App;

