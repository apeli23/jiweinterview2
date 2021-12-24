import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {useEffect, useState} from 'react';
import GamesList from './components/GamesList';
import type {ResponseData, Genres, Genre} from './types';
import { Global, css } from '@emotion/react';
import Layout from './components/Layout';
import styled from '@emotion/styled'; 
import CategoryList from './components/CategoryList';
 
const Menu =  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    margin-left: 200px;
    margin-right: 30px;
    margin-bottom: 10px;
    border-radius: 1rem;
    height:30px;
    align-items: center;
`;
const MenuItem =  styled.h3`
    font-size: 15px;
`;
const ListWrapper = styled.ul`
padding: 2rem;
background: #fff;
margin-left: 200px;
margin-right: 30px;
margin-bottom: 40px;
border-radius: 1rem;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
min-width: 400px;
`;

function App() {
  const[allgames, setAllGames] = useState<ResponseData | undefined>(undefined);
   
  const[categories, setCategories] = useState<Genre[] | undefined>(undefined)
 
  const client = new ApolloClient({
    uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'jiwe-interview',
    },

    //incase of new request check to see when last req was updated
    cache: new InMemoryCache(),
  });
  const prefetchGames = async () => {
    // The results of this query will be cached like a normal query
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
    console.log('allgames', allgames)

  }
  const prefetchGenres = async()  => {
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
    
    setCategories(res_genres.data.game_genres)
  }
  useEffect(() => {
    prefetchGames()
    prefetchGenres()
    
  },[])
  // console.log("categories",categories)
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
        font-family: 'PT Sans', sans-serif;
        
      }
      body  {
        background: #42275a;
        max-width:9000px

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
      `}/> 
      <Layout>
        <Menu>
          <p>All games</p>
          <CategoryList categories={categories} />
        </Menu>
        {allgames? 
        <>
        <ListWrapper>
          <GamesList games={allgames.games}/>
        </ListWrapper>
        </> 
        :'loading...'}
      </Layout>
    </div>
  );
}

export default App;

