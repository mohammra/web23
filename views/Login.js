import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, button, Button} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const {setIsLoggedIn} = useContext(MainContext);

  const checkToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('Token value in async storage', userToken);

    if (userToken === 'abcdef') {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  const logIn = async () => {
    console.log('Login button pressed');
    await AsyncStorage.setItem('userToken', 'abcdef');
    setIsLoggedIn(true);
  };

  return (
    <view style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn}></Button>
    </view>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
