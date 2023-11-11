import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import CategoryRecipies from '../../screens/categoryRecipies/categoryRecipies';
import Search from '../../screens/search/search';
import {theme} from '../../theme/theme';
import MyCookBook from '../../screens/myCookBook/myCookBook';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import HomeStack from '../stacks/homeStack';

const Tab = createBottomTabNavigator();

function BottomTab() {
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
            <Image
              source={iconName}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                tintColor: focused ? theme.color.primary : 'gray',
              }}
            />
          );
        },
        tabBarActiveTintColor: theme.color.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="MyCookBook" component={MyCookBook} />
    </Tab.Navigator>
  );
}

export default BottomTab;
