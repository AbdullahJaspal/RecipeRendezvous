import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import CategoryRecipies from '../../screens/categoryRecipies/categoryRecipies';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      <Stack.Screen name="CategoryRecipies" component={CategoryRecipies} />
    </Stack.Navigator>
  );
};

export default HomeStack;
