import { SyntheticEvent, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { SwipeableDrawer } from '@mui/material';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainListItems from './ListItems';
import { Avatar, Switch } from '@nextui-org/react';
import Logout from './Logout';
import ThemeSwitch from './ThemeSwitch';
import SubMenuItem from './SubMenu';
import { useDispatch, useSelector } from 'react-redux';
import './submenu.style.scss';

import { sideMenuActions } from '@_store/menu_slice';
import SideNavAvatar from './SideNavAvatar';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const dispatch = useDispatch();
  // const activeMenu = useSelector((state: any) => state.menu.active);
  // const dir = useSelector((state: any) => state.lang.dir);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <>
      <Box className='flex min-h-screen flex-row '>
        <Drawer variant='permanent' open={open}>
          <List component='nav'>
            <ThemeSwitch />
            <div className='flex justify-center py-5'>
              {/* <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' /> */}
              <SideNavAvatar />
            </div>
            <MainListItems toggleSubmenu={toggleSubmenu} />
            <Divider sx={{ my: 1 }} />
            <Logout />
          </List>
          <Divider />
          <Toolbar
            className='items-end'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        </Drawer>

        {/* submenu drawer  */}
        {/* <Drawer
          className={
            'submenu__block ' +
            (activeMenu !== '' ? 'show' : dir === 'ltr' ? 'hide' : 'hide-r')
          }
          variant='permanent'
          anchor='left'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <SubMenuItem />
        </Drawer> */}
        <SwipeableDrawer
          anchor='left'
          open={openSubmenu}
          onClose={toggleSubmenu}
          onOpen={toggleSubmenu}
        >
          <SubMenuItem toggleSubmenu={toggleSubmenu} />
        </SwipeableDrawer>
      </Box>
    </>
  );
}
