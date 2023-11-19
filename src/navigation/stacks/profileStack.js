import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/profile/profile';
import EditProfile from '../../screens/editProfile/editProfile';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import AllRecipies from '../../screens/allRecipies/allRecipies';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      <Stack.Screen name="AllRecipies" component={AllRecipies} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
