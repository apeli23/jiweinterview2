import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import type { ResponseData, Genres, Genre, QueryResponse } from './types';
import { Global, css } from '@emotion/react';
import Layout from './components/Layout';
import CategoryList from './components/CategoryList';
import GamesList from './components/GamesList';
import { Menu, MenuItem, Button, ListWrapper } from './tags/tags';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar';

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
    prefetchGenres();
    handleGenre('');
    fetchGames1();
  }, []);

  const [genres, setGenres] = useState<Genre[] | undefined>(undefined);
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
    setGames(data);
  };

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
      `,
    });

    setGenres(res_genres.data.game_genres);
  };

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
  `,
    });

    let data1 = data.data as QueryResponse;
    let response: ResponseData = { games: [], id: '', __typename: '' };

    data1.tags.map((tag) => {
      tag.game_genres.map((game) => {
        response.games.push(game.game);
      });
    });

    setGames(response);
  };
  return (
    <Router>
      <Global
        styles={css`
          * {
            margin: 0;
            background-color:#140f1d;
          }
          .link {
            text-decoration: none;
            color: inherit;
          }
          .sidebarIcon {
            font-size: 16px;
            margin-left: 10px;
          }
          .singlePostIcon:first-child {
            color: teal;
          }
          .singlePostIcon:last-child {
            color: tomato;
          }
          .singlePostDesc::first-letter {
            margin-left: 20px;
            font-size: 30px;
            font-weight: 600;
          }
          .home {
            display: flex;
          }
        `}  
      />
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
