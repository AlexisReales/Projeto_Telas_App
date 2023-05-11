import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Drawer = createDrawerNavigator();

 function Dw() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pagina 1" component={Page1} />
      <Drawer.Screen name="Pagina 2" component={Page2} />
    </Drawer.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ínicio" component={Dw} />
      <Tab.Screen name="Página 1" component={Page1} />
      <Tab.Screen name="Página 2" component={Page2} />
    </Tab.Navigator>
  );
}