import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {Text, Button} from 'react-native-paper';
import Input from '../components/Input';
import {auth_mod} from '../firebase/config';
import {sendPasswordResetEmail} from 'firebase/auth';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow',
  },
};

const PassRecovery = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const recoverPassword = () => {
    sendPasswordResetEmail(auth_mod, email)
      .then(() => {
        setError('');
      })
      .catch(err => {
        setError(err.code);
      });
  };

  return (
    <PaperProvider>
      <View style={styles.ctBackground}>
        <View style={styles.ctContent}>
          <View style={styles.ctInput}>
            <Input
              labelName="E-mail"
              placeholder="jurandir.pereira@hotmail.com"
              onChangeText={setEmail}></Input>
            {error ? <Text style={styles.text}>{error}</Text> : <Text></Text>}
          </View>
          <View style={styles.ctButton}>
            <Button
              style={styles.buttonRec}
              mode="contained"
              labelStyle={{
                fontFamily: 'AveriaLibre-Regular',
                color: '#FFFFFF',
              }}
              onPress={recoverPassword}>
              RECUPERAR
            </Button>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  ctInput: {
    //flex: 0.25
  },
  ctBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 100,
    paddingVertical: 50,
  },
  ctButton: {
    marginTop: 80,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonRec: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
  },
});

export default PassRecovery;
