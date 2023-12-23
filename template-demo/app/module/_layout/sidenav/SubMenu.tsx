import { Fragment, useState } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Collapse,
  Divider,
  List,
  IconButton,
  Box,
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { sideMenuActions } from '@_store/menu_slice';

const SubMenuItem = ({ toggleSubmenu }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const dispatch = useDispatch();
  const menu = useSelector((state: any) => state.menu.data);
  const toggleDrawer = () => {
    dispatch(sideMenuActions.sideMenuClick(''));
  };
  return (
    <>
      <Box sx={{ width: 250 }} role='sub menu'>
        <List component='nav'>
          <Fragment>
            <ListSubheader component='div' inset>
              {menu.name}
            </ListSubheader>
            <Divider />
            <ListItemButton onClick={toggleSubmenu}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary='Sub Menu 1' />
            </ListItemButton>
            <ListItemButton onClick={toggleSubmenu}>
              <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
              <ListItemText primary='Sub Menu 2' />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
              <ListItemText primary='Sub Menu 3' />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Divider />
              <List component='div' disablePadding>
                <ListItemButton onClick={toggleSubmenu}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary='List item 1' />
                </ListItemButton>
                <ListItemButton onClick={toggleSubmenu}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary='List item 2' />
                </ListItemButton>
              </List>
            </Collapse>
          </Fragment>
        </List>
      </Box>
    </>
  );
};

export default SubMenuItem;
