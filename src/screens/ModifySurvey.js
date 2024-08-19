import {View, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Text, Button} from 'react-native-paper';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {launchCamera} from 'react-native-image-picker';

const NewSurvey = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  const [name, setName] = useState(params.name);
  const [date, setDate] = useState(params.date);
  const [base64, setBase64] = useState(params.base64);

  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const register = () => {
    let hasError = false;
    if (date.length > 0) {
      setDateError(false);
    } else {
      hasError = true;
      setDateError(true);
    }
    if (name.length > 0) {
      setNameError(false);
    } else {
      hasError = true;
      setNameError(true);
    }
    if (!hasError) {
      firestore()
        .collection('survey')
        .doc(params.id)
        .set({name, date, base64})
        .then(() => {
          navigation.navigate('Home');
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
        <Pressable
          onPress={async () => {
            const result = await launchCamera({
              includeBase64: true,
              quality: 0.2,
            });
            console.log({result: result.assets});
            if (result.didCancel || result.error) {
              return;
            }

            if ((result.assets?.length ?? 0) > 0 && result.assets[0].base64) {
              //Here is my base64 string of assets[0]
              setBase64(result.assets[0].base64);
            }
          }}>
          <View pointerEvents="none">
            <TextInput
              style={styles.inputImg}
              placeholder="Câmera/Galeria de imagens"
              placeholderStyle={styles.placeholderStyle}
            />
          </View>
        </Pressable>
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
              Atualizar
            </Button>
          </View>
          <View
            onTouchEnd={() => {
              firestore()
                .collection('survey')
                .doc(params.id)
                .delete()
                .then(() => {
                  navigation.navigate('Home');
                });
            }}
            style={{alignItems: 'center', marginLeft: 8}}>
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
