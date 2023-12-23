import Header from '@_layout/header/Header';
import TabSelectionBody from '@_shared/tab/TabSelectionBody';

const DashboardWorkFlow = () => {
  return (
    <>
      <div className='flex flex-col w-full'>
        <Header />
        <TabSelectionBody />
      </div>
    </>
  );
};

export default DashboardWorkFlow;
