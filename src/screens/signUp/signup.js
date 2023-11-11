import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');
import auth from '@react-native-firebase/auth';
import ShowSnackBar from '../../components/SnackBar';
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Loading} from '../../components/Loading';

const Signup = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const imageHeight = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      imageHeight.value = e.contentOffset.y;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const Image_Height = interpolate(
      imageHeight.value,
      [0, height / 3 - 100],
      [height / 3, 100],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    return {
      height: Image_Height,
    };
  });

  useEffect(() => {
    setLoad(false);
  }, []);
  const handleSignup = () => {
    if (email === '' || pass === '') {
      ShowSnackBar('Enter all fields please');
    } else {
      setLoad(true);
      auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          setLoad(false);
          ShowSnackBar('User account created & signed in!', 'green');
          navigation.navigate('Login');
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
    <SafeAreaView style={{height: height, width: width}}>
      <Animated.View
        style={[{width: '100%', height: height / 3}, animatedStyles]}>
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
                navigation.navigate('Login');
              }}>
              Login
            </Text>
          </View>
        </ImageBackground>
      </Animated.View>
      <Animated.ScrollView onScroll={scrollHandler} contentContainerStyle={{}}>
        <Text style={styles.bottomTitle}>Let’s start making good meals</Text>
        <TextInput
          placeholder="Your Email"
          placeholderTextColor={theme.color.seconndary}
          keyboardType="email-address"
          style={styles.emailInput}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.color.seconndary}
          style={styles.passwordInput}
          onChangeText={setPass}
          value={pass}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSignup();
          }}>
          <Text style={{fontFamily: theme.fontFamily.regular}}>
            Create Account
          </Text>
        </TouchableOpacity>
        <View style={styles.orWrapper}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.belowButton}>
          <Image
            source={require('../../assets/icons/google.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonTitle}>Sign Up with Google</Text>
        </TouchableOpacity>
        <Text style={styles.terms}>Term of Use and Privacy Policy</Text>
      </Animated.ScrollView>
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
  terms: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 11,
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default Signup;
