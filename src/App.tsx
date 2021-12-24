import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {useEffect, useState} from 'react';
import type {ResponseData, Genres, Genre} from './types';
import { Global, css } from '@emotion/react';
import Layout from './components/Layout';
import CategoryList from './components/CategoryList';
 
 

function App(sss) {
  const[allgames, setAllGames] = useState<ResponseData | undefined>(undefined);
   
  const[categories, setCategories] = useState<Genre[] | undefined>(undefined)
 console.log('sss :>> ', sss);
  const client = new ApolloClient({
    uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'jiwe-interview',
    },

    //incase of new request check to see when last req was updated
    cache: new InMemoryCache(),
  });
  
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
        <CategoryList categories={categories} />
      </Layout>
    </div>
  );
}

export default App;

