import styled from '@emotion/styled'
 
export const ListWrapper = styled.ul`
padding: 2rem;
background: #fff;
margin-top: 2%;
margin-left: 0%;
margin-right: 5%;
margin-bottom: 10%;
border-radius: 1rem;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
min-width: 400px;
`;
export const ListContent = styled.div`
    border-radius: 1rem;
    width: 100%;
    box-shadow: 0 0 5rem rgba(0,0,0,1);
    cursor:pointer;
    background-color: #fff;
    
`;

export const ListItem = styled.li`
list-style-type: none;
text-align: center;
margin-top: 10px;
margin: 1rem;
`;

export const Image = styled.img`
    border-radius: 1rem;
    margin: 10px;
    background-color: #fff;
`;


export const Title = styled.h3`
    font-size: 20px;
    background-color: #fff;
    color: black;
`;
export const Genre = styled.h3`
    font-size: 15px;
    background-color: #fff;
    color: black;
`;