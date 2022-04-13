import React, { useContext } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';

import { Login, SignOut, SignUp } from '../../Actions';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { ThemeModeContext } from '../../../contexts';
import { AppContext } from '../../../contexts';

interface MobileMenuProps {
  isMenuOpen: boolean;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const MobileMenu = ({ isMenuOpen, handleMenuOpen, handleMenuClose, anchorEl }: MobileMenuProps) => {
  const { toggleThemeMode } = useContext(ThemeModeContext);
  const context = useContext(AppContext);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ textAlign: 'center' }}>
        <MenuItem onClick={toggleThemeMode}>
          <ThemeSwitcher disableTooltip />
          Toggle Theme
        </MenuItem>
        {!context.user.isActive && <>
        <MenuItem onClick={handleMenuClose}>
          <SignUp disableTooltip />
          SignUp
        </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Login disableTooltip />
            Login
          </MenuItem>
          </>}
        {context.user.isActive &&
          <MenuItem onClick={handleMenuClose}>
            <SignOut disableTooltip onClick={() => alert('Signing out...')} />
            Sign Out
          </MenuItem>
        }
      </Box>
    </Menu>
  );
};
