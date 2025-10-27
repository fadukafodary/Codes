import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { Header, Height, StarPattern } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { CURRENT_WIDTH, dynamicSize } from '../style/Responsive'
import { TextInput } from 'react-native-paper'
import { Button } from '../components/commonComponent'


const Profile = () => {
  const resultData = [
    {
      id: 'item1',
      subject: 'English',
      totalMarks: '100',
      obtained: '74 - B'
    },
    {
      id: 'item2',
      subject: 'English',
      totalMarks: '100',
      obtained: '74 - B'
    },
    {
      id: 'item3',
      subject: 'English',
      totalMarks: '100',
      obtained: '74 - B'
    },
    {
      id: 'item4',
      subject: 'English',
      totalMarks: '100',
      obtained: '74 - B'
    },
    {
      id: 'item5',
      subject: 'English',
      totalMarks: '100',
      obtained: '74 - B'
    },
    {
      id: 'item6',
      subject: 'English',
      totalMarks: '100',
      obtained: '74 - B'
    },
    {
      id: 'item7',
      subject: 'English',
      totalMarks: '100',
      obtained: '74 - B'
    }
  ]
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.9, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <ImageBackground source={image.resultBack} resizeMode='stretch' style={styles.image}>
          <View style={styles.header}>
            <Header iconLeft={image.backArrow}
              onpressLeft={() => navigation.goBack()}
              iconRight2={image.share}
              onpressRight2={() => { Alert.alert('Go to share!') }} />
            <View style={styles.gradeContainer}>
              <Image source={image.grade} resizeMode='contain' style={styles.gradeImg} />
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>

      <View style={[globallyStyle.card, { paddingHorizontal: 0}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Height top={6} />

          <Height top={19} />
          {/* <ScrollView> */}
          <View style={styles.textContainer}>
            <Text style={styles.text1}>You are Excellent,</Text>
            <Text style={styles.text2}>AKSHAY SHYAL !!</Text>
          </View>
          <Height top={25} />
          <View style={styles.resultContainer}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
              <View style={styles.subjectContainer}>
                {
                  resultData.map((data) => {
                    return (
                      <View style={{ flexDirection: 'row', }}>
                        <Height top={29} />
                        <Text style={styles.subject}>{data.subject}</Text>
                      </View>
                    )
                  })
                }
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.marksContainer}>
                  {
                    resultData.map((data) => {
                      return (
                        <View style={{ flexDirection: 'row' }}>
                          <Height top={29} />
                          <Text style={styles.marks}>{data.totalMarks}</Text>
                        </View>
                      )
                    })
                  }
                </View>
                <View style={styles.obtainedMarksContainer}>
                  {
                    resultData.map((data) => {
                      return (
                        <View style={{ flexDirection: 'row' }}>
                          <Height top={29} />
                          <Text style={styles.obtainedMarks}>{data.obtained}</Text>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
            </View>
          </View>
          <Height top={25} />
          <TouchableOpacity style={{ paddingHorizontal: 79 }}>
            <LinearGradient style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              colors={[Color.darkthemeColor, Color.lightThemeColor]}>
              <View style={styles.row}>
                <Text style={styles.submitText}>DOWNLOAD PDF</Text>
              </View>
              <View style={styles.pdfContainer}>
                <Image style={styles.shareIcon} source={image.ic_Pdf} resizeMode='contain' />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ paddingHorizontal: 79 }}>
            <LinearGradient style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              colors={[Color.darkthemeColor, Color.lightThemeColor]}>
              <View style={styles.row}>
                <Text style={styles.submitText}>DOWNLOAD PDF</Text>
              </View>
              <View style={styles.pdfContainer}>
                <Image style={styles.shareIcon} source={image.ic_Pdf} resizeMode='contain' />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 79 }}>
            <LinearGradient style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              colors={[Color.darkthemeColor, Color.lightThemeColor]}>
              <View style={styles.row}>
                <Text style={styles.submitText}>DOWNLOAD PDF</Text>
              </View>
              <View style={styles.pdfContainer}>
                <Image style={styles.shareIcon} source={image.ic_Pdf} resizeMode='contain' />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 79 }}>
            <LinearGradient style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              colors={[Color.darkthemeColor, Color.lightThemeColor]}>
              <View style={styles.row}>
                <Text style={styles.submitText}>DOWNLOAD PDF</Text>
              </View>
              <View style={styles.pdfContainer}>
                <Image style={styles.shareIcon} source={image.ic_Pdf} resizeMode='contain' />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 79 }}>
            <LinearGradient style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              colors={[Color.darkthemeColor, Color.lightThemeColor]}>
              <View style={styles.row}>
                <Text style={styles.submitText}>DOWNLOAD PDF</Text>
              </View>
              <View style={styles.pdfContainer}>
                <Image style={styles.shareIcon} source={image.ic_Pdf} resizeMode='contain' />
              </View>
            </LinearGradient>
          </TouchableOpacity> */}


          <Height top={25} />
        </ScrollView>
        <View style={styles.imagecontainer}>
        <Image source={image.wallpaper} style={styles.wallpaper} resizeMode='contain' />
      </View>
      </View>
     


      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default Profile
const styles = StyleSheet.create({
  imagecontainer: {
    position: 'absolute',
    bottom: -30,
    zIndex:-10,
    backgroundColor: 'tranparent',

  },
  subjectContainer: {
    // backgroundColor: '#E6EFFF',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    paddingTop: 10,
    paddingHorizontal: 15
  },
  marksContainer: {
    backgroundColor: '#E6EFFF',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingTop: 10,
    paddingHorizontal: 29

  },
  obtainedMarksContainer: {
    backgroundColor: 'rgba(106, 194, 89, 0.101961)',
    paddingHorizontal: 18,
    paddingTop: 10,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18
  },
  subject: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.sRegular,
    lineHeight: 18,
    color: Color.lightBrinjal
  },
  marks: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.sSemiBold,
    lineHeight: 20,
    color: Color.lightBlack
  },
  obtainedMarks: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.sBold,
    lineHeight: 18,
    color: Color.lightBlack
  },
  header: {
    paddingHorizontal: 16,
  },
  pdfContainer: {
    position: 'absolute',
    left: 172
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shareIcon: {
    height: dynamicSize(18),
    width: dynamicSize(14)
  },
  submitText: {
    fontFamily: FontFamily.sBold,
    fontSize: FontSize.font14,
    color: Color.white,
    lineHeight: 20
  },
  gradient: {
    height: 39,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 59
  },
  resultContainer: {
    height: dynamicSize(219),
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Color.feesBorderBottom,
    marginHorizontal: 16,
  },
  gradeContainer: {
    position: 'absolute',
    top: 55,
    paddingHorizontal: 118
  },
  gradeImg: {
    height: dynamicSize(136),
    width: dynamicSize(136)
  },
  text1: {
    fontFamily: FontFamily.sSemiBold,
    fontSize: FontSize.font15,
    color: Color.lightBrinjal,
    lineHeight: 21
  },
  text2: {
    fontFamily: FontFamily.BebasNeueRegular,
    fontSize: FontSize.font30,
    color: Color.lightBrinjal,
    lineHeight: 32
  },
  textContainer: {
    alignItems: 'center'
  },
  wallpaper: {
    // height: dynamicSize(132),
    height: 150,
    // position:'absolute',
    // bottom:0,
    width: CURRENT_WIDTH,
    // resizeMode:
  },
  image: {
    height: dynamicSize(254),
    width: '100%',
    // flex:1
  },
})