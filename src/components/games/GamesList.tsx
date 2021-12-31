import { GamesListContainer } from "../../tags/gameslist";
import { Game } from "../../types"

const LOGO = 'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80'
interface Props {
    games: Game[];
}

const GamesList: React.FunctionComponent<Props> = ({ games }) => {
    console.log('games :>> ', games);
    return(
        <GamesListContainer>
            Gamennnnn
        </GamesListContainer>
    )
};

export default GamesList