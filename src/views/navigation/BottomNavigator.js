import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import Profile from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.green,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
              }}>
              <Icon name="home-filled" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
