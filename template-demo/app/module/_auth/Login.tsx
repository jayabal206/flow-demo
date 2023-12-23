import { useState } from 'react';
import { Card, Spacer, Button, Input, Checkbox, Link } from '@nextui-org/react';
import { Email, Lock, RemoveRedEye, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@_store/auth';
import { useTranslation } from 'react-i18next';
// import { t } from 'i18next';

const LoginTemplate = () => {
  const [t] = useTranslation('global');
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const dispatch = useDispatch();

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    console.log('events', event);

    dispatch(authActions.login());
  };
  return (
    <>
      <div className='min-h-screen flex justify-center items-center'>
        <Card className='w-[400px] p-5 h-96 flex flex-col justify-center'>
          <form className='form-group' onSubmit={onSubmitHandler}>
            <h4 className='font-bold text-2xl text-center'>
              {t('login.header')}
            </h4>
            <Spacer y={10} />
            <Input
              fullWidth
              variant='bordered'
              type='email'
              placeholder={t('login.email')}
              startContent={
                <Email className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
              }
            />
            <Spacer y={2} />
            <Input
              fullWidth
              variant='bordered'
              placeholder={t('login.password')}
              startContent={
                <Lock className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
              }
              endContent={
                isVisible ? (
                  <VisibilityOff
                    onClick={toggleVisibility}
                    className='text-2xl text-default-400 cursor-pointer'
                  />
                ) : (
                  <RemoveRedEye
                    onClick={toggleVisibility}
                    className='text-2xl text-default-400 cursor-pointer'
                  />
                )
              }
              type={isVisible ? 'text' : 'password'}
            />
            <Spacer y={4} />
            <div className='flex flex-row justify-between'>
              <Checkbox defaultSelected>{t('login.remember_me')}</Checkbox>
              <Link href='#' underline='always'>
                {t('login.forget_password')}?
              </Link>
            </div>
            <Spacer y={10} />
            <Button
              type='submit'
              fullWidth
              size='lg'
              color='primary'
              variant='solid'
              className='border-0'
            >
              {t('login.signin')}
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginTemplate;
