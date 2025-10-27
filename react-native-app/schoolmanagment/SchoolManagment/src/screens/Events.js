import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Header, Height, StarPattern } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'
import { Divider } from 'react-native-paper'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment/moment'
import { TextInput } from 'react-native-paper'
import { Button } from '../components/commonComponent'
// import { useNavigation } from '@react-navigation/native'






const Events = (props) => {
  const navigation = useNavigation();
  const eventData = [
    {
      id: 'item1',
      title: 'Sleepover Night',
      image: image.profileImg,
      icon: image.ic_Time,
      time: '06 Jan 21, 09:00 AM',
      description: 'A sleepover is a great treat for kids. Many Schools use such use such an event as the culminating activity of the school year',
      navigateTo: 'SleepOverNight'
    },
    {
      id: 'item2',
      title: 'Feeshing Tournament',
      image: image.profileImg,
      icon: image.ic_Time,
      time: '06 Jan 21, 09:00 AM',
      description: 'A sleepover is a great treat for kids. Many Schools use such use such an event as the culminating activity of the school year',
      navigateTo: 'Feeshing'
    },
    {
      id: 'item3',
      title: 'Rhyme Time: A Night of Poetry',
      image: image.profileImg,
      icon: image.ic_Time,
      time: '06 Jan 21, 09:00 AM',
      description: 'A sleepover is a great treat for kids. Many Schools use such use such an event as the culminating activity of the school year',
      navigateTo: 'RhymeTime'
    }
  ]

  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

        <Header iconLeft={image.backArrow} text='Events & Programs'
          onpressLeft={() => navigation.goBack()} />
        <Height top={66} />
      </LinearGradient>

      <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
        <Height top={17} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            eventData.map((event) => {
              return (
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(event.navigateTo)}>
                  <Height top={12} />
                  <Text style={styles.title}>{event.title}</Text>
                  <Height top={10} />
                  <View style={styles.row}>
                    <View style={styles.imageContainer} >
                      {
                        event.image ?
                          <Image style={styles.image} source={event.image} /> : <></>
                      }
                    </View>
                    <Height left={9} />
                    <View>
                      <View style={styles.row}>
                        {
                          event.icon ?
                            <Image style={{
                              tintColor: Color.MediumSky,
                              height: 13,
                              width: 13
                            }}
                              source={event.icon} /> : <></>
                        }
                        <Height left={7} />
                        <View>
                          <Text style={styles.time}>{event.time}</Text>
                        </View>
                      </View>
                      <View style={{ height: 48, width: 226 }}>
                        <Text style={styles.description}>{event.description}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View >
    </SafeAreaView>
  )
}

export default Events
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: FontFamily.sSemiBold,
    color: Color.lightBrinjal,
    lineHeight: 20,
    fontSize: FontSize.font14
  },
  time: {
    fontFamily: FontFamily.sSemiBold,
    color: Color.MediumSky,
    lineHeight: 20,
    fontSize: FontSize.font13,
  },
  description: {
    fontFamily: FontFamily.sRegular,
    color: Color.gray,
    lineHeight: 16,
    fontSize: FontSize.font13,
  },
  imageContainer: {
    height: dynamicSize(75),
    width: dynamicSize(75),
    backgroundColor: Color.lightGray,
    borderRadius: 10
  },
  image: {
    height: dynamicSize(75),
    width: dynamicSize(75),
    // backgroundColor:Color.lightGray,
    borderRadius: 10
  },
  container: {
    height: dynamicSize(130),
    borderRadius: 14,
    borderWidth: 1,
    paddingLeft: 12,
    borderColor: Color.lightGray,
    marginBottom: 13
    // width:dynamicSize(343)
    // justifyContent:'center',
    // alignItems:'center'
  },
  payBtnContainer: {
    position: 'absolute',
    bottom: 0
  },
  height: {
    height: dynamicSize(130),
    borderRadius: 20,
    backgroundColor: Color.white
  },
  icon: {
    height: 18,
    width: 18
  },
  linearGradient: {
    paddingHorizontal: 16,
  },
  button: {
    height: dynamicSize(45),
    backgroundColor: Color.skyButton,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.sRegular,
    color: Color.silver,
    lineHeight: 15
  },
})