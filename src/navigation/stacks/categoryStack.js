import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/profile/profile';
import EditProfile from '../../screens/editProfile/editProfile';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import AllRecipies from '../../screens/allRecipies/allRecipies';
import AllCategories from '../../screens/allCategories/allCategories';
import CategoryRecipies from '../../screens/categoryRecipies/categoryRecipies';

const CategoryStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="AllCategories"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="CategoryRecipies" component={CategoryRecipies} />
      <Stack.Screen name="AllRecipies" component={AllRecipies} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
