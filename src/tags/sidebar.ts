import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  flex: 3;
  width:25%;
  height: 100%;
  margin: 0px;
  padding-bottom: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  
  `;

export const SidebarText = styled.p`
  padding: 30px;
`;
export const SidebarList = styled.ul`
  list-style-type: none;
  margin-bottom: 30%;
  margin-top: 0px;
  margin-right:40%;
  align-items:center;
  color:white;
`;
export const SidebarListItem = styled.li`
  width: 100%;
  height: 40px;
  cursor: pointer;
  text-align: center;
  margin-top:20px;
  align-items: center;    
  font-size:15px;
  &:hover {
    color:  #ffd52d;
  }
`;
export const SidebarSocial = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarIcon = styled.i`
  font-size: 20px;
  margin-right: 10%;
  color:white;
  &:hover {
    color:  #ffd52d;
  }
`;