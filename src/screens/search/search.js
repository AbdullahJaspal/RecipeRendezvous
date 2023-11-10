import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';

const {width, height} = Dimensions.get('screen');

const Search = () => {
  const renderBottom = () => {
    return (
      <View style={{marginLeft: 20}}>
        <Image
          source={require('../../assets/images/grilledSalmon.png')}
          style={{
            borderRadius: 30,
            borderWidth: 1,
            width: width / 2,
            height: height / 6,
          }}
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
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
          height: 85,
        }}>
        <Image
          source={require('../../assets/images/belowImg1.png')}
          style={{
            width: '30%',
            height: 70,
            resizeMode: 'contain',
            borderRadius: 20,
          }}
        />
        <View style={{height: '90%', justifyContent: 'space-evenly'}}>
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
      </View>
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
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.topTab}>
        <Image
          source={require('../../assets/icons/left.png')}
          style={styles.iconLeft}
        />
        <Text style={styles.title}>Search</Text>
        <Image source={require('../../assets/icons/left.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          alignSelf: 'center',
          borderWidth: 1,
          height: 30,
          borderRadius: 10,
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={{width: 18, height: 18, resizeMode: 'contain'}}
        />
        <TextInput placeholder="Search" style={{width: '92%'}} />
      </View>
      <Text
        style={{
          fontFamily: theme.fontFamily.semiBBold,
          marginLeft: 30,
          marginTop: 20,
          fontSize: 18,
        }}>
        Most Liked Recipes
      </Text>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
        <FlatList
          renderItem={renderBottom}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}]}
          horizontal
        />
      </View>

      <View style={{flexGrow: 1}}>
        <Text
          style={{
            fontFamily: theme.fontFamily.semiBBold,
            marginLeft: 30,
            marginVertical: 20,
            fontSize: 18,
          }}>
          New Recipes
        </Text>
        <FlatList
          renderItem={renderItem}
          data={belowData}
          showsVerticalScrollIndicator={false}
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
});

export default Search;
