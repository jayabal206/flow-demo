import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from '@nextui-org/react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Notification() {
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0';

  return (
    <Dropdown>
      <DropdownTrigger>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={4} color='primary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </DropdownTrigger>
      <DropdownMenu variant='faded' aria-label='Dropdown menu with description'>
        <DropdownItem key='new' shortcut='⌘N' description='Create a new file'>
          New file
        </DropdownItem>
        <DropdownItem key='copy' shortcut='⌘C' description='Copy the file link'>
          Copy link
        </DropdownItem>
        <DropdownItem
          key='edit'
          shortcut='⌘⇧E'
          showDivider
          description='Allows you to edit the file'
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key='delete'
          className='text-danger'
          color='danger'
          shortcut='⌘⇧D'
          description='Permanently delete the file'
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
