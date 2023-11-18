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
  Platform,
} from 'react-native';
import {theme} from '../../theme/theme';

const {width, height} = Dimensions.get('screen');

const AllRecipies = ({navigation, route}) => {
  const {data, type} = route.params;

  const Star = ({ratting, cond}) => {
    return (
      <Image
        source={require('../../assets/icons/stars.png')}
        style={{
          tintColor: ratting >= cond ? '#FFE601' : '#C4C4C4',
        }}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.bottomCont}
        onPress={() => {
          navigation.navigate('RecipeDetails', {item: item});
        }}>
        <View style={styles.imageWrap}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View
          style={{
            height: '90%',
            justifyContent: 'space-evenly',
            width: '60%',
          }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <View style={styles.starsCont}>
            <Star ratting={item.rattings} cond={1} />
            <Star ratting={item.rattings} cond={2} />
            <Star ratting={item.rattings} cond={3} />
            <Star ratting={item.rattings} cond={4} />
            <Star ratting={item.rattings} cond={5} />
          </View>
        </View>
        <View style={{width: 50, alignItems: 'center'}}>
          <Text style={styles.count}>{item.vote_count}</Text>
          <Text style={styles.cooked}>{'Cooked'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
      <View style={{height: height / 1.22}}>
        <View style={styles.titleWrap}>
          <Text style={styles.titleBlack}>All Recipes</Text>
          <Text style={styles.num}>All ({data.length})</Text>
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
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
  iconLeft: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
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
    height: 35,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  titleWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  titleBlack: {
    fontFamily: theme.fontFamily.semiBBold,
    marginLeft: 10,
    marginTop: 20,
    fontSize: 18,
    color: theme.color.darkGrey,
  },
  num: {
    fontFamily: theme.fontFamily.semiBBold,
    marginRight: 10,
    marginTop: 20,
    fontSize: 13,
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
  imageWrap: {borderWidth: 1, borderRadius: 20},
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  name: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 16,
    color: theme.color.seconndary,
  },
  author: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
    color: theme.color.darkGrey,
  },
  starsCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-between',
  },
  count: {
    fontFamily: theme.fontFamily.regular,
    textAlign: 'center',
    color: theme.color.seconndary,
    fontSize: 12,
  },
  cooked: {
    fontFamily: theme.fontFamily.regular,
    textAlign: 'center',
    fontSize: 12,
    color: theme.color.darkGrey,
  },
  leftIcon: {width: 18, height: 18, resizeMode: 'contain'},
  searchInput: {
    width: '92%',
    padding: 0,
    color: theme.color.seconndary,
    height: '100%',
  },
});

export default AllRecipies;
