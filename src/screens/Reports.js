import React from 'react';
import {View, StyleSheet} from 'react-native';
// import { PieChart } from 'react-native-svg-charts';
import {Text} from 'react-native-paper';

const Reports = () => {
  const data = [
    {
      key: 'Péssimo',
      value: 10,
      svg: {fill: '#F1CE7E'},
      arc: {outerRadius: '120%', cornerRadius: 0},
    },
    {
      key: 'Ruim',
      value: 10,
      svg: {fill: '#6994FE'},
    },
    {
      key: 'Neutro',
      value: 20,
      svg: {fill: '#5FCDA4'},
    },
    {
      key: 'Bom',
      value: 30,
      svg: {fill: '#EA7288'},
    },
    {
      key: 'Excelente',
      value: 10,
      svg: {fill: '#53D8D8'},
    },
  ];

  return (
    <View style={styles.ctBackground}>
      <Text style={styles.title}>Relatório de Gráficos</Text>
      <View style={{flexDirection: 'row'}}>
        {/* <PieChart
          style={{ height: 300, width: 300 }}
          outerRadius={'80%'}
          innerRadius={5}
          data={data}
        /> */}
        <View>
          <Text>Péssimo</Text>
          <Text>Ruim</Text>
          <Text>Neutro</Text>
          <Text>Bom</Text>
          <Text>Excelente</Text>
        </View>
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
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default Reports;
