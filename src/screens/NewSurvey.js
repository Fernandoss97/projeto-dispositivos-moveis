import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Text, Button, Snackbar} from 'react-native-paper';
import Input from '../components/Input';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const NewSurvey = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const register = () => {
    let hasError = false;
    if (date.length > 0) {
      setDateError(false);
    } else {
      setDateError(true);
      hasError = true;
    }
    if (name.length > 0) {
      setNameError(false);
    } else {
      setNameError(true);
      hasError = true;
    }

    if (!hasError) {
      firestore()
        .collection('survey')
        .add({
          name,
          date,
        })
        .then(() => {
          setVisible(true);
        });
    }
  };
  return (
    <View style={styles.ctBackground}>
      <View style={styles.ctInput}>
        <Input
          labelName="Nome"
          onChangeText={setName}
          value={name}
          errorMessage={nameError && 'Preencha o nome da pesquisa'}
        />

        <View style={styles.ctData}>
          <Input
            labelName="Data"
            onChangeText={setDate}
            value={date}
            errorMessage={dateError && 'Preencha a data'}
            iconRightName={'calendar-month'}
          />
        </View>

        <Text style={styles.textImg}>Imagem</Text>
        <TextInput
          style={styles.inputImg}
          placeholder="Câmera/Galeria de imagens"
          placeholderStyle={styles.placeholderStyle}
        />
        <Button
          onPress={register}
          style={styles.buttonRec}
          mode="contained"
          labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
          CADASTRAR
        </Button>
      </View>
      <Snackbar
        style={{backgroundColor: 'green'}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'ok',
          onPress: () => {
            navigation.goBack();
          },
        }}>
        Adicionado com sucesso!
      </Snackbar>
    </View>
  );
};

//<Input labelName='Imagem' placeholder='Câmera/Galeria de imagens' ></Input>
//<TextInput style={styles.inputDate}/>
//<Input labelName='Data' placeholder='' iconName='camera'></Input>
const styles = StyleSheet.create({
  placeholderStyle: {
    fontFamily: 'AveriaLibre-Regular',
  },
  inputImg: {
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    height: 60,
    width: 300,
  },
  ctData: {
    justifyContent: 'center',
    alignItems: 'centers',
    //flexDirection: 'row',
    //borderBottomWidth: 1,
    //borderColor: '#000',
    //paddingBottom: 10,
  },
  inputDate: {
    //flex: 1
  },
  icon: {
    position: 'absolute',
    right: 10,
    color: '#CAC6C5',
  },
  ctInput: {
    //flex: 0.25
  },
  ctBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  ctButton: {
    marginTop: 80,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 14,
  },
  buttonRec: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
    marginTop: 15,
  },
  textImg: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    color: 'white',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default NewSurvey;
