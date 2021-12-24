import styled from '@emotion/styled';

export const ListItem = styled.li`
list-style-type: none;
text-align: center;
margin-top: 10px;
margin: 1rem;
`;

export const ListWrapper = styled.ul`
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

export const ListContent = styled.div`
    background-color: #f7f7f7;
    width: 20rem;
    border-radius: 1rem;
    box-shadow: 0 0 5rem rgba(0,0,0,1);
    cursor:pointer;
    
`;

export const Image = styled.img`
    border-radius: 1rem;
    margin: 10px;
`
export const Button = styled.button`
  font-size: 7px;
  border-radius: 0.7rem;
  color: white;
  border:0px;
  font-weight: bold;
  margin: 10px;
  padding: 1em 3em;
  background-size: 300% 300%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(to right top, #ed433f, #df3a37, #d2302f, #c42627, #b71b1f);
}`

export const Menu =  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    margin-left: 200px;
    margin-right: 30px;
    margin-bottom: 10px;
    border-radius: 1rem;
    height:30px;
    align-items: center;
`;
export const MenuItem =  styled.h3`
  font-size: 15px;
  justify-content: space-between
`;