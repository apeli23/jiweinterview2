import styled from '@emotion/styled';
import { FaShoppingCart, FaCloudDownloadAlt, FaRegCreditCard, FaChartLine,  FaSearch, FaRegBell} from 'react-icons/fa';
// import { IoIosSettings   } from "@react-icons/all-files/fa/IoIosSettings  ";

const Sidebar = styled.div`
    background: rgb(5, 68, 104);
    position: fixed;
    top: 0;
    left: 0;
    width: 225px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
`
const Wrapper = styled.div`
`
const SidebarContent= styled.div`
    margin-bottom: 30px;
    text-align: Left; 
    color: #ffffff;
`
const Logo = styled.img`
    display: block;
    width: 230px;
    height: 100px;
    border-radius: 50%;
    margin: 5 auto; 
`
const SidebarItem = styled.h4`
    color: #ffffff;
    margin: 5px  ;
    left:15px; 
    padding: 10px 10px 10px;
    &:hover {
        color: yellow;
        cursor:pointer;
        background-color:black;
      }
`
const ProfileContent = styled.div`
      margin:60px
`
const ProfileItem = styled.p`
    color:white;
    padding: 20px;
    top: 60px;
    margin: 10px;
    padding:0px;
    &:hover {
        color: yellow;
        cursor:pointer;
        background-color:black;
      }
`
const Section = styled.div`
    width: calc(100% - 225px);
    margin-left: 225px;
    transition: all 0.5s ease;
`
const Topbar = styled.div`
    background: rgb(7, 105, 185);
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
      color: #FFF;
`
const SearchInput = styled.input`
    text-color: white;
    border-radius: 1rem;
    width: 200px;
    height: 40px;
`
const TopbarContents = styled.div`
     align-items: right;
     margin-left: 10
`
const Button = styled.button`
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
// const Container = styled.div`
//     padding-left: 0;
//     padding-right: 0;
//     background-color:white;
//     margin-left:20%;
//     border-radius: 1rem;
//     width:80%;
//     height:100%;
// `
// const ListWrapper = styled.ul`

// `;

// const UserSettings = styled.div`
//     margin-top:60px;    
// `;

// const ListItem = styled.li`
//     list-style-type: none;  
//     cursor:pointer;
//     padding: 20px;
//     font-size: 10px;
//     &:hover {
//         color: yellow;
//         background-color:black;
//       }
// `;
// const ListContent = styled.div`
    
// `;
// const SearchForm = styled.form`
//     border: '1px solid #ffffff',
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
// `;
    
const Layout = ({children}) => {
    return(
        <>
         <Wrapper>
            <Sidebar>
                <SidebarContent>
                    <Logo src="https://jiwe.studio/content/images/2020/08/jiwe_logo.png"/>
                    <SidebarItem><FaShoppingCart />Store</SidebarItem>
                    <SidebarItem><FaCloudDownloadAlt />Dashboard</SidebarItem>
                    <SidebarItem><FaRegCreditCard />Wallet</SidebarItem>
                    <SidebarItem><FaChartLine />Statistics</SidebarItem>
                </SidebarContent>
                <ProfileContent>
                    <ProfileItem>Settings</ProfileItem>
                    <ProfileItem>Logout</ProfileItem>
                </ProfileContent>
            </Sidebar>
            <Section>
                <Topbar>
                   <form >
                        <SearchInput
                            type="search"
                            placeholder="Search Games"
                            // value={searchTerm}
                            // onChange={onInputChange}
                            required
                        >
                        </SearchInput>
                        
                   </form>
                   <div className="grow"></div>
                    <TopbarContents>
                        <Button>Upload a Game</Button>
                        <FaRegBell />
                    </TopbarContents>
                </Topbar>
            </Section>
         </Wrapper>
        </>
    )
};
export default Layout