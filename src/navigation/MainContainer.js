import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreens from '../screens/HomeScreens';
import DetailsScreens from '../screens/DetailsScreens';
import BookScreen from '../screens/BookScreen';
import SettingScreen from '../screens/SettingScreen';


//Screen names
const homeName = "Home";
const detailsName = "My Booking";
const bookName="Book";
const settingsName = "Account";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
     
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            }else if(rn === bookName){
                iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#60A0FF',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreens} />
        <Tab.Screen name={detailsName} component={DetailsScreens} />
        <Tab.Screen name={bookName} component={BookScreen} />
        <Tab.Screen name={settingsName} component={SettingScreen} />

      </Tab.Navigator>
    
  )
}

export default MainContainer

const styles = StyleSheet.create({})