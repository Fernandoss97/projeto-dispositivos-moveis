import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import CustomDrawer from './CustomDrawer';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#2B1D62'},
        headerTitleStyle: {fontFamily: 'AveriaLibre-Regular'},
        headerTintColor: 'white',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <DrawerNavigator.Screen
        name="Home"
        component={Home}
        options={{title: ''}}
      />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
