import React, {useEffect, useMemo} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {TextInput, Text, Button, Searchbar} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

import Card from '../components/Card';
import {useFocusEffect} from '@react-navigation/native';

const Home = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const [surveys, setSurveys] = useState([]);

  const filteredSurveys = useMemo(() => {
    if (!searchQuery) {
      return surveys;
    }
    return surveys.filter(item => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [surveys, searchQuery]);

  const goToNewSurvey = () => {
    props.navigation.navigate('Nova pesquisa');
  };

  const goToActions = item => {
    props.navigation.navigate('Carnaval', item);
  };

  useFocusEffect(
    React.useCallback(() => {
      firestore()
        .collection('survey')
        .get()
        .then(querySnapshot => {
          let surveysArray = [];
          querySnapshot.forEach(documentSnapshot => {
            surveysArray = [
              ...surveysArray,
              {id: documentSnapshot.id, ...documentSnapshot.data()},
            ];
          });
          setSurveys(surveysArray);
        });
    }, []),
  );

  return (
    <PaperProvider>
      <View style={styles.ctBackground}>
        <View style={styles.ctContent}>
          <Searchbar
            style={{
              backgroundColor: '#FFFFFF',
              fontFamily: 'AveriaLibre-Regular',
              borderRadius: 0,
              marginBottom: 30,
            }}
            placeholder="Insira o termo de busca"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />

          <FlatList
            data={filteredSurveys}
            horizontal
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => goToActions(item)}>
                  <Card
                    title={item.name}
                    date={item.date}
                    style={{marginRight: 16}}
                    imageUrl={
                      item.base64
                        ? `data:image/png;base64,${item.base64}`
                        : 'https://techservices.illinois.edu/wp-content/uploads/2021/08/computer-lab-icon-2-1024x1024.jpg'
                    }
                  />
                </TouchableOpacity>
              );
            }}
          />

          <Button
            onPress={goToNewSurvey}
            style={styles.buttonNew}
            mode="contained"
            labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            NOVA PESQUISA
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  ctCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ctBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 28,
    paddingVertical: 30,
  },
  ctContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonNew: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
  },
  ctImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  Image: {
    width: 200,
    height: 150,
    //borderRadius: 50
  },
});

export default Home;
