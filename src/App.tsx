import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import './App.css';
import {useEffect, useState} from 'react';
import GamesList from './components/GamesList';
import type {ResponseData} from './types';
import { Global, css } from '@emotion/react';
import Layout from './components/Layout';
import Home from './components/Home';


function App() {
  const[data, setData] = useState<ResponseData | undefined>(undefined);
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
    
     
    setData(data)
  }
  // console.log('data :>> ', data);
 
  useEffect(() => {
    prefetchTodos()
  },[])
  return (
    <div>
      <Global 
      styles = {css`
      *{
        list-style: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      }
      body  {
        background: #f5f6fa;
      }
      grow: {
        flexGrow: 1,
      },
      `}/> 
      <Layout>
        {data? <Home games={data.games}/> : 'loading...'}
      </Layout>
    </div>
  );
}

export default App;

