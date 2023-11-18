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
  Platform,
} from 'react-native';
import {theme} from '../../theme/theme';
import {Loading} from '../../components/Loading';
import ShowSnackBar from '../../components/SnackBar';
// import auth from '@react-native-firebase/auth';
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
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const {width, height} = Dimensions.get('screen');

const ForgetPassword = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState('');

  const imageHeight = useSharedValue(0);
  const isKeyboardOpen = useKeyboard();

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
  useEffect(() => {
    setLoad(false);
  }, []);

  function resetPassword(email) {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(a => {
        setLoad(false);
        ShowSnackBar(
          'We have sent you reset link on your provided email.',
          'green',
        );
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
      });
  }
  const handleNav = async () => {
    if (email === '') {
      ShowSnackBar('Enter all fields please');
    } else if (!validateEmail(email)) {
      ShowSnackBar('Enter enter correct email');
    } else {
      setLoad(true);
      try {
        await resetPassword(email);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        contentContainerStyle={{paddingTop: height / 3}}>
        <Text style={styles.bottomTitle}>Enter Your Email</Text>
        <TextInput
          placeholder="Your Email"
          placeholderTextColor={theme.color.seconndary}
          keyboardType="email-address"
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNav();
          }}>
          <Text style={styles.buttonTitle}>Send</Text>
        </TouchableOpacity>

        <View style={{height: isKeyboardOpen ? 150 : 20}}></View>
      </Animated.ScrollView>
      <Animated.View style={[styles.topImageWrap, animatedStyles]}>
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
    marginTop: Platform.OS === 'ios' ? 40 : 0,
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
    color: 'black',
  },
  passwordInput: {
    borderBottomWidth: 1,
    borderColor: theme.color.primary,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    padding: 0,
    marginVertical: 10,
    color: 'black',
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
  buttonTitle: {
    fontFamily: theme.fontFamily.regular,
    color: theme.color.seconndary,
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
    color: theme.color.seconndary,
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
    color: theme.color.seconndary,
  },
  buttonIcon: {height: 20, width: 20, resizeMode: 'contain', marginLeft: 10},
  topImageWrap: {
    width: '100%',
    height: height / 3,
    position: 'absolute',
    top: 0,
    resizeMode: 'stretch',
  },
});

export default ForgetPassword;
