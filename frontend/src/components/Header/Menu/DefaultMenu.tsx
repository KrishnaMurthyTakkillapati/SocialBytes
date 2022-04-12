import { Divider, Menu, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppClient } from '../../../clients';
import { AppContext } from '../../../contexts';

import { Login, SignOut, SignUp } from '../../Actions';
interface DefaultMenuProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}


export const DefaultMenu = ({ isMenuOpen, handleMenuClose, anchorEl }: DefaultMenuProps) => {
  const history = useHistory()
  const context = useContext(AppContext);

  const handleSignUp = () => {
    history.push("/Register")
  }
  const handleLogin = () => {
    history.push("/Login")
  }
  const handleSignOut = () => {
      alert('Signing Out...');
      const client=new AppClient
      context.user=client.user
      console.log(context.user)
      history.push("/");
  }
  return (
    <Menu anchorEl={anchorEl} id="primary-search-account-menu" keepMounted open={isMenuOpen} onClose={handleMenuClose}>
      <MenuItem onClick={handleSignUp}>
        <SignUp disableTooltip />
        SignUp
      </MenuItem>
      <MenuItem onClick={handleLogin}>
        <Login disableTooltip />
        Login
      </MenuItem>
      <Divider />
      {context.user.isActive &&
      <MenuItem onClick={handleSignOut}>
        <SignOut disableTooltip />
        Sign Out
      </MenuItem>}
    </Menu>
  );
}