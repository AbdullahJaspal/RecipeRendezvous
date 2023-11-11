import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../theme/theme';
import {Loading} from '../../components/Loading';
import ShowSnackBar from '../../components/SnackBar';
import auth from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSignIn = () => {
    if (email === '' || pass === '') {
      ShowSnackBar('Enter all fields please');
    } else {
      setLoad(true);
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          setLoad(false);
          navigation.navigate('BottomTab');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setLoad(false);
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            setLoad(false);
            console.log('That email address is invalid!');
            setLoad(false);
          }

          setLoad(false);
          console.error(error);
        });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/signupTop.png')}
        style={styles.bgImage}>
        <View style={styles.topTab}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/icons/left.png')}
              style={styles.topTabIcon}
            />
          </TouchableOpacity>
          <Text
            style={styles.topTabText}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            Signup
          </Text>
        </View>
      </ImageBackground>
      <Text style={styles.bottomTitle}>Let’s start making good meals</Text>
      <TextInput
        placeholder="Your Email"
        placeholderTextColor={theme.color.seconndary}
        keyboardType="email-address"
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.color.seconndary}
        style={styles.passwordInput}
        value={pass}
        onChangeText={setPass}
      />
      <Text style={styles.forget}>Forget?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignIn();
        }}>
        <Text style={{fontFamily: theme.fontFamily.regular}}>Login</Text>
      </TouchableOpacity>
      <Loading visible={load} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImage: {width: '100%', height: height / 3.5},
  topTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    height: 50,
    alignItems: 'center',
  },
  topTabIcon: {width: 18, height: 18, resizeMode: 'contain'},
  topTabText: {color: 'white', fontFamily: theme.fontFamily.medium},
  bottomTitle: {
    color: theme.color.primary,
    fontFamily: theme.fontFamily.regular,
    fontSize: 28,
    width: '70%',
    marginLeft: 12,
    marginTop: 15,
  },
  emailInput: {
    borderBottomWidth: 1,
    borderColor: theme.color.primary,
    width: '80%',
    alignSelf: 'center',
    marginTop: 35,
    marginVertical: 20,
  },
  passwordInput: {
    borderBottomWidth: 1,
    borderColor: theme.color.primary,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  forget: {
    color: theme.color.seconndary,
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'right',
  },
  button: {
    backgroundColor: theme.color.lightPrimary,
    width: '50%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Login;
