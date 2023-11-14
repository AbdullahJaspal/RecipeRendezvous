import * as types from './types';
import {apiKey, baseUrl} from '../../constants/constants';
import ShowSnackBar from '../../components/SnackBar';
import {fetchHotelDetail, homeLoad} from './home';

export const registerManager = (data, handleSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}register_manager.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log('response.data.data');
          console.log(response);
          dispatch(authLoad(false));
          if (response.state === 'OK') {
            dispatch(signupSuccess(response.data.manager));
            handleSuccess(true);
          } else {
            ShowSnackBar('There is something wrong');
          }
        })
        .catch(function (error) {
          dispatch(authLoad(false));
          console.log(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};

// helping functions

export const saveUser = data => {
  return {
    type: types.SAVE_USER,
    payload: data,
  };
};
