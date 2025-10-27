import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import { Color } from '../constants/constant'
import { image } from '../data/ImageData'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { Height } from '../components/commonComponent'
import { dynamicSize } from '../style/Responsive'
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('Log_in');
  }, 2000);
  return (
    
    <LinearGradient style={[styles.linearGradient, styles.center]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 2, y: 2 }}
      colors={[Color.darkthemeColor, Color.lightThemeColor]}>
      <Height top={161.13} />
      <Image resizeMode='contain' style={styles.logo} source={image.logo} />
      <Image style={styles.splash} source={image.splashScreen} />
    </LinearGradient>
    
  )
}

export default SplashScreen
const styles = StyleSheet.create({
  splash: {
    height: dynamicSize(385),
    width: '100%',
    bottom: 0,
    position: 'absolute'
  },
  logo: {
    height: 62.97,
    width: '100%'
  },
  center: {
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1
  }
})