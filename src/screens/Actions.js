import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';

const Actions = props => {
  const {params} = useRoute();
  const {setOptions} = useNavigation();
  const goToModifySurvey = () => {
    props.navigation.navigate('Modificar pesquisa', params);
  };

  const goToColect = () => {
    props.navigation.navigate('Coletar', params);
  };
  const goToReports = () => {
    props.navigation.navigate('Relatório', params);
  };

  useEffect(() => {
    setOptions({title: params.name});
  });
  return (
    <View style={styles.ctBackground}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={goToModifySurvey}
          style={styles.iconContainer}>
          <Icon
            style={styles.iconDelete}
            name="create"
            size={80}
            color="white"
          />
          <Text style={styles.text}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToColect} style={styles.iconContainer}>
          <Icon
            style={styles.iconDelete}
            name="check"
            size={80}
            color="white"
          />
          <Text style={styles.text}>Coletar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={goToReports}>
          <Icon
            style={styles.iconDelete}
            name="query-stats"
            size={80}
            color="white"
          />
          <Text style={styles.text}>Relatório</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    fontSize: 14,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#312464',
    padding: 16,
  },
});
export default Actions;
