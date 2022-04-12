import { ListItemButton, ListItemIcon, ListItemText, IconButton, styled } from '@mui/material';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../../../../contexts';
import { AppClient } from '../../../../clients';


export const SignOutRoute = () => {
  const history = useHistory();
  const context = useContext(AppContext);

  const handleSignOutClick = () => {
    if (context.user.isActive) {
      alert('Signing Out...');
      const client = new AppClient
      context.user = client.user
      history.push("/")
    } else {
      alert('Please Login to logout');
    }
  };

  return (
    <StyledListItemButton onClick={handleSignOutClick}>
      <ListItemIcon>
        <IconButton size="small">
          <ExitToApp />
        </IconButton>
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </StyledListItemButton>
  );
};

const StyledListItemButton = styled(ListItemButton)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
