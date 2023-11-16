import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
import {useSelector} from 'react-redux';

// PK25UIL0109000299210904

const Profile = ({navigation}) => {
  const {userData} = useSelector(state => state);
  const imageHeight = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      imageHeight.value = e.contentOffset.y;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const Image_Height = interpolate(
      imageHeight.value,
      [0, height / 2.3 - 100],
      [height / 2.3, 100],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    return {
      height: Image_Height,
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View style={[styles.imageWrap, animatedStyles]}>
        <ImageBackground
          source={require('../../assets/images/profileBg.png')}
          style={styles.topBg}>
          <View style={styles.overLay}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{userData._user.displayName}</Text>
            <Text style={styles.email}>{userData._user.email}</Text>
          </View>
        </ImageBackground>
      </Animated.View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerStyle={{
          paddingTop: height / 2.3,
        }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.tabWrap}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}>
          <View style={styles.iconWrap}>
            <Image
              source={require('../../assets/icons/edit.png')}
              style={styles.icon}
            />
          </View>

          <Text style={styles.tabTitle}>Edit profile</Text>
          <Image
            source={require('../../assets/icons/right.png')}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
        <View style={styles.tabWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={require('../../assets/icons/recipe.png')}
              style={styles.icon}
            />
          </View>

          <Text style={styles.tabTitle}>My Favorite Recipe</Text>
          <Image
            source={require('../../assets/icons/right.png')}
            style={styles.rightIcon}
          />
        </View>

        <View style={styles.tabWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={require('../../assets/icons/recipe.png')}
              style={styles.icon}
            />
          </View>

          <Text style={styles.tabTitle}>My Recipe</Text>
          <Image
            source={require('../../assets/icons/right.png')}
            style={styles.rightIcon}
          />
        </View>

        <View style={{marginTop: 50, marginBottom: 50}}>
          <TouchableOpacity
            style={styles.buttoCont}
            onPress={() => {
              auth()
                .signOut()
                .then(() => ShowSnackBar('User signed out!'));
              navigation.replace('Splash');
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
                color: theme.color.darkGrey,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttoCont}
            onPress={() => {
              auth()
                .signOut()
                .then(() => ShowSnackBar('User signed out!'));
              navigation.replace('Splash');
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
                color: theme.color.darkGrey,
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topBg: {
    width: '100%',
    height: '100%',
  },
  overLay: {
    backgroundColor: 'rgba(0,0,0,0.28)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrap: {
    width: width,
    height: height / 2.3,
    position: 'absolute',
    top: 0,
    resizeMode: 'stretch',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  tabTitle: {
    fontFamily: theme.fontFamily.bold,
    width: '70%',
    color: theme.color.seconndary,
  },
  rightIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: theme.color.primary,
  },
  buttoCont: {
    alignSelf: 'center',
    backgroundColor: theme.color.buttonBg,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 10,
  },
});

export default Profile;
