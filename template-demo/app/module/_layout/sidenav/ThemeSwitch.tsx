import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Tooltip } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { themeChangeActions } from '@_store/theme_slide';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.theme.mode);

  const handleThemeChange = (mode: string) => {
    dispatch(themeChangeActions.themeChangeClick(mode));
  };

  return (
    <>
      <div className='center'>
        <Tooltip content='Change Theme' color='primary'>
          {mode === 'light' ? (
            <LightModeIcon
              className='text-2xl text-default-400 cursor-pointer'
              onClick={() => handleThemeChange('dark')}
            />
          ) : (
            <DarkModeIcon
              className='text-2xl text-default-400 cursor-pointer'
              onClick={() => handleThemeChange('light')}
            />
          )}
        </Tooltip>
      </div>
    </>
  );
};

export default ThemeSwitch;
