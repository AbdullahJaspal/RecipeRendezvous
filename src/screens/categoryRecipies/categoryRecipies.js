import React, {useRef, useState} from 'react';
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

  console.log(data);

  const _carousel = useRef();

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.topWrap}
        onPress={() => {
          navigation.navigate('RecipeDetails', {item: item});
        }}>
        <ImageBackground
          source={{uri: item.image}}
          style={styles.topImage}
          borderRadius={20}>
          <LinearGradient style={styles.gradient} colors={theme.color.gradient}>
            <Text style={styles.topName}>{item.name}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderBottom = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderWrapBottom}
        onPress={() => {
          navigation.navigate('RecipeDetails', {item: item});
        }}>
        <View style={{borderWidth: 1, borderRadius: 10}}>
          <Image source={{uri: item.image}} style={styles.bottomImage} />
        </View>
        <View style={{marginLeft: 3}}>
          <Text style={styles.renderBottomName} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={styles.timeCont}>
            <Text style={styles.prepTime}>{item.times.Preparation}</Text>
            <Text style={styles.noOfTimeCooked}>{item.vote_count} cooked</Text>
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
        <Text style={styles.topTitle}>Top Recipies</Text>
        <View style={{height: '90%'}}>
          <Carousel
            ref={_carousel}
            data={data.slice(0, 5)}
            sliderWidth={width}
            itemWidth={width / 1.5}
            renderItem={_renderItem}
          />
        </View>
      </View>
      <View style={{}}>
        <View style={styles.bottomTitleCont}>
          <Text style={styles.bottomTitle}>All others</Text>
          <Text
            style={{color: theme.color.primary}}
            onPress={() => {
              navigation.navigate('AllRecipies', {data: data, type: type});
            }}>
            View all
          </Text>
        </View>
        <View style={styles.bottomListWrap}>
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
  gradient: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 6,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  renderWrapBottom: {marginLeft: 14, width: width / 2.7},
  topWrap: {
    width: width / 1.7,
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  topTitle: {
    fontFamily: theme.fontFamily.semiBBold,
    marginLeft: 30,
    fontSize: 18,
    marginVertical: 10,
    color: theme.color.seconndary,
  },
  bottomTitle: {
    fontFamily: theme.fontFamily.semiBBold,
    fontSize: 18,
    color: theme.color.seconndary,
  },
  bottomListWrap: {width: '98%', alignSelf: 'center', marginBottom: 20},
  noOfTimeCooked: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
    marginLeft: 3,
    color: theme.color.primary,
  },
  prepTime: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
    marginLeft: 3,
    color: theme.color.darkGrey,
  },
  timeCont: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottomImage: {
    borderRadius: 10,
    height: 120,
    width: '100%',
  },
  topImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderWidth: 1,
  },
  topName: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: theme.fontFamily.medium,
    fontSize: 18,
    width: '80%',
    color: 'white',
  },
  bottomTitleCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
});

export default CategoryRecipies;
