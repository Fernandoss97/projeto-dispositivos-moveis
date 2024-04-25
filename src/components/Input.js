import { View, StyleSheet} from "react-native";
import { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";

const Input = (props) => {
  const labelName = props.labelName
  const placeholder = props.placeholder
  const iconName = props.iconName

  return(
    <View>
      <Text style={styles.text}>{labelName}</Text>
      <TextInput style={styles.textInput} mode="outlined" placeholder={placeholder} left={<TextInput.Icon name={iconName} />}/>
    </View>

  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 15,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },
  textInput:{
    color: '#3F92C5',
    height: 40,
    marginBottom: 8,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF'
  }
})

export default Input