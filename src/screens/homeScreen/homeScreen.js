import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';

const {width, height} = Dimensions.get('screen');

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ImageBackground
          style={{height: height / 2.8, width: '100%'}}
          source={require('../../assets/images/homeTop.png')}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(96,96,96,0.32)',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.semiBBold,
                fontSize: 26,
                color: 'white',
                width: '60%',
                marginLeft: 10,
              }}>
              20 Weekend Dinner Recipes
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginVertical: 6,
              }}>
              <Text
                style={{
                  fontFamily: theme.fontFamily.semiBBold,
                  fontSize: 12,
                  color: 'white',
                  width: '60%',
                }}>
                20 easy to cook for you
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  paddingHorizontal: 5,
                  paddingVertical: 2,
                }}>
                <Text
                  style={{
                    fontFamily: theme.fontFamily.semiBBold,
                    fontSize: 12,
                    color: 'black',
                  }}>
                  View More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
