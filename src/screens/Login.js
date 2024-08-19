import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';

import auth from '@react-native-firebase/auth';

import {useDispatch} from 'react-redux';
import {reducerSetLogin} from '../redux/loginSlice';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const goToNewAcount = () => {
    props.navigation.navigate('Nova Conta');
  };

  const goToPassRecovery = () => {
    props.navigation.navigate('Recuperação de senha');
  };

  const goToHome = () => {
    if (validateEmail(email) && validatePassword(password)) {
      props.navigation.navigate('Drawer');
      setEmail('');
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  const validateEmail = value => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(value);
  };

  const validatePassword = value => {
    return value.length > 0;
  };

  const dispatch = useDispatch();

  const authenticate = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(reducerSetLogin({email: email, password: password}));
        goToHome();
      });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Pressable style={style.background} onPress={Keyboard.dismiss}>
        <View style={style.ctLogo}>
          <Text style={style.txtLogo}>Satisfying.you</Text>
          <Icon style={style.icon} name="mood" size={60} color="white" />
        </View>

        <View style={style.ctInput}>
          <Input
            labelName="E-mail"
            onChangeText={value => setEmail(value)}
            value={email}
          />
          <View style={style.spacing} />
          <Input
            labelName="Senha"
            onChangeText={value => setPassword(value)}
            value={password}
            errorMessage={error && 'E-mail e/ou senha inválidos.'}
            typePassword={true}
          />

          {error ? <Text style={style.text}>{error}</Text> : <Text></Text>}

          <Button
            style={style.buttonEntrar}
            onPress={authenticate}
            mode="contained"
            labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            Entrar
          </Button>
        </View>

        <View style={style.ctButtons}>
          <Button
            onPress={goToNewAcount}
            style={style.buttonCriar}
            mode="contained"
            labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            Criar minha conta
          </Button>
          <Button
            onPress={goToPassRecovery}
            style={style.buttonEsq}
            mode="contained"
            labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            Esqueci minha senha
          </Button>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20,
  },
  background: {
    backgroundColor: '#372775',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  txtLogo: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
  ctLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 30,
  },
  ctInput: {
    marginBottom: 30,
  },
  ctButtons: {
    height: 90,
    justifyContent: 'space-between',
  },
  btCriar: {
    marginBottom: 5,
  },
  spacing: {
    margin: 4,
  },
  buttonEntrar: {
    marginTop: 16,
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
  },
  buttonCriar: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#419ED7',
  },
  buttonEsq: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#B0CCDE',
  },
});

export default Login;
