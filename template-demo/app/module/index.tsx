import { useSelector } from 'react-redux';
import { ProviderAll } from './Provider';
import LoginTemplate from './_auth/Login';
import Dashboard from './_dashboard';

export default function Template() {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <>
      <ProviderAll>{!isAuth ? <LoginTemplate /> : <Dashboard />}</ProviderAll>
    </>
  );
}
