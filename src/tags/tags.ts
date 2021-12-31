import styled from '@emotion/styled';


export const Sidebar = styled.div`
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
`
export const SidebarContent= styled.div`
    margin-bottom: 30px;
    text-align: Left; 
    color: #ffffff;
`
export const Logo = styled.img`
    display: block;
    width: 200px;
    height: 90px;
    border-radius: 50%;
    margin: 5 auto; 
`
export const SidebarItem = styled.h4`
    margin: 5px  ;
    left:15px; 
    padding: 10px 10px 10px;
    &:hover {
        color: yellow;
        cursor:pointer;
        background-color:#152238;
        border-radius: 1rem;
      }
`
export const ProfileContent = styled.div`
      margin:60px
      width:200x
      align-items:center;
     
`
export const ProfileItem = styled.p`
    color:#FFF;
    margin: 10px;
    padding: 10px 10px 10px;
    &:hover {
        color: yellow;
        cursor:pointer;
        background-color:black;
        border-radius: 1rem;
      }
`
export const Section = styled.div`
    width: calc(100% - 225px);
    margin-left: 225px;
    transition: all 0.5s ease;
`
export const Topbar = styled.div`
    background: transparent;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
      color: #FFF;
`
export const SearchInput = styled.input`
    text-color: white;
    border-radius: 1rem;
    width: 200px;
    height: 40px;
    border: 0px;
`
export const TopbarContents = styled.div`
     align-items: right;
     margin-left: 10
`
export const Button = styled.button`
  padding: 10px;
  font-size: 12px;
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
export const ListItem = styled.li`
list-style-type: none;
text-align: center;
margin-top: 10px;
margin: 1rem;
`;

export const ListWrapper = styled.ul`
padding: 2rem;
background: #fff;
margin-top: 5%;
margin-left: 15%;
margin-right: 5%;
margin-bottom: 10%;
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
export const Menu =  styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    margin-left: 20%;
    margin-bottom: 10px;
    border-radius: 1rem;
    height:60px;
    align-items: center;
    min-width:800px;
    
`;
export const MenuItem =  styled.h3`
  font-size: 15px;
`;