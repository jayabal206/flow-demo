import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { languageActions } from '../store/lang_slice';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';

const ChangeLanguage = () => {
  const [t, i18n] = useTranslation('global');
  const [language, setLanguage] = useState('en');
  const dispatch = useDispatch();
  const toggleLanguageChange = () => {
    const lang = language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(lang);
    setLanguage(lang);
    const direction = language === 'en' ? 'rtl' : 'ltr';
    dispatch(languageActions.changeDirection(direction));
  };
  return (
    <>
      <div className='flex justify-end'>
        <Button
          variant='bordered'
          className='uppercase'
          onClick={toggleLanguageChange}
        >
          {language}
        </Button>
        {/* <small onClick={toggleLanguageChange}>{language}</small> */}
        {/* <Dropdown>
          <DropdownTrigger>
            <Button variant='bordered' className='uppercase'>
              {language}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label='Single selection example'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
          >
            <DropdownItem key='EN' onClick={() => handleLanguageChange('en')}>
              en
            </DropdownItem>
            <DropdownItem key='AR' onClick={() => handleLanguageChange('ar')}>
              ar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </div>
    </>
  );
};

export default ChangeLanguage;
