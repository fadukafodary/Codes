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



const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
        <LinearGradient style={[styles.linearGradient]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 2, y: 2 }}
          colors={[Color.darkthemeColor, Color.lightThemeColor]}>
          <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

          <Header iconLeft={image.backArrow} text='Fees Due'
            onpressLeft={() => navigation.goBack()} />
          <Height top={66} />
        </LinearGradient>

        <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
          <Height top={6}/>
        <ScrollView showsVerticalScrollIndicator={false}>
         
          <View style={styles.textInputContainer}>
            <View style={styles.center}>
            <Text style={styles.text}>Receipt No.</Text>
            <Text style={styles.text2}>#9871</Text>
            </View>
            <Divider style={styles.devider} />
            
            <View style={styles.center}>
            <Text style={styles.text}>Month</Text>
            <Text style={styles.text2}>October</Text>
            </View>
            <View style={styles.center}>
            <Text style={styles.text}>Payment Date</Text>
            <Text style={styles.text2}>10 Oct 20</Text>
            </View>
            <Divider style={styles.devider}/>
            <View style={styles.center}>
            <Text style={styles.text}>Total Pending Amount</Text>
            <Text style={styles.text2}>Rs999</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('PayOnline')}>
              <Text style={styles.text}>Pay Now</Text>
            </TouchableOpacity>
          </View>

         
          <View style={styles.textInputContainer}>
            <View style={styles.center}>
            <Text style={styles.text}>Receipt No.</Text>
            <Text style={styles.text2}>#9871</Text>
            </View>
            <Divider style={styles.devider} />
            
            <View style={styles.center}>
            <Text style={styles.text}>Month</Text>
            <Text style={styles.text2}>October</Text>
            </View>
            <View style={styles.center}>
            <Text style={styles.text}>Payment Date</Text>
            <Text style={styles.text2}>10 Oct 20</Text>
            </View>
            <Divider style={styles.devider}/>
            <View style={styles.center}>
            <Text style={styles.text}>Total Pending Amount</Text>
            <Text style={styles.text2}>Rs999</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>DownLoad</Text>
            </TouchableOpacity>
          </View>

          
          <View style={styles.textInputContainer}>
            <View style={styles.center}>
            <Text style={styles.text}>Receipt No.</Text>
            <Text style={styles.text2}>#9871</Text>
            </View>
            <Divider style={styles.devider} />
            
            <View style={styles.center}>
            <Text style={styles.text}>Month</Text>
            <Text style={styles.text2}>October</Text>
            </View>
            <View style={styles.center}>
            <Text style={styles.text}>Payment Date</Text>
            <Text style={styles.text2}>10 Oct 20</Text>
            </View>
            <Divider style={styles.devider}/>
            <View style={styles.center}>
            <Text style={styles.text}>Total Pending Amount</Text>
            <Text style={styles.text2}>Rs999</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>DownLoad</Text>
            </TouchableOpacity>
          </View>
         </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Profile
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 16,
  },
  textInputContainer: {
    height: dynamicSize(209),
    // backgroundColor: Color.red,
    borderWidth: 1,
    borderColor: Color.feesRectBorder,
    borderRadius: 15,marginVertical:16
  },
  receipt: {
    height: dynamicSize(42),
    borderBottomWidth: 1,
    borderBottomColor: Color.feesBorderBottom
  },
  month: {
    height: dynamicSize(79),
    borderBottomWidth: 1,
    borderBottomColor: Color.feesBorderBottom
  },
  totalAmount: {
    height: dynamicSize(42),
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
    fontSize: FontSize.font18,
    fontFamily: FontFamily.sRegular
  }, devider:{
    borderColor: Color.feesBorderBottom, 
    borderWidth: 0.2,
    // paddingHorizontal:150
  },
  text2:{
    fontFamily: FontFamily.sSemiBold,
fontSize: 14,
lineHeight: 20,
color:Color.lightBlack
  },
  center:{
    alignItems:'center',
    justifyContent:'space-between',
    // flex:1
    flexDirection:'row',
    paddingHorizontal:14,
    paddingVertical:8.2
  }
})