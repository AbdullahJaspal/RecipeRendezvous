import React, {useEffect, useState} from 'react';
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
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {
  saveAllRecipies,
  saveBreakfastRecipies,
  saveDinnerRecipies,
  saveHotRecipies,
  saveLunchRecipies,
  saveRecipies,
} from '../../redux/actions/auth';
import {Loading} from '../../components/Loading';
import allRecipieData from '../../data/myRecipies.json';

const {width, height} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const {breakfast, quickluch, dinerToLuch} = useSelector(state => state);
  const [category, setCategory] = useState('Breakfast');

  const dispatch = useDispatch();

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
  console.log(breakfast);
  useEffect(() => {
    // getData();
  }, []);

  const getData = async () => {
    console.log('start');
    setLoad(true);
    const all = database().ref('/allRecipies');
    const breakfast = database().ref('/allRecipies/breakfast');
    const lunch = database().ref('/allRecipies/quickLunch');
    const dinner = database().ref('/allRecipies/dinerToLunch');
    await breakfast
      .once('value')
      .then(snapshot => {
        const pizzaCrustData = snapshot.val();
        dispatch(saveBreakfastRecipies(pizzaCrustData));
      })
      .catch(error => {
        console.log('Error fetching Pizza Crust data:', error);
        setLoad(false);
      });
    await lunch
      .once('value')
      .then(snapshot => {
        const pizzaCrustData = snapshot.val();
        dispatch(saveLunchRecipies(pizzaCrustData));
      })
      .catch(error => {
        console.log('Error fetching Pizza Crust data:', error);
        setLoad(false);
      });
    await dinner
      .once('value')
      .then(snapshot => {
        const pizzaCrustData = snapshot.val();
        dispatch(saveDinnerRecipies(pizzaCrustData));
        setLoad(false);
      })
      .catch(error => {
        console.log('Error fetching Pizza Crust data:', error);
        setLoad(false);
      });
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
      <View style={{height: height / 4}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/images/homeTop.png')}>
          <View style={styles.overlay}>
            <Text style={styles.topTitle}>
              Explore all the available categories
            </Text>
            <View style={styles.lowerWrapper}>
              <Text style={styles.lowerRight}>5097 easy to cook for you</Text>
              <TouchableOpacity
                style={styles.viewMoreButton}
                onPress={() => {
                  navigation.navigate('AllCategories');
                }}>
                <Text style={styles.buttonText}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{height: height - height / 4}}>
        <View style={{flexDirection: 'row'}}>
          {/* <FlatList
            data={['Breakfast', 'Lunch', 'Dinner']}
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
          /> */}
          {['Breakfast', 'Lunch', 'Dinner'].map(item => {
            return (
              <TouchableOpacity
                style={{
                  width: width / 3,
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
          })}
        </View>

        <View style={{width: '100%', marginTop: 10}}>
          <FlatList
            data={
              category === 'Breakfast'
                ? allRecipieData.allRecipies.breakfast
                : category === 'Lunch'
                ? allRecipieData.allRecipies.quickLunch
                : allRecipieData.allRecipies.dinerToLunch
              // : []

              // category === 'Baking'
              // ? baking
              // : others
            }
            // horizontal
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={12}
            ListFooterComponent={() => {
              return <View style={{height: 160}}></View>;
            }}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.uperRenderWrap}
                  onPress={() => {
                    navigation.navigate('RecipeDetails', {item: item});
                  }}>
                  <ImageBackground
                    style={styles.upperBg}
                    resizeMode="contain"
                    borderRadius={20}
                    source={{uri: item.image}}>
                    <LinearGradient
                      style={styles.upperGradient}
                      colors={[
                        'rgba(0,0,0,0.65)',
                        'rgba(0,0,0,0.45)',
                        'rgba(0,0,0,0.45)',
                        'rgba(225,225,225,0)',
                      ]}>
                      <Text style={styles.upperName}>{item.name}</Text>
                      <Text style={styles.upperDes}>{item.author}</Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      {/* <View
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
      </View> */}
      <Loading visible={load} />
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
    width: '70%',
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
    width: width / 2.2,
    height: width / 2.8,
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
    height: 80,
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
