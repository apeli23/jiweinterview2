import {
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  SidebarText,
  SidebarIcon,
} from '../../tags/sidebar';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarListItem>
          <SidebarText>
            <SidebarIcon className="fas fa-shopping-cart" /> Store{' '}
          </SidebarText>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarText>
            <SidebarIcon className="fas fa-cloud-download-alt" /> Downloads
          </SidebarText>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarText>
            <SidebarIcon className="fas fa-credit-card" /> Wallet
          </SidebarText>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarText>
            <SidebarIcon className="fas fa-chart-line" /> Statistics
          </SidebarText>
        </SidebarListItem>
      </SidebarList>
      <SidebarList>
        <SidebarListItem>
          <SidebarText>
              <SidebarIcon className="fas fa-cog" />
              {' '}
              Settings
          </SidebarText>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarText>
              <SidebarIcon className="fas fa-sign-out-alt" />
              {' '}
              Logout
          </SidebarText>
        </SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  );
}
