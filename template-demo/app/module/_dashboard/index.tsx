import SideNav from '@_layout/sidenav/SideNav';
import DashboardWorkFlow from './Dashboard';

const Dashboard = () => {
  return (
    <>
      <div className='flex flex-row'>
        <SideNav />
        <DashboardWorkFlow />
      </div>
    </>
  );
};

export default Dashboard;
