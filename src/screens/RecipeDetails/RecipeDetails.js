import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';

const RecipeDetails = ({navigation, route}) => {
  const [tab, setTab] = useState('Ingredients');
  const imageHeight = useSharedValue(0);

  const {item} = route.params;

  console.log(item.ingredients);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      imageHeight.value = e.contentOffset.y;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const Image_Height = interpolate(
      imageHeight.value,
      [0, height / 1.5 - 100],
      [height / 1.5, 100],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    return {
      height: Image_Height,
    };
  });
  return (
    <View style={{flex: 1}}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerStyle={{
          paddingTop: height / 1.455,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.nameWrapper}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.des}>{item.title}</Text>
            <Text style={styles.review}>(2.564 Review)</Text>
          </View>
          <View style={{justifyContent: 'space-between', paddingVertical: 5}}>
            <Text style={styles.views}>8.3 K{'\n'}Cooked</Text>
            <View style={styles.favButton}>
              <Text style={styles.favButtonText}>Add to fav</Text>
            </View>
          </View>
        </View>
        <View style={styles.timeCont}>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>Serving</Text>
            <Text style={{fontFamily: theme.fontFamily.medium}}>
              {item.serving}
            </Text>
          </View>
          <View style={{...styles.timeWrapper, alignItems: 'center'}}>
            <Text style={styles.time}>Prep Time</Text>
            <Text style={{fontFamily: theme.fontFamily.medium}}>
              {item.preparationTime}
            </Text>
          </View>
          <View style={{...styles.timeWrapper, alignItems: 'flex-end'}}>
            <Text style={styles.time}>Cook Time</Text>
            <Text style={{fontFamily: theme.fontFamily.medium}}>
              {item.cookTime}
            </Text>
          </View>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.detailTitle}>Description</Text>
          <Text style={styles.detail}>{item.description}</Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            onPress={() => {
              setTab('Ingredients');
            }}
            style={{
              ...styles.buttonCont,
              borderColor:
                tab === 'Ingredients'
                  ? theme.color.primary
                  : theme.color.darkGrey,
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 18,
                color:
                  tab === 'Ingredients'
                    ? theme.color.primary
                    : theme.color.darkGrey,
              }}>
              Ingredients
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTab('Directions');
            }}
            style={{
              ...styles.buttonCont,
              borderColor:
                tab === 'Directions'
                  ? theme.color.primary
                  : theme.color.darkGrey,
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 18,
                color:
                  tab === 'Directions'
                    ? theme.color.primary
                    : theme.color.darkGrey,
              }}>
              Directions
            </Text>
          </TouchableOpacity>
        </View>

        {tab === 'Ingredients' ? (
          <View>
            <FlatList
              data={JSON.parse(item.ingredients)}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.ingredientWrap}>
                    <Text style={{fontFamily: theme.fontFamily.medium}}>
                      {index + 1} - {'   '}
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View>
            <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
              <Text style={styles.DirectionTitle}>1.{'Preparations'}</Text>
              <Text style={styles.directionDetail}>
                {item.directions.preps}
              </Text>
            </View>
            <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
              <Text style={styles.DirectionTitle}>2. Make the sauce</Text>
              <Text style={styles.directionDetail}>
                {item.directions.variations}
              </Text>
            </View>
          </View>
        )}
        <View style={{height: 50}} />
      </Animated.ScrollView>
      <Animated.View style={[styles.imageWrap, animatedStyles]}>
        <ImageBackground
          style={styles.topImage}
          borderBottomLeftRadius={15}
          borderBottomRightRadius={15}
          source={{uri: item.image}}>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../../assets/icons/left.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  topImage: {
    flex: 1,
  },
  imageWrap: {
    width: width,
    height: height / 1.5,
    position: 'absolute',
    top: 0,
    resizeMode: 'stretch',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 50,
    resizeMode: 'contain',
    tintColor: theme.color.primary,
  },
  nameWrapper: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  name: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 26,
    color: theme.color.primary,
  },
  des: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
    color: theme.color.darkGrey,
  },
  review: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
    color: theme.color.darkGrey,
  },
  views: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
    color: theme.color.darkGrey,
    textAlign: 'center',
  },
  favButton: {
    backgroundColor: theme.color.lightPrimary,
    paddingHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: theme.color.primary,
  },
  favButtonText: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 10,
    color: theme.color.darkGrey,
  },
  timeCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  timeWrapper: {
    width: '28%',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    height: 55,
  },
  time: {
    fontFamily: theme.fontFamily.medium,
    color: theme.color.darkGrey,
  },
  detailWrapper: {width: '95%', alignSelf: 'center', marginTop: 10},
  detailTitle: {
    fontFamily: theme.fontFamily.medium,
    color: theme.color.darkGrey,
    fontSize: 18,
  },
  detail: {fontFamily: theme.fontFamily.medium, marginTop: 5},
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E3E3E3',
    height: 40,
    marginTop: 10,
  },
  buttonCont: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  ingredientWrap: {
    width: '100%',
    borderBottomWidth: 1,
    height: 40,
    borderColor: theme.color.darkGrey,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  DirectionTitle: {
    fontFamily: theme.fontFamily.medium,
    color: theme.color.primary,
    fontSize: 18,
    marginLeft: 10,
  },
  directionDetail: {
    fontFamily: theme.fontFamily.regular,
    marginTop: 5,
    fontSize: 12,
  },
});

export default RecipeDetails;
