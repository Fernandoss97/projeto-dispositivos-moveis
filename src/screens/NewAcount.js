import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {Text, Button} from 'react-native-paper';
import Input from '../components/Input';
import {auth_mod} from '../firebase/config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow',
  },
};

const isPasswordNotTheSame = (password, repeatPassword) => {
  if (password === repeatPassword) return false;
  return true;
};

const NewAcount = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordSame, setPasswordSame] = useState(true);
  const [error, setError] = useState('');

  const cadastrarUsuario = () => {
    if (isPasswordNotTheSame(password, repeatPassword)) {
      setPasswordSame(false);
      return;
    }

    createUserWithEmailAndPassword(auth_mod, email, password)
      .then(userCredential => {
        console.log(
          'Usuário cadastrado com sucesso! ' + JSON.stringify(userCredential),
        );
        setPasswordSame(true);
        setError(false);
        props.navigation.navigate('Login');
      })
      .catch(err => {
        setError(err.customData['_tokenResponse'].error.message);
      });
  };

  return (
    <PaperProvider>
      <View style={styles.ctBackground}>
        <View>
          <Input
            labelName="E-mail"
            placeholder="jurandir.pereira@hotmail.com"
            onChangeText={setEmail}></Input>
          <Input
            labelName="Senha"
            placeholder=""
            onChangeText={setPassword}
            typePassword={true}></Input>
          <Input
            labelName="Repetir senha"
            placeholder=""
            onChangeText={setRepeatPassword}
            typePassword={true}></Input>
          {passwordSame ? (
            <Text></Text>
          ) : (
            <Text style={styles.text}>
              O campo repetir senha difere da senha
            </Text>
          )}
          {error ? <Text style={styles.text}>{error}</Text> : <Text></Text>}
          <View style={styles.ctButton}>
            <Button
              style={styles.buttonCad}
              mode="contained"
              labelStyle={{
                fontFamily: 'AveriaLibre-Regular',
                color: '#FFFFFF',
              }}
              onPress={() => cadastrarUsuario()}>
              CADASTRAR
            </Button>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  ctBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 100,
    paddingVertical: 30,
  },
  ctButton: {
    marginTop: 20,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20,
  },
  buttonCad: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
  },
});

export default NewAcount;
