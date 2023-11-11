import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../theme/theme';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

const CategoryRecipies = ({navigation}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {currentPage} = sliderState;
  const {currentPage: pageIndex} = sliderState;

  const setSliderPage = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{width: width / 1.7, height: height / 2}}
        onPress={() => {
          navigation.navigate('RecipeDetails');
        }}>
        <ImageBackground
          source={item.img}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
            borderWidth: 1,
          }}
          borderRadius={20}>
          <LinearGradient
            style={{
              width: '100%',
              paddingHorizontal: 10,
              paddingTop: 6,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            colors={[
              'rgba(225,225,225,0.8)',
              'rgba(225,225,225,0.7)',
              'rgba(225,225,225,0.6)',
              'rgba(225,225,225,0.5)',
              'rgba(225,225,225,0.1)',
            ]}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 10,
                fontFamily: theme.fontFamily.medium,
                fontSize: 18,
                width: '60%',
              }}>
              Family Vegan Salad Tips
            </Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderBottom = () => {
    return (
      <TouchableOpacity
        style={{height: height / 5, marginLeft: 14}}
        onPress={() => {
          navigation.navigate('RecipeDetails');
        }}>
        <Image
          source={require('../../assets/images/grilledSalmon.png')}
          style={{borderRadius: 10, borderWidth: 1}}
        />
        <View style={{marginLeft: 3}}>
          <Text
            style={{
              fontFamily: theme.fontFamily.medium,
              fontSize: 15,
              marginTop: 5,
              marginLeft: 3,
            }}>
            Miso-grilled Salmon
          </Text>
          <Text
            style={{
              fontFamily: theme.fontFamily.medium,
              fontSize: 12,
              marginLeft: 3,
            }}>
            12 min
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
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
        <Text style={styles.title}>Good Food</Text>
        <Image source={require('../../assets/icons/left.png')} />
      </View>

      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={[
            {img: require('../../assets/images/goodFood1.png')},
            {img: require('../../assets/images/goodFood2.png')},
            {img: require('../../assets/images/goodFood3.png')},
          ]}
          sliderWidth={width}
          itemWidth={width / 1.5}
          renderItem={_renderItem}
        />
      </View>

      <Text
        style={{
          fontFamily: theme.fontFamily.semiBBold,
          marginLeft: 30,
          marginTop: 20,
          fontSize: 18,
        }}>
        Health Vegan Life
      </Text>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
        <FlatList
          renderItem={renderBottom}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}]}
          horizontal
        />
      </View>
    </SafeAreaView>
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
  },
  iconLeft: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: theme.color.primary,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 24,
    color: theme.color.primary,
  },
});

export default CategoryRecipies;
