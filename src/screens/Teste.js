import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import Botao from "./src/components/Botao";

const App = () => {

  const [txtPeso, setPeso] = useState('');
  const [txtAltura, setAltura] = useState('');
  const [txtImc, setImc] = useState('');

  const calcularIMC = () => {
    const peso = parseFloat(txtPeso);
    const altura = parseFloat(txtAltura);

    const imc = peso/(altura * altura);

    setImc(imc);
  }

  return(
    <View style={estilos.view}>
      <Text style={estilos.texto}>Peso</Text>
      <TextInput style={estilos.textInput} value={txtPeso} onChangeText={setPeso}/>

      <Text style={estilos.texto}>Altura</Text>
      <TextInput style={estilos.textInput} value={txtAltura} onChangeText={setAltura}/>

      <Botao btName='CALCULAR' funcao={calcularIMC}></Botao>


      <Text style={estilos.texto}>{txtImc}</Text>

      <TouchableOpacity onPress={goToModifySurvey}>
              <Image  source={require('../Images/Group1.jpg')} style={styles.Image}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={goToModifySurvey}>
              <Image  source={require('../Images/Group2.jpg')} style={styles.Image}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToModifySurvey}>
              <Image  source={require('../Images/Group3.jpg')} style={styles.Image}/>
            </TouchableOpacity>
    </View>

  )
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 36,
    color: 'black'
  },
  botao: {
    backgroundColor: 'blue'
  },
  view: {
  padding: 20,
  backgroundColor: '#EE5555',
  flex: 1
  },
  textInput: {
    fontSize: 36,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#EEEEEE',
    marginHorizontal: 10
  }

})

export default App