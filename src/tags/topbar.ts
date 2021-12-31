import styled from '@emotion/styled';

export const Top = styled.div`
  width: 100%;
  height: 100px;
  background-color: transparent;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  font-family: 'Josefin Sans', sans-serif;
`;

export const TopLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopCenter = styled.div`
  flex: 6;
`;
export const TopList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const TopListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  &: hover;
`;
export const TopImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  cursor: pointer;
`;
export const Logo = styled.img`
  width: 200px;
  height: 60px;
  object-fit: cover;
  margin-right: 15px;
  cursor: pointer;`
export const TopIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-left:10%;
  width: 50px;
  height: 50px;
  background: none;
  border: 2px solid #ffd52d;
  border-radius: 50px;
  box-sizing: border-box;
  font-family: Comic Sans MS;
  font-size: 26px;
  color: #ffd52d;
  outline: none;
  transition: .5s;
  &: hover {
    width: 350px;
    background: #272133;
    border-radius: 10px;
  }

`
export const Box = styled.div`
    height:20px
    position: absolute;
    
    &: hover {
      width: 350px;
      background: #272133;
      border-radius: 10px;
    }
`

export const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  border-radius: 0.7rem;
  color: white;
  border:0px;
  font-weight: bold;
  margin: 10px;
  padding: 1em 3em;
  background-size: 300% 300%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #f50057;
	}
`

 