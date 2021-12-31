import { Link } from 'react-router-dom';
import {
  Top,
  TopLeft,
  TopRight,
  TopCenter,
  TopList,
  TopListItem,
  Logo,
  SearchInput,
  Box,
  Button
} from '../../tags/topbar';

export default function Topbar() {
  return (
    <>
      <Top>
        <TopLeft>
          <Link to="/" className="link">
            <Logo src="https://jiwe.studio/content/images/2020/08/jiwe_logo.png" />
          </Link>
        </TopLeft>
        <TopCenter>

          <Box>
            <form name="search">
              <SearchInput 
                type="text" 
                placeholder="search game"/>
            </form>
          </Box>
        </TopCenter>
        <TopRight>
            <Button>Upload a Game</Button>
        </TopRight>
      </Top>
    </>
  );
}
