import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'
import { Divider } from 'react-native-paper'



const AssignMent = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

        <Header iconLeft={image.backArrow} text='Assignment'
          onpressLeft={() => navigation.goBack()} />
        <Height top={66} />
      </LinearGradient>

      <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
        <Height top={6} />
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.textInputContainer}>
            <Height top={13} />
            <TouchableOpacity style={styles.subjectContainer}>
              <Text style={styles.subject}>Mathemetics</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.black }]}>Surface Areas and Volumes</Text>
            </View>
            <Height top={9} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Assign Date</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>10 Nov 20</Text>
            </View>
            <Height top={10} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Last Submission Date</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>10 Dec 20</Text>
            </View>
            <Height top={14} />
            <SubmitButton text='TO BE SUBMITTED' onpress={() => { Alert.alert('Submitted maths !') }} />
            <Height top={15} />
          </View>

          <View style={styles.textInputContainer}>
            <Height top={13} />
            <TouchableOpacity style={[styles.subjectContainer, { width: dynamicSize(66) }]}>
              <Text style={styles.subject}>Science</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.black }]}>Structure of Atoms</Text>
            </View>
            <Height top={9} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Assign Date</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>10 Oct 20</Text>
            </View>
            <Height top={10} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Last Submission Date</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>30 Oct 20</Text>
            </View>
            <Height top={14} />
            <SubmitButton text='TO BE SUBMITTED' onpress={() => { Alert.alert('Submitted Science!') }} />
            <Height top={15} />
          </View>

          <View style={styles.textInputContainer}>
            <Height top={13} />
            <TouchableOpacity style={[styles.subjectContainer, { width: dynamicSize(66) }]}>
              <Text style={styles.subject}>English</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.black }]}>My Bestfriend Essay</Text>
            </View>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Assign Date</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>10 Sept 20</Text>
            </View>
            <Height top={10} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Last Submission Date</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>30 Sept 20</Text>
            </View>
            <Height top={16} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default AssignMent
const styles = StyleSheet.create({
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
    color: Color.skyButton,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 20
  },
  subjectContainer: {
    backgroundColor: Color.lightCalender,
    height: dynamicSize(23),
    width: dynamicSize(93),
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  assignDate: {
    height: dynamicSize(79),
    borderBottomWidth: 1,
    borderBottomColor: Color.feesBorderBottom
  },
  lastDate: {
    height: dynamicSize(42),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})