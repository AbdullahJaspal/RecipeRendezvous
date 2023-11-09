import react from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme/theme';

const Wellcome = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/welcomeBG.png')}
        style={{width: '100%', height: '100%', justifyContent: 'space-between'}}
        resizeMode="contain">
        <View style={{marginTop: '20%'}}>
          <Text
            style={{
              alignSelf: 'center',

              fontFamily: theme.fontFamily.bold,
              fontSize: 20,
            }}>
            RecipeRendezvous
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: theme.fontFamily.medium,
              marginTop: 5,
            }}>
            Deliciously Simple.
          </Text>
        </View>

        <TouchableOpacity
          style={{
            marginBottom: '20%',
            alignSelf: 'center',
            backgroundColor: theme.color.buttonBg,
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 50,
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontFamily: theme.fontFamily.regular,
            }}>
            Start Coking
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Wellcome;
