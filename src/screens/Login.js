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

const Login = (props)=> {

  const goToNewAcount = () => {
    props.navigation.navigate('Nova Conta')
  }

  const goToPassRecovery = () => {
    props.navigation.navigate('Recuperação de senha')
  }

  const goToHome = () => {
    props.navigation.navigate('Drawer')
  }

  return(
    <PaperProvider theme={theme}>
      <View style={style.background}>
        <View style={style.ctLogo}>  
          <Text style={style.txtLogo}>Satisfying.you</Text>
          <Icon style={style.icon} name='mood' size={60} color="white"/>
        </View>
        
        <View style={style.ctInput}>
          <Input labelName='E-mail' placeholder='jurandir.pereira@hotmail.com'></Input>
          <Input style={style.ctInput} labelName='Senha' placeholder=''></Input>
          <Text style={style.text}>E-mail e/ou senha inválidos.</Text>
          <Button style={style.buttonEntrar} onPress={goToHome} mode="contained" labelStyle=  {{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
          Entrar
          </Button>
        </View>

        <View style={style.ctButtons}>
          <Button onPress={goToNewAcount} style={style.buttonCriar} mode="contained" labelStyle=  {{fontFamily:  'AveriaLibre-Regular', color: '#FFFFFF'}}>
            Criar minha conta
          </Button>
          <Button onPress={goToPassRecovery} style={style.buttonEsq} mode="contained" labelStyle=  {{fontFamily:  'AveriaLibre-Regular', color: '#FFFFFF'}}>
            Esqueci minha senha
          </Button>
        </View>



      </View>
    </PaperProvider>
  )
}

const style = StyleSheet.create({
  text:{
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20
  },
  background: {
    backgroundColor: '#372775',
    flex:1,
    paddingHorizontal: 100,
    paddingVertical: 10,
    flexDirection: 'column',
  },
  txtLogo:{
    fontSize: 36,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },
  ctLogo:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //marginVertical: 0
  },
  icon:{
    marginLeft: 30
  },
  ctInput:{
    marginBottom: 10
  },
  ctButtons:{
    height: 90,
    //flexDirection: 'column',
    justifyContent: 'space-between'
  },
  btCriar:{
    marginBottom: 5
  },
  buttonEntrar: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D'
  },
  buttonCriar:{
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#419ED7'
  },
  buttonEsq:{
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#B0CCDE'
  }
  
})

export default Login;