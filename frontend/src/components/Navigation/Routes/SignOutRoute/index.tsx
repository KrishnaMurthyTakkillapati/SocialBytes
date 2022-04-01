import { ListItemButton, ListItemIcon, ListItemText, IconButton, styled } from '@mui/material';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { useHistory } from "react-router-dom";



export const SignOutRoute = () => {
  const history = useHistory();
  const handleSignOutClick = () => {
    alert('Signing Out...');
    
    history.push("/home");
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
