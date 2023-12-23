import { useDispatch } from 'react-redux';
import { Navbar } from '@nextui-org/react';

import ChangeLanguage from '@_translation/ChangeLanguage';
import { authActions } from '@_store/auth';
import TabSelection from '@_shared/tab/TabSelection';
import HeaderIcons from './HeaderIcons';

export default function Header() {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Navbar>
        <div className='w-10/12'>
          <TabSelection />
        </div>

        <HeaderIcons />
        <ChangeLanguage />
      </Navbar>
    </>
  );
}
