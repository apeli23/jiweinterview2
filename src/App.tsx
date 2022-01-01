import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import type { Genre } from './types';
import { Global, css } from '@emotion/react';
import { Container } from './tags/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';

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
  }, []);

  const [genres, setGenres] = useState<Genre[] | undefined>(undefined);

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

  return (
    <Router>
      <Global
        styles={css`
          * {
            margin: 0;
            background-color: #140f1d;
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
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home genres={genres} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
