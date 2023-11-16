import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
import {useSelector} from 'react-redux';
const {width, height} = Dimensions.get('screen');
const EditProfile = () => {
  const {userData} = useSelector(state => state);
  const {email, setEmail} = useState(userData._user.providerData.email);
  const {username, setUsername} = useState(userData._user.displayName);
  const {image, setImage} = useState(userData._user.photoURL);
  const {number, setNumber} = useState(userData._user.phoneNumber);
  const {password, setPassword} = useState(userData._user.email);

  console.log(userData._user.email);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.topView} />
      <View style={styles.bottomView}>
        <View style={{alignItems: 'center', marginTop: -70}}>
          <View style={styles.imageWrapper}>
            <Image source={{uri: image}} style={styles.image} />
          </View>
          <Text style={styles.changeText}>Change Photo</Text>
        </View>

        <TextInput
          placeholder="Username"
          placeholderTextColor={theme.color.seconndary}
          style={styles.emailInput}
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor={theme.color.seconndary}
          keyboardType="email-address"
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Phone number"
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
            handleSignIn();
          }}>
          <Text
            style={{
              fontFamily: theme.fontFamily.regular,
              color: theme.color.seconndary,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
