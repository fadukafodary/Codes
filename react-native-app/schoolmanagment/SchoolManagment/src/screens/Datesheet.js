import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'

import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { CURRENT_WIDTH, dynamicSize } from '../style/Responsive'
import { Divider } from 'react-native-paper'

const DateSheetData = [
  {
    id: 'item1',
    date: '11',
    month: 'JAN',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM',
    devider: 'true'
  },
  {
    id: 'item2',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item3',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item4',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item5',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item6',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item2',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item3',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item4',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item5',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    id: 'item6',
    date: '11',
    month: 'Jan',
    subject: "Science",
    day: 'Monday',
    time: '09:00 AM'
  },


]

const DateSheet = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  changeCss=id=>{
    
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

        <Header iconLeft={image.backArrow} text='Datesheet'
          onpressLeft={() => navigation.goBack()} />
        <Height top={66} />
      </LinearGradient>


      <View style={[globallyStyle.card, { paddingHorizontal: 0, }]}>

        <Height top={25} />
        <Divider />
        <ScrollView style={{}} showsVerticalScrollIndicator={false} >
          {DateSheetData.map((datesheet) => {
            return (

              <View style={styles.row}>
                <View style={styles.dateContainer}>
                  <Text style={styles.date} >{datesheet.date}</Text>
                  <Text style={styles.month}>{datesheet.month}</Text>
                </View>
                <View style={styles.spaceBetween}>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.subject} >{datesheet.subject}</Text>
                    <Text style={styles.day}>{datesheet.day}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.Icon} source={image.ic_Time} />
                    <Height right={7} />
                    <Text style={styles.day}>{datesheet.time}</Text>
                  </View>

                </View>

              </View>


            )
          })
          }
        </ScrollView>
        <Height top={90} />
      </View>
      <View >
        <Image source={image.wallpaper} style={styles.wallpaper} resizeMode='stretch' />
      </View>
    </SafeAreaView>
  )
}

export default DateSheet
const styles = StyleSheet.create({
  wallpaper: {
    height: dynamicSize(132),
    // height: 132,
    position: 'absolute',
    bottom: 0,
    // zIndex:10,
    // width: CURRENT_WIDTH,
    width: '100%'
    // resizeMode:
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },

  Icon: {
    width: dynamicSize(13),
    height: dynamicSize(13)
  },
  date: {
    fontSize: FontSize.font26,
    color: Color.lightBlack,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 28
  },
  month: {
    fontSize: FontSize.font13,
    color: Color.lightBrinjal,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 19
  },
  subject: {
    fontSize: FontSize.font16,
    color: Color.brinjal,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 23
  },
  day: {
    fontSize: FontSize.font12,
    color: Color.silver,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 15
  },
  devider: {
    width: dynamicSize(272)
  },
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Color.feesRectBorder,
    borderRadius: 15,
    marginVertical: 16,
    paddingHorizontal: 15
  },
  subject: {
    fontSize: FontSize.font16,
    color: Color.brinjal,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 20
  },
  day: {
    fontSize: FontSize.font13,
    color: Color.silver,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 20
  },
  spaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    flex: 1,
    borderBottomColor: Color.feesBorderBottom,
    paddingBottom: 17,
    paddingTop: 13
  },
  dateContainer: {
    height: dynamicSize(43),
    width: dynamicSize(43)
  }
})