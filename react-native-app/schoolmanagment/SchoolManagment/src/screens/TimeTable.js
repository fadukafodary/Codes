import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native'
import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'
import { Divider } from 'react-native-paper'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import SchoolTime from './SchoolTimeTable'



const AssignMent = () => {

  const [backgroundcolor, setBackGroundColor] = useState('red');
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();
  const renderScene = SceneMap({
    Mon: SchoolTime,
    Tue: SchoolTime,
    Wed: SchoolTime,
    Thu: SchoolTime,
    Fri: SchoolTime,
    Sat: SchoolTime,
  })
  const [routes] = useState([
    { key: 'Mon', title: 'Mon' },
    { key: 'Tue', title: 'Tue' },
    { key: 'Wed', title: 'Wed' },
    { key: 'Thu', title: 'Thu' },
    { key: 'Fri', title: 'Fri' },
    { key: 'Sat', title: 'Sat' },
  ])

  const renderTabBar = props => (
    <TabBar
      {...props}
      pressOpacity='0.1'
      style={{ backgroundColor: Color.green, borderRadius: 90 }}
      activeColor={Color.white}
      inactiveColor={Color.black}
      labelStyle={styles.tabLabelStyle}
    />
  )
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

        <Header iconLeft={image.backArrow} text='Time Table'
          onpressLeft={() => navigation.goBack()} />
        <Height top={66} />
      </LinearGradient>
      <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
        <Height top={25} />
        <TabView
          renderTabBar={renderTabBar}
          active
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }} />
      </View>
    </SafeAreaView>
  )
}

export default AssignMent
const styles = StyleSheet.create({
  lunch: {
    height: dynamicSize(38),
    width: 39
  },
  linearGradient: {
    paddingHorizontal: 16,
  },
  textInputContainer: {
    // height: dynamicSize(186),
    // backgroundColor: Color.red,
    borderWidth: 1,
    borderColor: Color.feesRectBorder,
    borderRadius: 15,
    marginVertical: 16,
    paddingHorizontal: 15
  },
  subject: {
    fontSize: FontSize.font14,
    color: Color.black,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 20
  },
  center: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabLabelStyle: {
    fontFamily: FontFamily.sSemiBold,
    fontSize: FontSize.font13,
    lineHeight: 19
  }
})