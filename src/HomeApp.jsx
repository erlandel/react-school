import React from 'react';
import { Provider } from 'react-redux';
import { AppRouters } from './routers/AppRouters';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import{ persistStore } from 'redux-persist';

export const HomeApp = () => {
  let persistor = persistStore(store);
 return (   
  <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div className='fond-home'>
                <AppRouters />
                </div>
            </PersistGate>
        </Provider>
  </React.StrictMode>
 );
};
