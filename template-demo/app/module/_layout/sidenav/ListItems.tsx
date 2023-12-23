import { Fragment, useCallback } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch } from 'react-redux';
import { sideMenuActions } from '@_store/menu_slice';

const menu = [
  {
    id: 0,
    name: 'Home',
    path: '',
    imageUrl: '',
    menu: [],
  },
  {
    id: 1,
    name: 'Dashboard',
    path: '',
    imageUrl: '',
    menu: [
      {
        id: 1,
        name: 'Submenu List1',
        path: '',
        imageUrl: '',
        menu: [
          { id: 1, name: 'List menu1', path: '', imageUrl: '' },
          { id: 2, name: 'List menu2', path: '', imageUrl: '' },
        ],
      },
      {
        id: 2,
        name: 'Submenu List2',
        path: '',
        imageUrl: '',
        menu: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Orders',
    menu: [
      {
        id: 1,
        name: 'Orders Submenu List1',
        path: '',
        imageUrl: '',
        menu: [],
      },
      {
        id: 2,
        name: 'Orders Submenu List2',
        menu: [
          { id: 1, name: 'Orders List menu1', path: '', imageUrl: '' },
          { id: 2, name: 'Orders List menu2', path: '', imageUrl: '' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Customers',
    path: '',
    imageUrl: '',
    menu: [
      {
        id: 1,
        name: 'Customers Submenu List1',
        path: '',
        imageUrl: '',
        menu: [],
      },
      {
        id: 2,
        name: 'Customers Submenu List2',
        path: '',
        imageUrl: '',
        menu: [
          { id: 1, name: 'Customers List menu1', path: '', imageUrl: '' },
          { id: 2, name: 'Customers List menu2', path: '', imageUrl: '' },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Reports',
    path: '',
    imageUrl: '',
    menu: [
      {
        id: 1,
        name: 'Reports Submenu List1',
        path: '',
        imageUrl: '',
        menu: [],
      },
      {
        id: 2,
        name: 'Reports Submenu List2',
        path: '',
        imageUrl: '',
        menu: [
          { id: 1, name: 'Reports List menu1', path: '', imageUrl: '' },
          { id: 2, name: 'Reports List menu2', path: '', imageUrl: '' },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Integrations',
    path: '',
    imageUrl: '',
    menu: [
      {
        id: 1,
        name: 'Integrations Submenu List1',
        path: '',
        imageUrl: '',
        menu: [],
      },
      {
        id: 2,
        name: 'Integrations Submenu List2',
        path: '',
        imageUrl: '',
        menu: [
          { id: 1, name: 'Integrations List menu1', path: '', imageUrl: '' },
          { id: 2, name: 'Integrations List menu2', path: '', imageUrl: '' },
        ],
      },
    ],
  },
];

const MainListItems = ({ toggleSubmenu }) => {
  const dispatch = useDispatch();

  const handleMenuClick = (menu: string) => {
    dispatch(sideMenuActions.sideMenuClick(menu));
    console.log('menu ', menu);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <HomeIcon />;
      case 'Dashboard':
        return <DashboardIcon />;
      case 'Orders':
        return <ShoppingCartIcon />;
      case 'Customers':
        return <PeopleIcon />;
      case 'Reports':
        return <BarChartIcon />;
      case 'Integrations':
        return <LayersIcon />;
    }
  };

  return (
    <Fragment>
      {menu.map((res: any) => (
        <ListItemButton
          key={res.id}
          onClick={() => [toggleSubmenu(), handleMenuClick(res)]}
        >
          <ListItemIcon>{renderIcon(res.name)}</ListItemIcon>
          <ListItemText primary={res.name} />
        </ListItemButton>
      ))}
    </Fragment>
  );
};

export default MainListItems;
