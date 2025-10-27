import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Header } from '../../components/commonComponent'
import { globallyStyle } from '../../style/globalStyle'
import { image } from '../../data/ImageData'
import { Color, FontFamily, FontSize } from '../../constants/constant'
import { StarPattern, Height } from '../../components/commonComponent'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'



const Feeshing = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>

      {/* <View style={styles.header}>
          
          <Height top={66} />
        </View> */}
      <ImageBackground source={image.background_silver}>
        <View style={{ paddingHorizontal: 16 }}>
          <Header iconLeft={image.backArrow}
            onpressLeft={() => navigation.goBack()} />
        </View>
        <Height top={264} />
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 17 }}>
          <Height top={18} />
          <View style={styles.row}>
            <Image style={styles.icon} source={image.ic_Time} />
            <Height right={6} />
            <Text style={styles.time}>12 Jan, 09:00 AM</Text>
          </View>
          <Height top={9} />
          <Text style={styles.title}>Feeshing time : _____</Text>
          <Height top={9} />
          <Text style={styles.description}>I have always loved fishing since the first time I was on the water, It is a fun sport that I
            think everyone should try. Fishing is amazing in so many ways sometimes the
            coolest thing about fishing is having that awesome fight and experiencing
            the action of feeling the fish tug down on the line as you trying to get it
            up into the boat. I hope to take fishing to the next level and go to college to
            be on the fishing league. There is a lot of different things about fishing like the
            kinds a bait like top water bait you can bottom fish which is usually the best technique for catfish.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Feeshing
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 16
  },
  view: {
    backgroundColor: Color.darkBlack,
    opacity: 0.21
  },
  header: {
    position: 'absolute',
    top: 12,
    left: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    tintColor: Color.MediumSky,
    height: 13,
    width: 13
  },
  time: {
    fontFamily: FontFamily.sSemiBold,
    color: Color.MediumSky,
    lineHeight: 19,
    fontSize: FontSize.font13,
  },
  title: {
    fontFamily: FontFamily.sSemiBold,
    color: Color.lightBrinjal,
    lineHeight: 23,
    fontSize: FontSize.font16
  },
  description: {
    fontFamily: FontFamily.sRegular,
    color: Color.gray,
    lineHeight: 16,
    fontSize: FontSize.font13,
  },
})