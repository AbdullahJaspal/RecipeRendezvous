import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {saveAllRecipies} from '../../redux/actions/auth';
import allRecipieData from '../../data/myRecipies.json';

const {width, height} = Dimensions.get('screen');

const Search = ({navigation}) => {
  const [data, setData] = useState(allRecipieData.allRecipies.all);
  const [load, setLoad] = useState(true);
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.bottomCont}
        onPress={() => {
          navigation.navigate('RecipeDetails', {item: item});
        }}>
        <ShimmerPlaceHolder
          visible={load}
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
          }}>
          <View style={{borderWidth: 1, borderRadius: 20}}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                borderRadius: 20,
              }}
            />
          </View>
        </ShimmerPlaceHolder>
        <View
          style={{
            height: '90%',
            justifyContent: 'space-evenly',
            width: '60%',
          }}>
          <ShimmerPlaceHolder
            // visible
            visible={load}>
            <Text style={{fontFamily: theme.fontFamily.bold, fontSize: 16}}>
              {item.name}
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder visible={load}>
            <Text style={{fontFamily: theme.fontFamily.medium, fontSize: 14}}>
              {item.author}
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder visible={load} style={{width: '60%'}}>
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
                  tintColor: item.rattings >= 1 ? '#FFE601' : '#C4C4C4',
                }}
              />
              <Image
                source={require('../../assets/icons/stars.png')}
                style={{
                  tintColor: item.rattings >= 2 ? '#FFE601' : '#C4C4C4',
                }}
              />
              <Image
                source={require('../../assets/icons/stars.png')}
                style={{
                  tintColor: item.rattings >= 3 ? '#FFE601' : '#C4C4C4',
                }}
              />
              <Image
                source={require('../../assets/icons/stars.png')}
                style={{
                  tintColor: item.rattings >= 4 ? '#FFE601' : '#C4C4C4',
                }}
              />
              <Image
                source={require('../../assets/icons/stars.png')}
                style={{
                  tintColor: item.rattings >= 5 ? '#FFE601' : '#C4C4C4',
                }}
              />
            </View>
          </ShimmerPlaceHolder>
        </View>
        <View style={{width: 50, alignItems: 'center'}}>
          <ShimmerPlaceHolder visible={load} style={{width: '90%'}}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
                textAlign: 'center',
              }}>
              {item.vote_count}
            </Text>
          </ShimmerPlaceHolder>

          <ShimmerPlaceHolder visible={load} style={{width: '90%'}}>
            <Text
              style={{
                fontFamily: theme.fontFamily.regular,
                textAlign: 'center',
                fontSize: 12,
              }}>
              {'Cooked'}
            </Text>
          </ShimmerPlaceHolder>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.topTab}>
        <Image
          source={require('../../assets/icons/left.png')}
          style={styles.iconLeft}
        />
        <Text style={styles.title}>Search</Text>
        <Image source={require('../../assets/icons/left.png')} />
      </View>
      <View style={styles.searchBar}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={{width: 18, height: 18, resizeMode: 'contain'}}
        />

        <TextInput
          placeholder="Search"
          style={{width: '92%', padding: 0}}
          onChangeText={val => {
            const filtered = allRecipieData.allRecipies.all.filter(item => {
              return item.name.includes(val);
            });
            val === ''
              ? setData(allRecipieData.allRecipies.all)
              : setData(filtered);
          }}
        />
      </View>
      {/* <Text style={styles.titleBlack}>Most Liked Recipes</Text>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
        <FlatList
          renderItem={renderBottom}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}]}
          horizontal
        />
      </View> */}

      <View style={{height: height / 1.22}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
          }}>
          <Text style={styles.titleBlack}>New Recipes</Text>
          <Text
            style={{
              fontFamily: theme.fontFamily.semiBBold,
              marginRight: 10,
              marginTop: 20,
              fontSize: 13,
            }}>
            All ({data.length})
          </Text>
        </View>
        <FlatList
          renderItem={renderItem}
          data={data}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          ListFooterComponent={() => {
            return <View style={{height: 20}}></View>;
          }}
          keyExtractor={(item, index) => item.index}
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
  bottomImage: {
    borderRadius: 30,
    borderWidth: 1,
    width: width / 2,
    height: height / 6,
  },
  bottomName: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 3,
  },
  bottomTime: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
    marginLeft: 3,
  },
  starsCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    height: 30,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  titleBlack: {
    fontFamily: theme.fontFamily.semiBBold,
    marginLeft: 10,
    marginTop: 20,
    fontSize: 18,
  },
  bottomCont: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    height: 85,
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Search;
