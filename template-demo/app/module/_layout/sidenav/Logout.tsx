import { Button, Tooltip } from '@nextui-org/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { authActions } from '@_store/auth';

const Logout = () => {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <div className='flex justify-center items-center'>
        <Tooltip content='Logout' color='primary'>
          <Button onClick={onLogoutHandler} isIconOnly aria-label='Logout'>
            <LogoutIcon />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default Logout;
