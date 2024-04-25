import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'react-native-paper';

const Success = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Carnaval');
    }, 3000);
  }, []);

  return (
    <View style={styles.ctBackground}>
      <Text style={styles.title}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.title}>Aguardamos você no próximo ano!</Text>
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
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    alignItems: 'center',
    padding: 8,
  },
});
export default Success;
