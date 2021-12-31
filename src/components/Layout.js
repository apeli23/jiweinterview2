import styled from "@emotion/styled";
import {
  FaShoppingCart,
  FaCloudDownloadAlt,
  FaRegCreditCard,
  FaChartLine,
  FaSearch,
  FaRegBell,
} from "react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  Logo,
  SidebarItem,
  ProfileContent,
  ProfileItem,
  Section,
  Topbar,
  SearchInput,
  TopbarContents,
  Button,
} from "../tags/tags";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar>
        <SidebarContent>
          <Logo src="https://jiwe.studio/content/images/2020/08/jiwe_logo.png" />
          <SidebarItem>
            <FaShoppingCart />
            Store
          </SidebarItem>
          <SidebarItem>
            <FaCloudDownloadAlt />
            Dashboard
          </SidebarItem>
          <SidebarItem>
            <FaRegCreditCard />
            Wallet
          </SidebarItem>
          <SidebarItem>
            <FaChartLine />
            Statistics
          </SidebarItem>
        </SidebarContent>
        <ProfileContent>
          <ProfileItem>Settings</ProfileItem>
          <ProfileItem>Logout</ProfileItem>
        </ProfileContent>
      </Sidebar>
      <Section>
        <Topbar>
          <form>
            <SearchInput
              type="search"
              placeholder="Search Games"
              // value={searchTerm}
              // onChange={onInputChange}
              required
            ></SearchInput>
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
  );
};
export default Layout;
