import type { Game } from '../types';
import { ListItem, ListContent, Image } from '../tags/tags'

const LOGO = 'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80'
interface Props {
    games: Game[];
}

const GamesList: React.FunctionComponent<Props> = ({ games }) => {
    return (
        <>
            {games?.map((game) => (

                <ListItem>
                    <ListContent key={game.id}>
                        <Image
                            alt={game.title}
                            src={game.game_posters[0]?.file.path ? (game.game_posters[0]?.file.path) : (LOGO)}
                            width={300}
                            height={250}
                        />
                        <h2><b>{game.title}</b></h2>
                        <p>{game.genre}</p>
                    </ListContent>
                </ListItem>

            ))}
        </>
    )
};
export default GamesList