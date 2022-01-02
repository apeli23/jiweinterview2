import {
  ListWrapper,
  ListItem,
  ListContent,
  Image,
  Title,
  Genre,
  Column,
  Module,
  Thumbnail,
  ThumbnailText,
  Language,
  Content,
  Name,
  Date,
  Description,
  Meta,
} from '../../tags/gameslist';
import { Game } from '../../types';

const LOGO =
  'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80';

interface Props {
  games: Game[];
}

const GamesList: React.FunctionComponent<Props> = ({ games }) => {
  return (
    <>
      <ListWrapper>
        {games?.map((game) => (
          <ListItem>
            <ListContent key={game.id}>
              <Column>
                <Title>{game.title}</Title>
                <Module>
                  <Thumbnail>
                    <ThumbnailText>
                      <Language>{game.language}</Language>
                    </ThumbnailText>
                    <Image
                      src={
                        game.game_posters[0]?.file.path
                          ? game.game_posters[0]?.file.path
                          : LOGO
                      }
                      alt={game.title}
                    />
                    <Content>
                      <Genre>{game.genre}</Genre>
                      <Name>{game.author?.name} </Name>
                      <Description> {game.description}</Description>
                      <Meta>
                        <Date>{game.created_at} </Date>
                      </Meta>
                    </Content>
                  </Thumbnail>
                </Module>
              </Column>
            </ListContent>
          </ListItem>
        ))}
      </ListWrapper>
    </>
  );
};

export default GamesList;
