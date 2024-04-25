import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Input from '../components/Input';

const NewAcount = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = value => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(value);
  };

  const validateTwoPasswords = (value, valueToCompare) => {
    return value.length > 0 && value === valueToCompare;
  };

  const goToHome = () => {
    if (!validateEmail(email)) {
      setErrorMessage('E-mail inválido.');
    } else if (!validateTwoPasswords(password, confirmPassword)) {
      setErrorMessage('O campo repetir senha difere da senha.');
    } else {
      props.navigation.navigate('Drawer');
      setErrorMessage('');
    }
  };
  return (
    <View style={styles.ctBackground}>
      <View>
        <Input labelName="E-mail" value={email} onChangeText={setEmail} />
        <Input labelName="Senha" onChangeText={setPassword} />
        <Input
          labelName="Repetir senha"
          onChangeText={setConfirmPassword}
          errorMessage={errorMessage}
        />
        <View style={styles.ctButton}>
          <Button
            style={styles.buttonCad}
            mode="contained"
            onPress={goToHome}
            labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            CADASTRAR
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 16,
    paddingVertical: 16,
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
