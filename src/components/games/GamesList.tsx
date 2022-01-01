import {
  ListWrapper,
  ListItem,
  ListContent,
  Image,
  Title,
  Genre
} from '../../tags/gameslist';
import { Game } from '../../types';

const LOGO =
  'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80';
interface Props {
  games: Game[];
}

const GamesList: React.FunctionComponent<Props> = ({ games }) => {
  console.log('games :>> ', games);
  return (
    <ListWrapper>
      {games?.map((game) => (
        <ListItem>
          <ListContent key={game.id}>
              
            <Image
              alt={game.title}
              src={
                game.game_posters[0]?.file.path
                  ? game.game_posters[0]?.file.path
                  : LOGO
              }
              width={300}
              height={250}
            />
            <Title>{game.title}</Title>
            <Genre>{game.genre}</Genre>
          </ListContent>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default GamesList;
