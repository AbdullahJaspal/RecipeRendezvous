import React, {useEffect, useState} from 'react';
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
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';
import useKeyboard from '../../components/Keyboard';
import {validateEmail} from '../../utils/utils';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const {width, height} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const imageHeight = useSharedValue(0);
  const isKeyboardOpen = useKeyboard();

  useEffect(() => {
    setLoad(false);
    GoogleSignin.configure({
      webClientId:
        '199388735458-v5c4bgck3hk65upeg6ek8fkmdpecljq5.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const Image_Height = interpolate(
      imageHeight.value,
      [0, height / 3],
      [height / 3, 50],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    return {
      height: Image_Height,
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      imageHeight.value = e.contentOffset.y;
    },
  });
  const handleSignIn = () => {
    if (email === '' || pass === '') {
      ShowSnackBar('Enter all fields please');
    } else if (!validateEmail(email)) {
      ShowSnackBar('Enter enter correct email');
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

          if (error.code === 'auth/invalid-login') {
            setLoad(false);
            ShowSnackBar('Invalid credetails');
            setLoad(false);
          }

          setLoad(false);
        });
    }
  };

  const signupwithGoogle = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential  // Link the user with the credential
      const firebaseUserCredential =
        await auth().currentUser.linkWithCredential(googleCredential);
      // You can store in your app that the account was linked.

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        contentContainerStyle={{paddingTop: height / 3}}>
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
        <View style={styles.orWrapper}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={styles.belowButton}
          onPress={() => {
            signupwithGoogle().then(() => {
              navigation.navigate('BottomTab');
            });
          }}>
          <Image
            source={require('../../assets/icons/google.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonTitle}>Sign Up with Google</Text>
        </TouchableOpacity>
        <View style={{height: isKeyboardOpen ? 150 : 20}}></View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          {
            width: '100%',
            height: height / 3,
            position: 'absolute',
            top: 0,
            resizeMode: 'stretch',
          },
          animatedStyles,
        ]}>
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
      </Animated.View>

      <Loading visible={load} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImage: {width: '100%', height: '100%'},
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
    padding: 0,
    height: 40,
    marginTop: 20,
  },
  passwordInput: {
    borderBottomWidth: 1,
    borderColor: theme.color.primary,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    padding: 0,
    marginVertical: 10,
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
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  line: {flex: 1, height: 1, backgroundColor: 'black'},
  or: {
    width: 40,
    textAlign: 'center',
    fontFamily: theme.fontFamily.regular,
  },
  belowButton: {
    width: '50%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    flexDirection: 'row',
  },
  buttonTitle: {
    fontFamily: theme.fontFamily.regular,
    width: '80%',
    fontSize: 14,
  },
  buttonIcon: {height: 20, width: 20, resizeMode: 'contain', marginLeft: 10},
});

export default Login;
