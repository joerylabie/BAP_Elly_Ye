import { StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names

const homeName = "Home";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer >
            <Tab.Navigator
            initialRouteName={homeName}

            screenOptions={({route}) => ({
                headerShown:false,
                tabBarActiveTintColor:'#654431',
                tabBarInactiveTintColor:'grey',
                tabBarLabelStyle: {paddingBottom:8, fontSize:10},
                tabBarStyle: {height:60, backgroundColor:'#D9CABC'},
                tabBarShowLabel:false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName){
                        iconName = focused ? 'home': 'home-outline'
                        size = focused ? 30: 25

                    }else if(rn === settingsName){
                        iconName = focused ? 'settings' : 'settings-outline'
                        size = focused ? 30: 25

                    }

                    return <Ionicons name={iconName} size={size} color={color}/>

                }})
            }            
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>


            </Tab.Navigator>
        </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: "#ccc",
  },
  navButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
