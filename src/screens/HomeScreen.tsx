import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image
        source={require('../assets/homescreen.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Lorem ipsum dolor </Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            ...styles.loginButtonWrapper,
            backgroundColor: colors.primary,
          }}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },

  image: {
    marginVertical: 20,
    width: 231,
    height: 250,
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 40,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
  },

  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.Medium,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
