import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notification from '@_components/notification/Notification';

export default function HeaderIcons() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          >
            <Badge badgeContent={4} color='error'>
              <MailIcon />
            </Badge>
          </IconButton>
          <Notification />
        </Box>
      </Box>
    </>
  );
}
