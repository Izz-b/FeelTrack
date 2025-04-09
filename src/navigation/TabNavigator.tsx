import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { Home, MessageCircle, BarChart2, Bell, Flower } from 'react-native-feather';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import CheckInScreen from '../screens/CheckInScreen';
import WeeklyWrapScreen from '../screens/WeeklyWrapScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import GardenScreen from '../screens/GardenScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const theme = useTheme();
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primaryText,
        tabBarInactiveTintColor: theme.colors.secondaryText,
        tabBarStyle: {
          backgroundColor: theme.colors.cardBackground,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Home stroke={color} width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MessageCircle stroke={color} width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Check In"
        component={CheckInScreen}
        options={{
          tabBarIcon: ({ color, size }) => <BarChart2 stroke={color} width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Weekly"
        component={WeeklyWrapScreen}
        options={{
          tabBarIcon: ({ color, size }) => <BarChart2 stroke={color} width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Bell stroke={color} width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Garden"
        component={GardenScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Flower stroke={color} width={size} height={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;