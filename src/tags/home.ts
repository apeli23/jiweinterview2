import styled from '@emotion/styled';


export const HomeContainer = styled.div`
    display: block;
    color:white;
`;

export const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: transparent;
    margin-left: 0%;
    margin-bottom: 10px;
    border-radius: 3 rem;
    height:60px;
    align-items: center;
    min-width:800px;
    width:50%;
    
`;
export const Container = styled.div`
  display: flex;
`
export const MenuItem = styled.h3`
  font-size: 15px;
  background-color:transparent;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 10px;
  border-radius: 0.7rem;
  color: white;
  border:0px;
  font-weight: bold;
  margin: 10px;
  padding: 1em 3em;
  background-size: 300% 300%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(to right top, #ed433f, #df3a37, #d2302f, #c42627, #b71b1f);
}
`