import type {Game} from '../types';
interface Props {
    games: Game[];
}

const GamesList: React.FunctionComponent<Props> = ({games}) => {
    return(
        <>
            {games.map((game) => (
                  
                <li key={game.id}>{game.title}</li>
                     
            ))}
        </>
    )
};

export default GamesList