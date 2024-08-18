import {View, Text, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {auth_mod} from '../firebase/config';
import {signOut} from 'firebase/auth';
import {useSelector} from 'react-redux';

const CustomDrawer = props => {
  const userEmail = useSelector(state => state.login.email);

  const goToHome = () => {
    props.navigation.navigate('Home');
  };

  const handleSignOut = () => {
    signOut(auth_mod)
      .then(() => {
        console.log('Usuário desconectado com sucesso!');
      })
      .catch(err => {
        console.err('Erro ao tentar desconectar: ' + err);
      });
    props.navigation.popToTop();
  };

  return (
    <DrawerContentScrollView {...props} style={styles.ctBackground}>
      <View style={styles.ctContent}>
        <DrawerItem
          label={userEmail}
          labelStyle={{
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 15,
            color: '#FFFFFF',
          }}></DrawerItem>

        <DrawerItem
          onPress={handleSignOut}
          icon={({color, size}) => (
            <Icon name="description" size={40} color="#FFFFFF" />
          )}
          label="Pesquisas"
          labelStyle={{
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 20,
            color: '#FFFFFF',
          }}
        />

        <View style={styles.ctFooter}>
          <DrawerItem
            onPress={goToHome}
            style={styles.btSair}
            icon={({color, size}) => (
              <Icon name="logout" size={40} color="#FFFFFF" />
            )}
            label="Sair"
            labelStyle={{
              fontFamily: 'AveriaLibre-Regular',
              fontSize: 30,
              color: '#FFFFFF',
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  btSair: {
    marginTop: 200,
  },
  ctFooter: {
    justifyContent: 'flex-end',
  },
  ctBackground: {
    backgroundColor: '#2B1F5C',
    //justifyContent: 'space-between'
  },
  ctContent: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    //backgroundColor: 'tomato'
  },
});

export default CustomDrawer;
