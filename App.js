import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './store/CartContext';







import TabMain from './NavigationSample/TabMain';
function App () {
  
   const Tab = createBottomTabNavigator();

   //home ,supplier ,cart nofitication, profile
  return (

    <CartProvider>
     <TabMain></TabMain>
    </CartProvider>
  );
}

export default App