import NetInfo from '@react-native-community/netinfo';

export const validateEmail = email => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

export const isConnectedToInternet = () => {
  return new Promise((resolve, reject) => {
    NetInfo.fetch()
      .then(state => {
        resolve(state.isConnected);
      })
      .catch(e => reject(e));
  });
};
