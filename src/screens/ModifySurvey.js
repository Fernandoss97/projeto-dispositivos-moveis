import { View, StyleSheet, Image} from "react-native";
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

const ModifySurvey = ()=> {
  return(
    <PaperProvider >
      <View style={styles.ctBackground}>
          <View style={styles.ctInput} >
            <Input labelName='Nome' placeholder='Carnaval 2024'></Input>
            
            <View style={styles.ctData}>
              <Input labelName='Data' placeholder='16/02/2024'></Input>
              <Icon style={styles.icon} name='calendar-month' size={30} color="white"/>
            </View>
            
            <Text  style={styles.textImg}>Imagem</Text>
            <Image  source={require('../Images/Group10.jpg')} style={styles.Image}/>

            <View style={styles.ctIcon}>
              <Button style={styles.buttonRec} mode="contained" labelStyle=  {{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
              SALVAR
              </Button>
              <Icon style={styles.iconDelete} name='delete' size={50} color="white"/>
            </View>
            
          </View>
        
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  iconDelete:{
    position: 'relative',
    left: 80
  },
  Image:{
    width: 250,
    height: 80,
    //borderRadius: 50
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
    width: 511,
    height: 50
  },
  ctIcon:{
    flexDirection: 'row',
    marginTop: 15
    
  },
  textImg:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    color: 'white',
  },
  inputImg:{
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    height: 60,
    width: 300,
    
  },
  
})

export default ModifySurvey