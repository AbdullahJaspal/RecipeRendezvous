import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');
const Welcome = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/welomeBg.png')}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: height / 1.9,
            width: width / 1.4,
            borderWidth: 0.5,
            backgroundColor: 'rgba(196,196,196,0.65)',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <Image
              source={require('../../assets/icons/chefHat.png')}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
                marginTop: 20,
              }}
            />
            <Text
              style={{
                fontFamily: theme.fontFamily.bold,
                fontSize: 16,
                marginTop: 10,
                marginBottom: 10,
              }}>
              RecipeRendezvous
            </Text>
            <Text
              style={{
                fontFamily: theme.fontFamily.semiBBold,
                fontSize: 14,
                marginTop: 5,
                marginBottom: 10,
                width: '80%',
                textAlign: 'center',
              }}>
              Nutritionally balanced, easy to cook recipes. Quality fresh local
              ingredients.
            </Text>
          </View>
          <TouchableOpacity style={styles.buttoCont}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
                fontSize: 12,
                width: '80%',
                textAlign: 'center',
              }}>
              Already have an account?
            </Text>
            <Text
              style={{
                fontFamily: theme.fontFamily.semiBBold,
                fontSize: 14,
                width: '80%',
                textAlign: 'center',
              }}>
              LOGIN
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  buttoCont: {
    marginBottom: '20%',
    alignSelf: 'center',
    backgroundColor: theme.color.buttonBg,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 50,
    borderWidth: 1,
  },
});
export default Welcome;
