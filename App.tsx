import React from 'react';
import MainNav from './src/navigation/mainNav';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import EditProfile from './src/screens/editProfile/editProfile';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <MainNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
