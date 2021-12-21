import type {Game} from '../types';

interface Props {
    games: Game[];
}

const Home: React.FunctionComponent<Props> = ({games}) => {
    console.log(games)
    return(
        <>
            
        </>
    )
};
export default Home