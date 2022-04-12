import React from 'react';
import {useHistory} from "react-router-dom";


import {
  MoreVert as MoreIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Fingerprint as FingerprintIcon,
  Logout as LogoutIcon,
  LockOpen as LockOpen,
  List as PreferencesIcon,
  Login as LoginIcon
} from '@mui/icons-material';

import { ActionItem } from './ActionItem';

interface ActionProps {
  total?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disableTooltip?: boolean;
}

export const Messages = ({ total, onClick, disableTooltip = false }: ActionProps) => (
  <ActionItem
    title="My Messages"
    icon={MailIcon}
    onClick={onClick}
    badgeContent={total}
    disableTooltip={disableTooltip}
  />
);

export const More = ({ onClick, disableTooltip = false }: ActionProps) => (
  <ActionItem title="More" icon={MoreIcon} onClick={onClick} disableTooltip={disableTooltip} />
);


export const UserAccount = ({ onClick, disableTooltip = false }: ActionProps) => (
  <ActionItem title="My Account" icon={FingerprintIcon} onClick={onClick} disableTooltip={disableTooltip} />
);

export const SignOut = ({ onClick, disableTooltip = false }: ActionProps) => (
  <ActionItem title="Sign Out" icon={LogoutIcon} onClick={onClick} disableTooltip={disableTooltip} />
);

export const SignUp = ({ onClick, disableTooltip = false }: ActionProps) => (
  <ActionItem title="SignUp" icon={LockOpen} onClick={onClick} disableTooltip={disableTooltip} />
);

export const Login = ({ onClick, disableTooltip = false }: ActionProps) => (
  <ActionItem title="Login" icon={LoginIcon} onClick={onClick} disableTooltip={disableTooltip} />
);
