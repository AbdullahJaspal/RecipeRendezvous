import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import {Loading} from '../../components/Loading';
import useKeyboard from '../../components/Keyboard';

const {width, height} = Dimensions.get('screen');

const EditProfile = ({navigation}) => {
  const {userData} = useSelector(state => state);
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState(userData._user.email);
  const [username, setUsername] = useState(userData._user.displayName);
  const [image, setImage] = useState(userData._user.photoURL);
  const [number, setNumber] = useState(userData._user.phoneNumber);
  const [password, setPassword] = useState('');
  const isKeyboardOpen = useKeyboard();

  const gallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const dispatch = useDispatch();
  const handleUpdate = async () => {
    setLoad(true);
    await auth()
      .currentUser.updateProfile({
        displayName: username,
        photoURL: image,
      })
      .then(
        function (val) {
          console.log('hellooo g');
          dispatch(saveUser(auth().currentUser));
          setLoad(false);
        },
        function (error) {
          console.log(error);
          setLoad(false);
        },
      );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topView}>
          <View style={styles.topTab}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../../assets/icons/left.png')}
                style={styles.iconLeft}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{'Edit Profile'}</Text>
            <Text style={styles.title}>{}</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={{alignItems: 'center', marginTop: -70}}>
            <View style={styles.imageWrapper}>
              <Image source={{uri: image}} style={styles.image} />
            </View>
            <Text
              style={styles.changeText}
              onPress={() => {
                gallery();
              }}>
              Change Photo
            </Text>
          </View>

          <TextInput
            placeholder={'Username'}
            placeholderTextColor={theme.color.seconndary}
            style={styles.emailInput}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            placeholder={'Email'}
            placeholderTextColor={theme.color.seconndary}
            keyboardType="email-address"
            style={styles.emailInput}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder={'Phone number'}
            placeholderTextColor={theme.color.seconndary}
            style={styles.emailInput}
            value={number}
            onChangeText={setNumber}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={theme.color.seconndary}
            style={styles.emailInput}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleUpdate();
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
                color: theme.color.seconndary,
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <View style={{height: isKeyboardOpen ? 200 : 0}} />
        </View>
      </ScrollView>
      <Loading visible={load} />
    </View>
  );
};

const styles = StyleSheet.create({
  topTab: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
  iconLeft: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 24,
    color: theme.color.primary,
  },
  emailInput: {
    borderBottomWidth: 1,
    borderColor: theme.color.primary,
    width: '80%',
    alignSelf: 'center',
    padding: 0,
    height: 40,
    marginTop: 20,
    color: theme.color.seconndary,
  },
  button: {
    backgroundColor: theme.color.lightPrimary,
    width: '50%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  topView: {
    backgroundColor: theme.color.primary,
    height: height / 4.5,
  },
  bottomView: {
    backgroundColor: 'white',
    height: height - height / 4.5,
  },
  imageWrapper: {
    height: 140,
    width: 140,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#E4E4E4',
  },
  image: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 100,
  },
  changeText: {
    fontFamily: theme.fontFamily.medium,
    color: theme.color.seconndary,
    marginTop: 4,
  },
});

export default EditProfile;
