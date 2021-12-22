import styled from '@emotion/styled';
import { FaShoppingCart, FaCloudDownloadAlt, FaRegCreditCard, FaChartLine,  FaSearch, FaRegBell} from 'react-icons/fa';


const Sidebar = styled.div`
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
`
const SidebarContent= styled.div`
    margin-bottom: 30px;
    text-align: Left; 
    color: #ffffff;
`
const Logo = styled.img`
    display: block;
    width: 200px;
    height: 90px;
    border-radius: 50%;
    margin: 5 auto; 
`
const SidebarItem = styled.h4`
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
const ProfileContent = styled.div`
      margin:60px
      width:200x
      align-items:center;
     
`
const ProfileItem = styled.p`
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
const Section = styled.div`
    width: calc(100% - 225px);
    margin-left: 225px;
    transition: all 0.5s ease;
`
const Topbar = styled.div`
    background: transparent;
    height: 100px;
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
    border: 0px;
`
const TopbarContents = styled.div`
     align-items: right;
     margin-left: 10
`
const Button = styled.button`
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
 
 
const Layout = ({children}) => {
    return(
        <>
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
        {children}
        </>
    )
};
export default Layout