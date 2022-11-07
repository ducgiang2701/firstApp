import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  ClientScreen,
  FlatlistScreen,
  ScrollViewScreen,
  SectionListScreen,
} from '../screen';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="client"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="client"
        component={ClientScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Entypo name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="flatList"
        component={FlatlistScreen}
        options={{
          tabBarLabel: 'screen2',
          tabBarIcon: () => <Entypo name="app-store" size={20} />,
        }}
      />
      <Tab.Screen
        name="scrollView"
        component={ScrollViewScreen}
        options={{
          tabBarLabel: 'screen3',
          tabBarIcon: () => <Entypo name="archive" size={20} />,
        }}
      />
      <Tab.Screen
        name="sectionList"
        component={SectionListScreen}
        options={{
          tabBarLabel: 'screen4',
          tabBarIcon: () => <Entypo name="camera" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Main;
