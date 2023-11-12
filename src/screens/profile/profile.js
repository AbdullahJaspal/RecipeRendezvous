import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');
const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../../assets/images/profileBg.png')}
        style={style.topBg}>
        <View style={style.overLay}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={style.profileImage}
          />
          <Text style={style.name}>Kelly Hudson</Text>
          <Text style={style.email}>KellyHudson@gmail.com</Text>
        </View>
      </ImageBackground>
      <View style={style.tabWrap}>
        <View style={style.iconWrap}>
          <Image
            source={require('../../assets/icons/edit.png')}
            style={style.icon}
          />
        </View>

        <Text style={style.tabTitle}>Edit profile</Text>
        <Image
          source={require('../../assets/icons/right.png')}
          style={style.rightIcon}
        />
      </View>
      <View style={style.tabWrap}>
        <View style={style.iconWrap}>
          <Image
            source={require('../../assets/icons/recipe.png')}
            style={style.icon}
          />
        </View>

        <Text style={style.tabTitle}>My Recipe</Text>
        <Image
          source={require('../../assets/icons/right.png')}
          style={style.rightIcon}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  topBg: {
    width: '100%',
    height: height / 2.555,
  },
  overLay: {
    backgroundColor: 'rgba(0,0,0,0.28)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
  },
  name: {color: 'white', fontFamily: theme.fontFamily.bold},
  email: {color: 'white', fontFamily: theme.fontFamily.medium},
  tabWrap: {
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
  },
  iconWrap: {
    height: 45,
    width: 45,
    backgroundColor: 'rgba(215,166,60,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: theme.color.primary,
  },
  tabTitle: {fontFamily: theme.fontFamily.bold, width: '70%'},
  rightIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: theme.color.primary,
  },
});

export default Profile;
