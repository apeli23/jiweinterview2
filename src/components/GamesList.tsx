import styled from '@emotion/styled';
import type {Game} from '../types';
import Image from 'next/image';
import {useState} from 'react';
import Modal from 'react-modal';

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
padding:0;
display:flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
list-style-type: none;
flex: 0 0 50%;
text-align: center;
`;
const ListContent = styled.div`
    background-color: #f7f7f7;
    width: 20rem;
    margin: 5rem auto;
    margin-bottom: 5px;
    border-radius: 1rem;
    box-shadow: 0 0 5rem rgba(0,0,0,0.3);
    transition: 0.4s; 
    cursor:pointer;
`
 
const GamesList: React.FunctionComponent<Props> = ({games}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <>
            <ListWrapper>
                {games.map((game) => (
                    <ListItem key={game.id}>
                        <ListContent onClick={() => {openModal()}}>
                            <img 
                            alt = {game.title}
                            src={game.game_posters[0]?.file.path}
                                    width={300}
                                    height={300} />
                            <h2><b>{game.title}</b></h2>
                            <p>{game.genre}</p>
                        </ListContent>
                    </ListItem>
                        
                ))}
            </ListWrapper>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Game Modal"
          ariaHideApp={false}
        ></Modal>
        </>
    )
};

export default GamesList