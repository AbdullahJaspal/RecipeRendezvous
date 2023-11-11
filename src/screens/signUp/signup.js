import React from 'react';
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
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');

const Signup = ({navigation}) => {
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
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </View>
      </ImageBackground>
      <Text style={styles.bottomTitle}>Let’s start making good meals</Text>
      <TextInput
        placeholder="Your Email"
        placeholderTextColor={theme.color.seconndary}
        keyboardType="email-address"
        style={styles.emailInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.color.seconndary}
        style={styles.passwordInput}
      />

      <TouchableOpacity style={styles.button}>
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
          source={require('../../assets/icons/facebook.png')}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonTitle}>Sign Up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.belowButton}>
        <Image
          source={require('../../assets/icons/google.png')}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonTitle}>Sign Up with Google</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>Term of Use and Privacy Policy</Text>
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
