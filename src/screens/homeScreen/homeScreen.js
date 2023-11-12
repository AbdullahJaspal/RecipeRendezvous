import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [category, setCategory] = useState('Featured');
  const dishes = [
    {
      img: require('../../assets/images/tofuSoup.png'),
      name: 'World Food',
      des: 'Tofu Noodle Soup',
    },
    {
      img: require('../../assets/images/seaFood.png'),
      name: 'Healthy Food',
      des: 'Seafood Salad',
    },
    {
      img: require('../../assets/images/tofuSoup.png'),
      name: 'World Food',
      des: 'Tofu Noodle Soup',
    },
    {
      img: require('../../assets/images/seaFood.png'),
      name: 'Healthy Food',
      des: 'Seafood Salad',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.bottomCont}
        onPress={() => {
          navigation.navigate('RecipeDetails');
        }}>
        <Image
          source={require('../../assets/images/belowImg1.png')}
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
            borderRadius: 20,
          }}
        />
        <View
          style={{height: '90%', justifyContent: 'space-evenly', width: '60%'}}>
          <Text style={{fontFamily: theme.fontFamily.bold, fontSize: 18}}>
            Chicken Salad
          </Text>
          <Text style={{fontFamily: theme.fontFamily.medium, fontSize: 14}}>
            Special Diets
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../../assets/icons/stars.png')}
              style={{
                tintColor: item.stars >= 1 ? '#FFE601' : '#C4C4C4',
              }}
            />
            <Image
              source={require('../../assets/icons/stars.png')}
              style={{
                tintColor: item.stars >= 2 ? '#FFE601' : '#C4C4C4',
              }}
            />
            <Image
              source={require('../../assets/icons/stars.png')}
              style={{
                tintColor: item.stars >= 3 ? '#FFE601' : '#C4C4C4',
              }}
            />
            <Image
              source={require('../../assets/icons/stars.png')}
              style={{
                tintColor: item.stars >= 4 ? '#FFE601' : '#C4C4C4',
              }}
            />
            <Image
              source={require('../../assets/icons/stars.png')}
              style={{
                tintColor: item.stars >= 5 ? '#FFE601' : '#C4C4C4',
              }}
            />
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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        style={{height: height / 2.8, width: '100%'}}
        source={require('../../assets/images/homeTop.png')}>
        <View style={styles.overlay}>
          <Text style={styles.topTitle}>20 Weekend Dinner Recipes</Text>
          <View style={styles.lowerWrapper}>
            <Text style={styles.lowerRight}>20 easy to cook for you</Text>
            <TouchableOpacity
              style={styles.viewMoreButton}
              onPress={() => {
                navigation.navigate('CategoryRecipies');
              }}>
              <Text style={styles.buttonText}>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View>
        <FlatList
          data={['Featured', 'Popular', 'New', 'Recent']}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: theme.color.grey,
                  borderColor:
                    category === item
                      ? theme.color.primary
                      : theme.color.seconndary,
                  borderBottomWidth: category === item ? 1 : 0,
                }}
                onPress={() => {
                  setCategory(item);
                }}>
                <Text
                  style={{
                    fontFamily: theme.fontFamily.medium,
                    color:
                      category === item
                        ? theme.color.primary
                        : theme.color.seconndary,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {category === 'Featured' && (
        <View style={{width: '100%'}}>
          <FlatList
            data={dishes}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.uperRenderWrap}
                  onPress={() => {
                    setCategory(item);
                    navigation.navigate('RecipeDetails');
                  }}>
                  <ImageBackground
                    style={styles.upperBg}
                    resizeMode="contain"
                    source={item.img}>
                    <LinearGradient
                      style={styles.upperGradient}
                      colors={[
                        'rgba(0,0,0,0.65)',
                        'rgba(0,0,0,0.45)',
                        'rgba(0,0,0,0.45)',
                        'rgba(225,225,225,0)',
                      ]}>
                      <Text style={styles.upperName}>{item.name}</Text>
                      <Text style={styles.upperDes}>{item.des}</Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
      <View
        style={{
          height: category === 'Featured' ? height / 3 : height / 2,
        }}>
        <FlatList
          renderItem={renderItem}
          data={belowData}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            return <View style={{height: 140}}></View>;
          }}
          keyExtractor={(item, index) => item.index}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(96,96,96,0.32)',
    justifyContent: 'flex-end',
  },
  topTitle: {
    fontFamily: theme.fontFamily.semiBBold,
    fontSize: 26,
    color: 'white',
    width: '60%',
    marginLeft: 10,
  },
  lowerWrapper: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  lowerRight: {
    fontFamily: theme.fontFamily.semiBBold,
    fontSize: 12,
    color: 'white',
    width: '60%',
  },
  viewMoreButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  buttonText: {
    fontFamily: theme.fontFamily.semiBBold,
    fontSize: 12,
    color: 'black',
  },
  uperRenderWrap: {
    width: width / 1.8,
    height: width / 2.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.grey,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  upperBg: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 20,
  },
  upperGradient: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    paddingTop: 6,
    borderRadius: 20,
  },
  upperName: {
    color: 'white',
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  upperDes: {
    color: 'white',
    fontFamily: theme.fontFamily.semiBBold,
    fontSize: 16,
  },
  bottomCont: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    height: 85,
    justifyContent: 'space-between',
  },
});
export default HomeScreen;
