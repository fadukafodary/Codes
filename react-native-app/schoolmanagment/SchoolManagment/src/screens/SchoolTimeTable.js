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



const SchoolTime = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
     
        <ScrollView showsVerticalScrollIndicator={false}>
        <Height top={6} />
          <View style={styles.textInputContainer}>
            <Height top={14} />
            <TouchableOpacity>
              <Text style={styles.subject}>Computer Science</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>08:15am - 9:00am</Text>
            </View>
            <Divider />
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 1</Text>
            </View>
            <Height top={15} />
          </View>

          <View style={styles.textInputContainer}>
            <Height top={14} />
            <TouchableOpacity>
              <Text style={styles.subject}>Computer Science</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>08:15am - 9:00am</Text>
            </View>
            <Divider />
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 2</Text>
            </View>
            <Height top={15} />
          </View>

          <View style={styles.textInputContainer}>
            <Height top={14} />
            <TouchableOpacity>
              <Text style={styles.subject}>Computer Science</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>08:15am - 9:00am</Text>
            </View>
            <Divider />
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 3</Text>
            </View>
            <Height top={15} />
          </View>
 
          <View style={styles.textInputContainer}>
            <Height top={14} />
            <TouchableOpacity>
              <Text style={styles.subject}>Lunch Break</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>10:30am - 11:00am</Text>
              <Image style={styles.lunch} source={image.lunch} />
            </View>
            <Height top={18} />
          </View>
          <View style={styles.textInputContainer}>
            <Height top={14} />
            <TouchableOpacity>
              <Text style={styles.subject}>Science</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>11:00am - 11:45am</Text>
            </View>
            <Divider />
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 4</Text>
            </View>
            <Height top={15} />
          </View>

          <View style={styles.textInputContainer}>
            <Height top={14} />
            <TouchableOpacity>
              <Text style={styles.subject}>Social Study</Text>
            </TouchableOpacity>
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>11:45am - 12:30am</Text>
            </View>
            <Divider />
            <Height top={8} />
            <View style={styles.center}>
              <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
              <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 5</Text>
            </View>
            <Height top={15} />
          </View>

        </ScrollView>
      
    </SafeAreaView>
  )
}

export default SchoolTime
const styles = StyleSheet.create({
  lunch:{
   height:dynamicSize(38),
   width:39
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
  submitButton: {

  }
})