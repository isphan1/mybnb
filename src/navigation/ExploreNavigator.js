import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import SearchResultScreen from '../screens/searchResult'
import SearchResultTabNavigator from '../navigation/SearchResultTabNavigator'
const Stack = createStackNavigator();

const Router = (props) => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle:{
          shadowOpacity:0,
          elevation:0
        }
      }}
      >
        <Stack.Screen
          name="Welcome"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResultTabNavigator}
          options={{
            title:"Search your destination"
          }}
        />
        </Stack.Navigator>
  )}

export default Router