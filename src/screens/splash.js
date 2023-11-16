import react, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../theme/theme';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {saveRecipies, saveUser} from '../redux/actions/auth';
import database from '@react-native-firebase/database';
import {Loading} from '../components/Loading';

const Splash = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const allRecipies = useSelector(state => state.recipies);

  const dispatch = useDispatch();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // getData();
    dispatch(saveUser(user));
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    // console.log(allRecipies);
    // // setLoading(true);
    const reference = database().ref('/users');
    reference
      .once('value')
      .then(snapshot => {
        const pizzaCrustData = snapshot.val();
        console.log('Pizza Crust Data:', pizzaCrustData);
        console.log(pizzaCrustData);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching Pizza Crust data:', error);
        setLoading(false);
      });
  }, []);

  const getData = () => {
    console.log('startxs');
    const reference = database().ref('/allRecipies');
    reference
      .once('value')
      .then(snapshot => {
        const pizzaCrustData = snapshot.val();
        console.log('Pizza Crust Data:', pizzaCrustData);
        console.log(pizzaCrustData);
        dispatch(saveRecipies(pizzaCrustData));
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching Pizza Crust data:', error);
        setLoading(false);
      });
    console.log('last');
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/splashBg.png')}
        style={styles.imageBg}>
        <View style={{marginTop: '20%'}}>
          <Text style={styles.name}>RecipeRendezvous</Text>
          <Text style={styles.slang}>Deliciously Simple.</Text>
        </View>

        <TouchableOpacity
          style={styles.buttoCont}
          onPress={() => {
            if (!user) {
              navigation.navigate('Welcome');
            } else {
              navigation.navigate('BottomTab');
            }
          }}>
          <Text
            style={{
              fontFamily: theme.fontFamily.regular,
              color: theme.color.darkGrey,
            }}>
            Start Coking
          </Text>
        </TouchableOpacity>
        <Loading visible={loading} />
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
    color: theme.color.seconndary,
  },
  slang: {
    alignSelf: 'center',
    fontFamily: theme.fontFamily.medium,
    marginTop: 5,
    color: theme.color.darkGrey,
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
