import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StarPattern, Height, Header, FestiveRect, HolidayRect } from '../components/commonComponent'
import { Color, FontFamily, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { globallyStyle } from '../style/globalStyle'
import { useNavigation } from '@react-navigation/native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { CURRENT_WIDTH, dynamicSize } from '../style/Responsive'



const Attendance = () => {
  const navigation = useNavigation();
  const [selection, setSelection] = useState(2);

  return (
    <SafeAreaView style={[globallyStyle.safeAreaView]}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />
        <Header iconLeft={image.backArrow}
          // text={selection === 1 ? 'Attendance' : 'Button'}
          onpressLeft={() => navigation.goBack()}
        />
        <View style={styles.btnGroup}>

          <TouchableOpacity
            style={[styles.btn, selection === 1 ? { backgroundColor: Color.white } : null,
            selection === 1 ? { borderRadius: 25 } : null,
            ]}
            onPress={() => setSelection(1)}>
            <Text style={[styles.btnText, selection === 1 ? { color: Color.skyAttandanceBtnText } : { color: Color.white }]}>Attendance</Text>
          </TouchableOpacity>
          {/* <Height left={-60}/> */}
          <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: Color.white } : null,
          selection === 2 ? { borderRadius: 25 } : null]}
            onPress={() => setSelection(2)}>
            <Text style={[styles.btnText, selection === 2 ? { color: Color.skyAttandanceBtnText } : { color: Color.white }]}>Holiday</Text>
          </TouchableOpacity>

        </View>

        <Height top={66} />
      </LinearGradient>
      <View style={[globallyStyle.card, { paddingHorizontal: 16, }]}>
        <Height top={6} />
        {
          selection === 1 ?
            <View>
              <View>
                <Calendar style={styles.Calendar}
                  initialDate="2023-11-01"
                  markingType="multi-period"

                  markedDates={{
                    '2023-11-08': { selected: true, selectedColor: Color.red },
                    '2023-11-23': { selected: true, selectedColor: Color.red },
                    '2023-11-20': { selected: true, selectedColor: Color.green },
                    '2023-11-04': { selected: true, selectedColor: Color.lightCalender },
                    '2023-11-11': { selected: true, selectedColor: Color.lightCalender },
                    '2023-11-18': { selected: true, selectedColor: Color.lightCalender },
                    '2023-11-25': { selected: true, selectedColor: Color.lightCalender },
                    '2023-12-01': { selected: true, selectedColor: Color.lightCalender },

                  }}
                />
              </View>
              <Height top={10} />
              <ScrollView style={{ zIndex: 999 }} showsVerticalScrollIndicator={false}>
                <Height top={15} />
                <FestiveRect leftText='Absent' rightText='02'
                  circleBackground={Color.lightPink}
                  bordercolor={Color.red}
                  circleTextColor={Color.red} />
                <Height top={15} />
                <FestiveRect leftText='Festival & Holiday'
                  rightText='01'
                  circleBackground={Color.lightGreen}
                  bordercolor={Color.green}
                  circleTextColor={Color.green} />
                <Height top={15} />
                <FestiveRect leftText='Absent' rightText='02'
                  circleBackground={Color.lightPink}
                  bordercolor={Color.red}
                  circleTextColor={Color.red} />
                <Height top={15} />
                <FestiveRect leftText='Festival & Holiday'
                  rightText='01'
                  circleBackground={Color.lightGreen}
                  bordercolor={Color.green}
                  circleTextColor={Color.green} />
                <Height top={15} />
                <FestiveRect leftText='Absent' rightText='02'
                  circleBackground={Color.lightPink}
                  bordercolor={Color.red}
                  circleTextColor={Color.red} />
                <Height top={15} />
                <FestiveRect leftText='Festival & Holiday'
                  rightText='01'
                  circleBackground={Color.lightGreen}
                  bordercolor={Color.green}
                  circleTextColor={Color.green} />
                <Height top={15} />
                <FestiveRect leftText='Absent' rightText='02'
                  circleBackground={Color.lightPink}
                  bordercolor={Color.red}
                  circleTextColor={Color.red} />
                <Height top={15} />
                <FestiveRect leftText='Festival & Holiday'
                  rightText='01'
                  circleBackground={Color.lightGreen}
                  bordercolor={Color.green}
                  circleTextColor={Color.green} />
                <Height top={15} />
                <FestiveRect leftText='Absent' rightText='02'
                  circleBackground={Color.lightPink}
                  bordercolor={Color.red}
                  circleTextColor={Color.red} />
                <Height top={15} />
                <FestiveRect leftText='Festival & Holiday'
                  rightText='01'
                  circleBackground={Color.lightGreen}
                  bordercolor={Color.green}
                  circleTextColor={Color.green} />
              </ScrollView>
            </View> : <></>
        }

        {
          selection === 2 ?
            <View>
              <View>
                <Calendar style={styles.Calendar}
                  initialDate="2023-11-01"
                  markingType="multi-period"
                  markedDates={{
                    '2023-11-14': { selected: true, selectedColor: Color.green },
                    '2023-11-15': { selected: true, selectedColor: Color.green },
                    '2023-11-16': { selected: true, selectedColor: Color.green },
                    '2023-11-04': { selected: true, selectedColor: Color.lightCalender },
                    '2023-11-11': { selected: true, selectedColor: Color.lightCalender },
                    '2023-11-18': { selected: true, selectedColor: Color.lightCalender },
                    '2023-11-25': { selected: true, selectedColor: Color.lightCalender },
                    '2023-12-01': { selected: true, selectedColor: Color.lightCalender },

                  }}
                />
              </View>
              <Height top={10} />
             <ScrollView style={{ zIndex: 999 }} showsVerticalScrollIndicator={false}>
                <Height top={26} />
                <HolidayRect title='Diwali' date='14th November' day='Saturday' />
                <Height top={12} />
                <HolidayRect title='Govardhan puja' date='14th November' day='Sunday' />
                <Height top={12} />
                <HolidayRect title='Bhaiya dooj' date='14th November' day='monday' />
                <Height top={12} />
                <HolidayRect title='Diwali' date='14th November' day='Tuesday' />
                <Height top={12} />
                <HolidayRect title='Diwali' date='14th November' day='Wednesday' />
                <Height top={12} />
                <HolidayRect title='Diwali' date='14th November' day='Thursday' />
                <Height top={12} />
                <HolidayRect title='Diwali' date='14th November' day='Friday' />
                {/* <Height top={12}/> */}
              </ScrollView>
            </View> : <></>
        }


      </View>

      <View>
        <Image style={styles.wallpaper} source={image.wallpaper} />
      </View>
    </SafeAreaView>
  )
}

export default Attendance
const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: 'row',
    alignItems: "center",
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
    backgroundColor: Color.skyAttandanceBtnText,
    borderRadius: 25,
    height: dynamicSize(28),
    width: dynamicSize(178)
    // right:71
  },
  btn: {
    flex: 1
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 3,
    fontSize: FontSize.font14,
    fontFamily: FontFamily.sBold
  },
  linearGradient: {
    paddingHorizontal: 16,
  },
  Calendar: {
    top: 5
  },
  wallpaper: {
    height: dynamicSize(132),
    zIndex: -1,
    width: '100%',
  }
})