import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import CategoryRecipies from '../../screens/categoryRecipies/categoryRecipies';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import AllCategories from '../../screens/allCategories/allCategories';
import EditProfile from '../../screens/editProfile/editProfile';
import AllRecipies from '../../screens/allRecipies/allRecipies';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      <Stack.Screen name="CategoryRecipies" component={CategoryRecipies} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AllRecipies" component={AllRecipies} />
    </Stack.Navigator>
  );
};

export default HomeStack;
