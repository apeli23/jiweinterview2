import { Menu, MenuItem, Button } from '../tags/home';
import type { Genre } from '../types';
import { HomeContainer } from '../tags/home';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import type { ResponseData, QueryResponse } from '../types';
import GamesList from '../components/games/GamesList'

interface Props {
  genres: Genre[];
}

const client = new ApolloClient({
  uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'jiwe-interview',
  },

  //incase of new request check to see when last req was updated
  cache: new InMemoryCache(),
});

const Home: React.FunctionComponent<Props> = ({ genres }) => {
  useEffect(() => {
    handleGenre("")
    fetchGames1()
  }, [])
  const [games, setGames] = useState<ResponseData | undefined>(undefined);

  const fetchGames1 = async () => {
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

    data1.tags.map((tag) => (
      tag.game_genres.map((game) => (
        response.games.push(game.game)
      ))
    ));

    setGames(response);
  };
  return (
    <HomeContainer>
      <Menu>
        <MenuItem>
          {genres?.map((genre) => (
            <Button
              onClick={() => {
                handleGenre(genre.tag.name);
              }}
            >
              {genre.tag.name}
            </Button>
          ))}
        </MenuItem>
      </Menu> 
      {games ? <GamesList games={games.games} /> : 'loading...'}
    </HomeContainer>
  );
};

export default Home;
