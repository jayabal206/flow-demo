import { useState } from 'react';

import { Button } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../../store/auth';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
} from '@nextui-org/react';
import { tabSelectionActions } from '../../store/tab_selection_slice';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
let tabs = [
  {
    id: 'tab1',
    label: 'Tab1',
    data: {},
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 'tab2',
    label: 'Tab2',
    data: {},
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 'tab3',
    label: 'Tab3',
    data: {},
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
export default function TabSelection() {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };
  const handleTabSelection = (event: any) => {
    console.log('selected testing ', event);
    const selectedObj = tabs.filter((data) => data.id === event);
    console.log('filtered data', selectedObj);
    dispatch(tabSelectionActions.tabSelectionClick(selectedObj[0]));
  };
  return (
    <>
      <Tabs
        variant='underlined'
        aria-label='Tabs variants'
        items={tabs}
        onSelectionChange={handleTabSelection}
      >
        {(item) => <Tab key={item.id} title={item.label} />}
      </Tabs>
    </>
  );
}
