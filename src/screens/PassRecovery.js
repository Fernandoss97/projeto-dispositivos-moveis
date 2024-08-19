import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Text, Button} from 'react-native-paper';
import Input from '../components/Input';
import {auth_mod} from '../firebase/config';
import {sendPasswordResetEmail} from 'firebase/auth';

const PassRecovery = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);

  const validateEmail = value => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(value);
  };

  const recovery = () => {
    if (validateEmail(email)) {
      setError(false);

      sendPasswordResetEmail(auth_mod, email)
        .then(() => {
          setResponse(
            'O email para recuperação de senha foi enviado para sua caixa de entrada!',
          );
        })
        .catch(err => {
          setError(err.code);
          setResponse('');
        });
    } else {
      setError(true);
      setResponse('');
    }
  };

  return (
    <View style={styles.ctBackground}>
      <View style={styles.ctInput}>
        <Input
          onChangeText={setEmail}
          labelName="E-mail"
          value={email}
          placeholder="jurandir.pereira@hotmail.com"
          errorMessage={error && 'E-mail parece ser inválido'}
        />
      </View>
      {response ? <Text style={styles.response}>{response}</Text> : <Text></Text>}
      <View style={styles.ctButton}>
        <Button
          onPress={recovery}
          style={styles.buttonRec}
          mode="contained"
          labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
          RECUPERAR
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctInput: {
    //flex: 0.25
  },
  ctBackground: {
    flex: 1,
    backgroundColor: '#372775',
    paddingHorizontal: 16,
    paddingVertical: 50,
  },
  ctButton: {
    marginTop: 80,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20,
  },
  response: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#03fc28',
    fontSize: 18,
  },
  buttonRec: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
  },
});

export default PassRecovery;
