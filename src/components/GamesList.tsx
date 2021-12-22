import type {Game} from '../types';
import styled from '@emotion/styled';
// import LOGO from '../logo.jpg';

const LOGO= 'https://images.unsplash.com/photo-1543404809-435007eabb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVwYWR8ZW58MHx8MHx8&w=1000&q=80'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface Props {
    games: Game[];  
}

const ListWrapper = styled.ul`
padding: 2rem;
background: #fff;
margin-left: 200px;
margin-right: 30px;
margin-bottom: 40px;
border-radius: 1rem;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
min-width: 400px;
`;

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
const Menu =  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    margin-left: 200px;
    margin-right: 30px;
    margin-bottom: 10px;
    border-radius: 1rem;
`;
const MenuItem =  styled.h3`
    font-size: 15px;
`;
const GamesList: React.FunctionComponent<Props> = ({games}) => {
    console.log(games)
    return(
        <>  
            {/* <Menu>
                {games.map((game) => (
                    <MenuItem key={game.id}>
                        {game.genre}
                    </MenuItem>
                ))}
             </Menu> */}
             <ListWrapper>
             
             {games.map((game) => (
                 
                 <ListItem key={game.id}>
                     <ListContent>
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
             ))}
             </ListWrapper>
        </>
    )
};
export default GamesList