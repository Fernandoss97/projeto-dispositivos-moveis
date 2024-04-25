import {View, StyleSheet, Image} from 'react-native';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Text,
  Card,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow',
  },
};

const Login = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={style.background}>
        <View style={style.cardList}>
          <Card style={style.card}>
            <Image
              style={style.icon}
              source={require('../Images/modificar.png')}
            />

            <Text style={style.cardTitle}>Modificar</Text>
          </Card>
          <Card style={style.card}>
            <Image
              style={style.icon}
              source={require('../Images/coletar-dados.png')}
            />

            <Text style={style.cardTitle}>Coletar Dados</Text>
          </Card>
          <Card style={style.card}>
            <Image
              style={style.icon}
              source={require('../Images/relatorio.png')}
            />
            <Text style={style.cardTitle}>Relatorio</Text>
          </Card>
        </View>
      </View>
    </PaperProvider>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: '#372775',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'column',
  },
  icon: {
    marginHorizontal: 'auto',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#312464',
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre',
    fontSize: 24,
  },
});

export default Login;
