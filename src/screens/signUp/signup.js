import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');
const Signup = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/signupTop.png')}
        style={{width: '100%', height: height / 3.5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
            height: 50,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/icons/left.png')}
            style={{width: 18, height: 18, resizeMode: 'contain'}}
          />
          <Text style={{color: 'white', fontFamily: theme.fontFamily.medium}}>
            Login
          </Text>
        </View>
      </ImageBackground>
      <Text
        style={{
          color: theme.color.primary,
          fontFamily: theme.fontFamily.regular,
          fontSize: 28,
          width: '70%',
          marginLeft: 12,
          marginTop: 15,
        }}>
        Let’s start making good meals
      </Text>
      <TextInput
        placeholder="Your Email"
        placeholderTextColor={theme.color.seconndary}
        keyboardType="email-address"
        style={{
          borderBottomWidth: 1,
          borderColor: theme.color.primary,
          width: '80%',
          alignSelf: 'center',
          marginTop: 35,
          marginVertical: 20,
        }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.color.seconndary}
        style={{
          borderBottomWidth: 1,
          borderColor: theme.color.primary,
          width: '80%',
          alignSelf: 'center',
          marginVertical: 20,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: theme.color.lightPrimary,
          width: '50%',
          height: 40,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontFamily: theme.fontFamily.regular}}>
          Create Account
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '40%',
          alignSelf: 'center',
          marginVertical: 5,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text
            style={{
              width: 40,
              textAlign: 'center',
              fontFamily: theme.fontFamily.regular,
            }}>
            OR
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <TouchableOpacity
        style={{
          width: '50%',
          height: 40,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginTop: 20,
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../assets/icons/facebook.png')}
          style={{height: 20, width: 20, resizeMode: 'contain', marginLeft: 10}}
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            width: '80%',
            fontSize: 14,
          }}>
          Sign Up with Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 40,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginTop: 10,
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../assets/icons/google.png')}
          style={{height: 20, width: 20, resizeMode: 'contain', marginLeft: 10}}
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            width: '80%',
            fontSize: 14,
          }}>
          Sign Up with Google
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: theme.fontFamily.regular,
          fontSize: 11,
          alignSelf: 'center',
          marginTop: 10,
        }}>
        Term of Use and Privacy Policy
      </Text>
    </SafeAreaView>
  );
};

export default Signup;
