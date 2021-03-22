import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/searchResult'
import SearchResultMapScreen from '../screens/searchResult/SearchResultMap'

const Tab = createMaterialTopTabNavigator()


export default function SearchResultTabNavigator() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor:"#f15454",
            indicatorStyle:{
                backgroundColor:"#f15454"
            }
        }}>
            <Tab.Screen 
                name="List"
                component={SearchResultScreen}
            />
            <Tab.Screen 
                name="Map"
                component={SearchResultMapScreen}
            />
        </Tab.Navigator>
    )
}
