import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewAcount from './src/screens/NewAcount';
import Login from './src/screens/Login';
import PassRecovery from './src/screens/PassRecovery';

import NewSurvey from './src/screens/NewSurvey';
import ModifySurvey from './src/screens/ModifySurvey';
import Actions from './src/screens/Actions';
import Drawer from './src/screens/Drawer';

import {DefaultTheme} from 'react-native-paper';
import Colect from './src/screens/Colect';
import Success from './src/screens/Success';
import Reports from './src/screens/Reports';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#FFFFFF',
            headerStyle: {backgroundColor: '#2B1D62'},
            headerTitleStyle: {fontFamily: 'AveriaLibre-Regular'},
          }}>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen name="Nova Conta" component={NewAcount} />
          <Stack.Screen name="Recuperação de senha" component={PassRecovery} />
          <Stack.Screen
            name="Drawer"
            options={{headerShown: false}}
            component={Drawer}
          />
          <Stack.Screen name="Nova pesquisa" component={NewSurvey} />
          <Stack.Screen name="Modificar pesquisa" component={ModifySurvey} />
          <Stack.Screen name="Carnaval" component={Actions} />
          <Stack.Screen
            name="Success"
            options={{headerShown: false}}
            component={Success}
          />
          <Stack.Screen name="Relatório" component={Reports} />
          <Stack.Screen
            name="Coletar"
            options={{headerShown: false}}
            component={Colect}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
