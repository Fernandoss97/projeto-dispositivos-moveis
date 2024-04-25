import { View, StyleSheet} from "react-native";
import { useState } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper"
import { TextInput, Text, Button } from "react-native-paper";
import Input from "../components/Input";
import Icon from "react-native-vector-icons/MaterialIcons"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow'
  }
}

const NewSurvey = ()=> {
  return(
    <PaperProvider >
      <View style={styles.ctBackground}>
          <View style={styles.ctInput} >
            <Input labelName='Nome' placeholder=''></Input>
            <Text style={styles.text}>Preencha o nome da pesquisa</Text>

            <View style={styles.ctData}>
              <Input labelName='Data' placeholder=''></Input>
              <Icon style={styles.icon} name='calendar-month' size={30} color="white"/>
            </View>
            
            <Text style={styles.text}>Preencha a data</Text>
            <Text  style={styles.textImg}>Imagem</Text>
            <TextInput style={styles.inputImg} placeholder="Câmera/Galeria de imagens" placeholderStyle={styles.placeholderStyle}/>
            <Button style={styles.buttonRec} mode="contained" labelStyle=  {{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            CADASTRAR
            </Button>
          </View>
        
      </View>
    </PaperProvider>
  )
}

//<Input labelName='Imagem' placeholder='Câmera/Galeria de imagens' ></Input>
//<TextInput style={styles.inputDate}/>
//<Input labelName='Data' placeholder='' iconName='camera'></Input>
const styles = StyleSheet.create({
  placeholderStyle:{
    fontFamily: 'AveriaLibre-Regular'
  },
  inputImg:{
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    height: 60,
    width: 300,
    
  },
  ctData:{
    justifyContent: 'center',
    alignItems: 'centers'
    //flexDirection: 'row',
    //borderBottomWidth: 1,
    //borderColor: '#000',
    //paddingBottom: 10,
  },
  inputDate:{
    //flex: 1
  },
  icon:{
    position: 'absolute',
    right: 10,
    color: '#CAC6C5'
  },
  ctInput:{
    //flex: 0.25
  },
  ctBackground:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 150,
    paddingVertical: 10
  },
  ctButton:{
    marginTop: 80
  },
  text:{
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 14
  },
  buttonRec:{
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
    marginTop: 15
  },
  textImg:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    color: 'white',
  }
  
})

export default NewSurvey