import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Text, Button} from 'react-native-paper';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NewSurvey = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const register = () => {
    if (date.length > 0) {
      setDateError(false);
    } else {
      setDateError(true);
    }
    if (name.length > 0) {
      setNameError(false);
    } else {
      setNameError(true);
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Button
              onPress={register}
              style={styles.buttonRec}
              mode="contained"
              labelStyle={{
                fontFamily: 'AveriaLibre-Regular',
                color: '#FFFFFF',
              }}>
              CADASTRAR
            </Button>
          </View>
          <View style={{alignItems: 'center', marginLeft: 8}}>
            <Icon
              style={styles.iconDelete}
              name="delete"
              size={30}
              color="white"
            />
            <Text style={styles.textIcon}>Apagar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

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
  textIcon: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
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
});

export default NewSurvey;
