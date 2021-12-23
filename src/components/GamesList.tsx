import type {Game} from '../types';
import styled from '@emotion/styled';
 

const LOGO= 'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80'
 

interface Props {
    games: Game[];  
}

const ListItem = styled.li`
list-style-type: none;
text-align: center;
margin-top: 10px;
margin: 1rem;
`;
const ListContent = styled.div`
    background-color: #f7f7f7;
    width: 20rem;
    border-radius: 1rem;
    box-shadow: 0 0 5rem rgba(0,0,0,1);
    cursor:pointer;
    
`;
const Image = styled.img`
    border-radius: 1rem;
    margin: 10px;
`
 

const GamesList: React.FunctionComponent<Props> = ({games}) => {
    

    // console.log(games)

     
    return(
        <>  
            {games.map((game) => (
                <>
                <ListItem >
                    <ListContent  key={game.id}>
                        <Image 
                            alt = {game.title}
                            src={game.game_posters[0]?.file.path ? (game.game_posters[0]?.file.path):(LOGO)}
                            width={300}
                            height={250} 
                        />
                        <h2><b>{game.title}</b></h2>
                        <p>{game.genre}</p>
                    </ListContent>
                </ListItem>
                 
                </>
             ))}
             
        </>
    )
};
export default GamesList