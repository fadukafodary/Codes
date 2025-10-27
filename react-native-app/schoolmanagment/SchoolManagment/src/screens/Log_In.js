import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { globallyStyle } from '../style/globalStyle'
import { dynamicSize } from '../style/Responsive'
import { Color, FontFamily, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { Height, Button } from '../components/commonComponent'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-paper'
import dashboard from './Dashboard'



const LogIn = () => {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <ScrollView>
        <LinearGradient style={[styles.linearGradient]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 2, y: 2 }}
          colors={[Color.darkthemeColor, Color.lightThemeColor]}>
          <Height top={24} />
          <View style={styles.imgContainer}>
            <Image resizeMode='contain' style={styles.img} source={image.signUp} />
          </View>
          <Text style={styles.text}>Hi Student</Text>
          <Text style={styles.text2}>Sign in to continue</Text>
          <Height top={55} />
        </LinearGradient>

        <View style={[globallyStyle.card]}>
          <Height top={50} />
          <TextInput
            style={globallyStyle.textInput}
            theme={{
              colors: { primary: Color.inputText },

            }}
            underlineColor='#E1E3E8'
            multiline={true}
            //  error={true}
            selectionColor={Color.black}
            label="Mobile number/Email"
            value={text}
            onChangeText={text => setText(text)}
          />
          <Height top={10} />
          <TextInput
            style={[globallyStyle.textInput]}
            theme={{
              roundness: 7,
              Font: {
                fontWeight: '900',
              },
            }}
            mode="outlined"
            label="Password"
            placeholder='type.....'
            underlineColor='#E1E3E8'
            selectionColor={Color.darkthemeColor}
            // outlineColor='green'
            value={pass}
            // secureTextEntry 
            right={<TextInput.Icon icon="eye" style={{ opacity: 0.5 }} />}
            onChangeText={pass => setPass(pass)}
          />
          <Height top={40} />
          <Button text='SIGN IN' onpress={() => navigation.navigate('Dashboard')} rightIcon={image.rightIcon}/>
          <Height top={20} />
          <Text style={styles.forget} onPress={() => { Alert.alert('Change Password') }} >Forgot Password ?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default LogIn
const styles = StyleSheet.create({
  img: {
    height: 131.37,
    width: '100%',
    right: -30,
  },
  imgContainer: {
    justifyContent: 'flex-end',
    // backgroundColor:'red'
  },
  center: {
    alignItems: 'center',
  },
  linearGradient: {
    // flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: FontFamily.sSemiBold,
    fontSize: FontSize.font34,
    color: Color.white,
    lineHeight: 48
  },
  text2: {
    fontFamily: FontFamily.sLight,
    fontSize: FontSize.font20,
    color: Color.white,
    opacity: 0.61,
    lineHeight: 25
  },

  signUp: {
    width: '100%',
    backgroundColor: 'red',
    paddingHorizontal: 30
  },
  scrollView: {
    // flex: 1
  },
  forget: {
    textAlign: 'right',
    fontFamily: FontFamily.sRegular,
    color: Color.black
  },
  opacity: {
    opacity: 1
  }


})