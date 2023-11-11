import react from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../theme/theme';

const Splash = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/splashBg.png')}
        style={styles.imageBg}
        resizeMode="contain">
        <View style={{marginTop: '20%'}}>
          <Text style={styles.name}>RecipeRendezvous</Text>
          <Text style={styles.slang}>Deliciously Simple.</Text>
        </View>

        <TouchableOpacity
          style={styles.buttoCont}
          onPress={() => {
            navigation.navigate('Welcome');
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

const styles = StyleSheet.create({
  imageBg: {width: '100%', height: '100%', justifyContent: 'space-between'},
  name: {
    alignSelf: 'center',
    fontFamily: theme.fontFamily.bold,
    fontSize: 20,
  },
  slang: {
    alignSelf: 'center',
    fontFamily: theme.fontFamily.medium,
    marginTop: 5,
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
});
export default Splash;
