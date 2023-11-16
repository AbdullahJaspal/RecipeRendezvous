import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import CategoryRecipies from '../../screens/categoryRecipies/categoryRecipies';
import Search from '../../screens/search/search';
import {theme} from '../../theme/theme';
import MyCookBook from '../../screens/myCookBook/myCookBook';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import HomeStack from '../stacks/homeStack';
import Profile from '../../screens/profile/profile';

const Tab = createBottomTabNavigator();

function BottomTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Splash"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = require('../../assets/icons/home.png');
          } else if (route.name === 'Search') {
            iconName = require('../../assets/icons/searchB.png');
          } else if (route.name === 'MyCookBook') {
            iconName = require('../../assets/icons/bookmark.png');
          } else {
            iconName = require('../../assets/icons/user.png');
          }
          // You can return any component that you like here!
          return (
            <TouchableOpacity
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.navigate(route.name);
              }}>
              <Image
                source={iconName}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  tintColor: focused ? theme.color.primary : 'gray',
                }}
              />
            </TouchableOpacity>
          );
        },
        tabBarActiveTintColor: theme.color.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
      {/* <Tab.Screen name="MyCookBook" component={MyCookBook} /> */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTab;
