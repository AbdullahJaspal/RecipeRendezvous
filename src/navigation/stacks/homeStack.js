import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import CategoryRecipies from '../../screens/categoryRecipies/categoryRecipies';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import Details from '../../screens/Details/Details';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      <Stack.Screen name="CategoryRecipies" component={CategoryRecipies} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;
