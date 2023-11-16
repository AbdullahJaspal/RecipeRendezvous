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

const CategoryRecipies = ({navigation, route}) => {
  const {data, type} = route.params;
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
        style={{width: width / 1.7, height: '90%', backgroundColor: 'white'}}
        onPress={() => {
          navigation.navigate('RecipeDetails', {item: item});
        }}>
        <ImageBackground
          source={{uri: item.image}}
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
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.7)',
              'rgba(0,0,0,0.6)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.1)',
            ]}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 10,
                fontFamily: theme.fontFamily.medium,
                fontSize: 18,
                width: '80%',
                color: 'white',
              }}>
              {item.name}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderBottom = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginLeft: 14, width: width / 2.7}}
        onPress={() => {
          navigation.navigate('RecipeDetails', {item: item});
        }}>
        <View style={{borderWidth: 1, borderRadius: 10}}>
          <Image
            source={{uri: item.image}}
            style={{
              borderRadius: 10,
              height: 120,
              width: '100%',
            }}
          />
        </View>
        <View style={{marginLeft: 3}}>
          <Text style={styles.renderBottomName} numberOfLines={2}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 12,
                marginLeft: 3,
                color: theme.color.darkGrey,
              }}>
              {item.times.Preparation}
            </Text>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 12,
                marginLeft: 3,
                color: theme.color.primary,
              }}>
              {item.vote_count} cooked
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: '65%'}}>
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
          <Text style={styles.title}>{type.replace('\n', ' ')}</Text>
          <Image source={require('../../assets/icons/left.png')} />
        </View>
        <Text
          style={{
            fontFamily: theme.fontFamily.semiBBold,
            marginLeft: 30,
            fontSize: 18,
            marginVertical: 10,
            color: theme.color.seconndary,
          }}>
          Top Recipies
        </Text>
        <View style={{height: '90%'}}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={data.slice(0, 5)}
            sliderWidth={width}
            itemWidth={width / 1.5}
            renderItem={_renderItem}
          />
        </View>
      </View>
      <View style={{}}>
        <Text
          style={{
            fontFamily: theme.fontFamily.semiBBold,
            marginLeft: 30,
            fontSize: 18,
            marginTop: 20,
            marginBottom: 10,
            color: theme.color.seconndary,
          }}>
          All others
        </Text>
        <View style={{width: '98%', alignSelf: 'center', marginBottom: 20}}>
          <FlatList
            renderItem={renderBottom}
            showsHorizontalScrollIndicator={false}
            data={data.slice(5)}
            horizontal
          />
        </View>
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
  renderBottomName: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 3,
    color: 'black',
  },
});

export default CategoryRecipies;
