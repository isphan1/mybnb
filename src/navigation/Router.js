import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from './BottomTab'
import DestinationSearchScreen from "../screens/destination";
import GuestScreen from "../screens/guest";
import PostDetailScreen from "../screens/PostDetail";


const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={DestinationSearchScreen}
          options={{
            title:"Search your destination",
          }}
        />
        <Stack.Screen
          name="Guests"
          component={GuestScreen}
          options={{
            title:"How many people?"
          }}
        />
        <Stack.Screen
          name="Accomodation"
          component={PostDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
