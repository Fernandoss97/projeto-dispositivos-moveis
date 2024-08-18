import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Text} from 'react-native-paper';

const Input = ({
  labelName,
  iconName,
  onChangeText,
  value,
  errorMessage,
  iconRightName,
  typePassword,
}) => {
  return (
    <View>
      <Text style={styles.text}>{labelName}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        mode="outlined"
        right={
          iconRightName && (
            <TextInput.Icon color={'#CAC6C5'} icon={iconRightName} />
          )
        }
        left={<TextInput.Icon name={iconName} />}
        secureTextEntry={typePassword}
      />
      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 4,
  },
  textInput: {
    color: '#3F92C5',
    height: 40,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
  },
  error: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20,
  },
});

export default Input;
