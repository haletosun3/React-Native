import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import HomeScreen from './HomeScreen';
import ProductStack from './ProductStack';
import CartScreen from './CartScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import cartContext from '../store/CartContext';

const TabMain = () => {
  const Tab = createBottomTabNavigator();

  const {cart} = useContext(cartContext);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'#0F2C67'} size={33} />
            ),
          }}
        />

        <Tab.Screen
          name="Products"
          component={ProductStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="folder-settings"
                color={'#0F2C67'}
                size={33}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarBadge: cart.length,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="basket"
                color={'#0F2C67'}
                size={33}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Nofitication"
          component={NotificationScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="bell" color={'#0F2C67'} size={33} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account"
                color={'#0F2C67'}
                size={33}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabMain;
