import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

const Reports = () => {
  return (
    <View style={styles.ctBackground}>
      <Image source={require('../Images/Chart.png')} resizeMode="center" />
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
export default Reports;
