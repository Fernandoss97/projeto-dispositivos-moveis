import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewAcount from './src/screens/NewAcount';
import Login from './src/screens/Login';
import PassRecovery from './src/screens/PassRecovery';
import NewSurvey from './src/screens/NewSurvey';
import ModifySurvey from './src/screens/ModifySurvey';
import Drawer from './src/screens/Drawer';
import ResearchActions from './src/screens/ResearchActions';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
          <Stack.Screen name="Carnaval" component={ResearchActions} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
