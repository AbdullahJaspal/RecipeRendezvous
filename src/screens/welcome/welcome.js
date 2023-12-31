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
const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/welomeBg.png')}
        style={styles.bgImage}>
        <View style={styles.innerCont}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <Image
              source={require('../../assets/icons/chefHat.png')}
              style={styles.chefHat}
            />
            <Text style={styles.name}>RecipeRendezvous</Text>
            <Text style={styles.description}>
              Nutritionally balanced, easy to cook recipes. Quality fresh local
              ingredients.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttoCont}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
                color: theme.color.darkGrey,
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.already}>Already have an account?</Text>
            <Text
              style={styles.login}
              onPress={() => {
                navigation.navigate('Login');
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
  bgImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoCont: {
    marginBottom: '20%',
    alignSelf: 'center',
    backgroundColor: theme.color.buttonBg,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 50,
    borderWidth: 1,
  },
  innerCont: {
    height: height / 1.9,
    width: width / 1.4,
    borderWidth: 0.5,
    backgroundColor: 'rgba(196,196,196,0.65)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  chefHat: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginTop: 20,
  },
  name: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    color: theme.color.seconndary,
  },
  description: {
    fontFamily: theme.fontFamily.semiBBold,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    width: '80%',
    textAlign: 'center',
    color: theme.color.seconndary,
  },
  already: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 12,
    width: '80%',
    textAlign: 'center',
    color: theme.color.seconndary,
  },
  login: {
    fontFamily: theme.fontFamily.semiBBold,
    fontSize: 14,
    width: '80%',
    textAlign: 'center',
    color: theme.color.seconndary,
  },
});
export default Welcome;
