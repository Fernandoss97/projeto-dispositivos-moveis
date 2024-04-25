import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Colect = props => {
  const goToSuccess = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.ctBackground}>
      <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={goToSuccess} style={styles.iconContainer}>
          <Icon
            style={styles.iconDelete}
            name="sentiment-very-dissatisfied"
            size={20}
            color="#D71616"
          />
          <Text style={styles.text}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSuccess} style={styles.iconContainer}>
          <Icon
            style={styles.iconDelete}
            name="sentiment-dissatisfied"
            size={20}
            color="#FF360A"
          />
          <Text style={styles.text}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSuccess} style={styles.iconContainer}>
          <Icon
            style={styles.iconDelete}
            name="sentiment-neutral"
            size={20}
            color="#FFC632"
          />
          <Text style={styles.text}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSuccess} style={styles.iconContainer}>
          <Icon
            style={styles.iconDelete}
            name="sentiment-satisfied-alt"
            size={20}
            color="#37BD6D"
          />
          <Text style={styles.text}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSuccess} style={styles.iconContainer}>
          <Icon
            style={styles.iconDelete}
            name="sentiment-very-satisfied"
            size={20}
            color="#25BC22"
          />
          <Text style={styles.text}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ctBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingTop: 32,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    fontSize: 14,
  },
  title: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    padding: 8,
  },
});
export default Colect;
