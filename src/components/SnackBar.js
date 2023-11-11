import React from 'react';
import Snackbar from 'react-native-snackbar';

const ShowSnackBar = (
  text,
  bgColor = 'red',
  duration = Snackbar.LENGTH_SHORT,
) => {
  Snackbar.show({
    text: text,
    backgroundColor: bgColor,
    duration: duration,
  });
};

export default ShowSnackBar;
