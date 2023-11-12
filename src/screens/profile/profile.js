import React from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');
const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../../assets/images/profileBg.png')}
        style={{
          width: '100%',
          height: height / 2.555,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.28)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: 'white',
              marginTop: 10,
            }}
          />
          <Text style={{color: 'white', fontFamily: theme.fontFamily.bold}}>
            Kelly Hudson
          </Text>
          <Text style={{color: 'white', fontFamily: theme.fontFamily.medium}}>
            KellyHudson@gmail.com
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 70,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
          backgroundColor: 'white',
          marginTop: 30,
          borderRadius: 10,
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'rgba(215,166,60,0.28)',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/icons/edit.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: theme.color.primary,
            }}
          />
        </View>

        <Text style={{fontFamily: theme.fontFamily.bold, width: '70%'}}>
          Edit profile
        </Text>
        <Image
          source={require('../../assets/icons/right.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: theme.color.primary,
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 70,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
          backgroundColor: 'white',
          marginTop: 30,
          borderRadius: 10,
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'rgba(215,166,60,0.28)',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/icons/recipe.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: theme.color.primary,
            }}
          />
        </View>

        <Text style={{fontFamily: theme.fontFamily.bold, width: '70%'}}>
          My Recipe
        </Text>
        <Image
          source={require('../../assets/icons/right.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: theme.color.primary,
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
