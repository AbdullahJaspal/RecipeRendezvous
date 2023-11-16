import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');
import allRecipieData from '../data/myRecipies.json';

const AllCategories = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CategoryRecipies', {
            data: item.data,
            type: item.title,
          });
        }}
        style={{
          borderWidth: 1,
          borderRadius: 25,
          width: index === 0 ? width / 1.25 : width / 1.1,
          alignSelf: 'center',
          height: index === 0 ? height / 1.8 : height / 4,
        }}>
        <ImageBackground
          style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}
          borderRadius={25}
          source={item.image}>
          <Text
            style={{
              color: 'white',
              fontFamily: theme.fontFamily.bold,
              width: '85%',
              fontSize: 28,
              marginLeft: 10,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: theme.fontFamily.regular,
              width: '65%',
              fontSize: 14,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            {item.total} different ideas
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
        <Text style={styles.title}>All Categories</Text>
        <Image source={require('../../assets/icons/left.png')} />
      </View>

      <View>
        <FlatList
          renderItem={renderItem}
          data={[
            {
              title: ' Baking:\nOven Delights',
              image: require('../../assets/images/baking.jpeg'),
              total: allRecipieData.allRecipies.breakfast.length,
              data: allRecipieData.allRecipies.breakfast,
            },
            {
              title: ' Breakfast:\nMorning Fuel',
              image: require('../../assets/images/breakfast.jpeg'),
              total: allRecipieData.allRecipies.breakfast.length,
            },
            {
              title: ' Lunch:\nMidday Munchies',
              image: require('../../assets/images/lunch.jpeg'),
              total: allRecipieData.allRecipies.quickLunch.length,
              data: allRecipieData.allRecipies.quickLunch,
            },
            {
              title: ' Dinner:\nEvening Feast',
              image: require('../../assets/images/dinner.jpeg'),
              total: allRecipieData.allRecipies.dinerToLunch.length,
              data: allRecipieData.allRecipies.dinerToLunch,
            },

            {
              title: ' Healthy:\nNourish & Thrive',
              image: require('../../assets/images/healthy.jpeg'),
              total: allRecipieData.allRecipies.health.length,
              data: allRecipieData.allRecipies.health,
            },
            {
              title: ' Budgeted:\nThrifty Eats',
              image: require('../../assets/images/budget.jpeg'),
              total: allRecipieData.allRecipies.budgeted.length,
              data: allRecipieData.allRecipies.budgeted,
            },
            {
              title: ' Others:\nFood Adventures',
              image: require('../../assets/images/others.jpeg'),
              total: allRecipieData.allRecipies.others.length,
              data: allRecipieData.allRecipies.others,
            },
          ]}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{height: 20}} />;
          }}
          ListFooterComponent={() => {
            return <View style={{height: 150}} />;
          }}
        />
      </View>
    </View>
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
  },
});
export default AllCategories;
