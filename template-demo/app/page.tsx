'use client';

import { Provider, useSelector } from 'react-redux';
import Template from './module';
import store from './module/store';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Provider store={store}>
        <Template />
      </Provider>
    </main>
  );
}
