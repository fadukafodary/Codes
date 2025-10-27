import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { Button, Header, Height, StarPattern } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'


const Support = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

        <Header iconLeft={image.backArrow} text='Support'
          onpressLeft={() => navigation.goBack()}
        />
        <Height top={66} />
      </LinearGradient>
      <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
        {/* <View style={{ top: 129, left: 102,bottom:0 }}>
          <Image style={[styles.supportImg, { zIndex: 1 }]} source={image.support} />
        </View> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Height top={130} />
          <View style={styles.supportContainer}>
            <ImageBackground style={styles.blobSupport} source={image.blobSupport}>
            <Image style={[styles.supportImg, { zIndex: 1 }]} source={image.support} />
            </ImageBackground>
            <Height top={46} />
            <Text style={styles.title}>Get Support</Text>
          </View>
          <Height top={24} />
          <Text style={styles.service}>For any support request regards your
            ordres or deliveries please feel free to speak with as  at below.</Text>
          <Height top={113} />
          <Text style={[styles.service, { color: Color.black }]}>Call us - +91 7838XXXXXX Mail us - syalfreelance@gmail.com</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Support
const styles = StyleSheet.create({
  blobSupport: {
    height: dynamicSize(177),
    width: dynamicSize(172)
  },
  linearGradient: {
    paddingHorizontal: 16,
  },
  supportImg: {
    height: dynamicSize(171),
    width: dynamicSize(162)
  },
  supportContainer: {
    alignItems: 'center'
  },
  title: {
    fontFamily: FontFamily.sSemiBold,
    fontSize: FontSize.font24,
    color: Color.black,
    lineHeight: 30
  },
  service: {
    fontFamily: FontFamily.sRegular,
    fontSize: FontSize.font16,
    color: Color.silver,
    lineHeight: 20,
    textAlign: 'center'
  }
})