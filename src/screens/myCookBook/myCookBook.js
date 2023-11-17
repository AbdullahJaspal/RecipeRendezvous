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

const belowData = [
  {
    name: 'Chicken Salad',
    des: 'Special Diets',
    view: '6.6K',
    stars: 4,
  },
  {
    name: 'Chicken Salad',
    des: 'Special Diets',
    view: '6.6K',
    stars: 3,
  },
  {
    name: 'Chicken Salad',
    des: 'Special Diets',
    view: '6.6K',
    stars: 2,
  },
  {
    name: 'Chicken Salad',
    des: 'Special Diets',
    view: '6.6K',
    stars: 55,
  },
];

const MyCookBook = ({navigation}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const Stars = ({rating, num}) => {
    return (
      <Image
        source={require('../../assets/icons/stars.png')}
        style={{
          tintColor: rating >= num ? '#FFE601' : '#C4C4C4',
        }}
      />
    );
  };

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.topWrapper}
        onPress={() => {
          navigation.navigate('RecipeDetails');
        }}>
        <ImageBackground
          source={item.img}
          style={styles.imageBgTop}
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
        />
        <View style={{marginTop: -30, marginLeft: 10}}>
          <Text
            style={{
              fontFamily: theme.fontFamily.bold,
              width: '80%',
            }}>
            Lighter Creamy Cajun Chicken Pasta
          </Text>
          <Text
            style={{
              fontFamily: theme.fontFamily.regular,
              width: '65%',
              color: theme.color.primary,
            }}>
            Italian Food
          </Text>
          <View style={styles.starsCont}>
            <Stars rating={item.stars} num={1} />
            <Stars rating={item.stars} num={2} />
            <Stars rating={item.stars} num={3} />
            <Stars rating={item.stars} num={4} />
            <Stars rating={item.stars} num={5} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderBottom = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderBottomWrap}
        onPress={() => {
          navigation.navigate('RecipeDetails');
        }}>
        <Image
          source={require('../../assets/images/belowImg1.png')}
          style={styles.imageBelow}
        />
        <View style={styles.nameContBelow}>
          <Text style={styles.nameBelow}>Chicken Salad</Text>
          <Text style={styles.typeBelow}>Special Diets</Text>
          <View style={styles.starsCont}>
            <Stars rating={item.stars} num={1} />
            <Stars rating={item.stars} num={2} />
            <Stars rating={item.stars} num={3} />
            <Stars rating={item.stars} num={4} />
            <Stars rating={item.stars} num={5} />
          </View>
        </View>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            textAlign: 'center',
          }}>
          {item.view}
          {'\n'}
          {'Cooked'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={styles.topTab}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecipeDetails');
          }}>
          <Image
            source={require('../../assets/icons/left.png')}
            style={styles.iconLeft}
          />
        </TouchableOpacity>

        <Text style={styles.title}>My Cook Book</Text>
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
          itemWidth={width / 1.3}
          renderItem={_renderItem}
        />
      </View>

      <Text
        style={{
          fontFamily: theme.fontFamily.semiBBold,
          marginLeft: 30,
          fontSize: 18,
          color: theme.color.primary,
        }}>
        Recent Recipes
      </Text>
      <View
        style={{
          width: width,
          alignSelf: 'center',
          marginTop: 10,
          height: height / 4,
        }}>
        <FlatList
          renderItem={renderBottom}
          showsHorizontalScrollIndicator={false}
          data={belowData}
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
  renderBottomWrap: {
    flexDirection: 'row',
    width: width / 1.2,
    alignSelf: 'center',
    alignItems: 'center',
    height: 85,
    justifyContent: 'space-between',
  },
  imageBelow: {
    width: 80,
    height: 70,
    borderRadius: 20,
  },
  nameContBelow: {
    height: '90%',
    justifyContent: 'space-evenly',
    width: '50%',
  },
  nameBelow: {fontFamily: theme.fontFamily.bold, fontSize: 18},
  typeBelow: {fontFamily: theme.fontFamily.medium, fontSize: 14},
  starsCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-between',
  },
  imageBgTop: {
    width: '100%',
    height: '85%',
  },
  renderGradient: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 6,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  topWrapper: {
    width: width / 1.8,
    height: height / 2.2,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});

export default MyCookBook;
