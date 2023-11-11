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
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../theme/theme';

const {width, height} = Dimensions.get('screen');

const Search = ({navigation}) => {
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
  const renderBottom = () => {
    return (
      <TouchableOpacity
        style={{marginLeft: 20}}
        onPress={() => {
          navigation.navigate('RecipeDetails');
        }}>
        <Image
          source={require('../../assets/images/grilledSalmon.png')}
          style={styles.bottomImage}
        />
        <View style={{marginLeft: 3}}>
          <Text style={styles.bottomName}>Miso-grilled Salmon</Text>
          <Text style={styles.bottomTime}>12 min</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RecipeDetails');
        }}
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
        <TextInput placeholder="Search" style={{width: '92%'}} />
      </View>
      <Text style={styles.titleBlack}>Most Liked Recipes</Text>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
        <FlatList
          renderItem={renderBottom}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}]}
          horizontal
        />
      </View>

      <View style={{height: height / 1.8}}>
        <Text style={styles.titleBlack}>New Recipes</Text>
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
    marginLeft: 30,
    marginTop: 20,
    fontSize: 18,
  },
});

export default Search;
