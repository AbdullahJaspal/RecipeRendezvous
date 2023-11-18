import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../components/Loading';
import allRecipieData from '../../data/myRecipies.json';
import database from '@react-native-firebase/database';
import {saveFavRecipies} from '../../redux/actions/auth';

const {width, height} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const {userData} = useSelector(state => state);
  const [category, setCategory] = useState('Breakfast');
  const dispatch = useDispatch();

  useEffect(() => {
    database()
      .ref(`/${userData._user.uid}/myFavs`)
      .on('value', snapshot => {
        console.log('favRecipy: ', snapshot.val());
        snapshot.val() !== null && dispatch(saveFavRecipies(snapshot.val()));
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
          {['Breakfast', 'Lunch', 'Dinner'].map(item => {
            return (
              <TouchableOpacity
                style={{
                  ...styles.categoryTab,
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
            }
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
                    // resizeMode="contain"
                    borderRadius={20}
                    source={{uri: item.image}}>
                    <LinearGradient
                      style={styles.upperGradient}
                      colors={theme.color.gradient2}>
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
      <Loading visible={load} />
    </View>
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
  categoryTab: {
    width: width / 3,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.grey,
  },
});
export default HomeScreen;
