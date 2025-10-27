import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'
import { Divider, TextInput, Provider } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'
import { Button } from '../components/commonComponent'
import { CURRENT_WIDTH } from '../style/Responsive'



const AskDoubt = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [title, setTitle] = useState('Title is here');
  const [description, setDescription] = useState('--');
  const [teacher, setTeacher] = useState();
  const [subject, setSubject] = useState();
  const teacherList = [
    {
      label: 'Alexa',
      value: 'alexa'
    },
    {
      label: 'Roze',
      value: 'rose'
    },
    {
      label: 'James',
      value: 'james'
    },
    {
      label: 'Kyne',
      value: 'kyne'
    },
  ]

  const subjectList = [
    {
      label: 'Maths',
      value: 'maths'
    },
    {
      label: 'English',
      value: 'english'
    },
    {
      label: 'Hindi',
      value: 'hindi'
    },
    {
      label: 'Science',
      value: 'science'
    },
  ]
  const navigation = useNavigation();
  return (
    <Provider>
      <SafeAreaView style={globallyStyle.safeAreaView}>
        <LinearGradient style={[styles.linearGradient]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 2, y: 2 }}
          colors={[Color.darkthemeColor, Color.lightThemeColor]}>
          <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

          <Header iconLeft={image.backArrow} text='Ask Doubt'
            onpressLeft={() => navigation.goBack()} />
          <Height top={66} />
        </LinearGradient>

        <View style={[globallyStyle.card, {}]}>

          <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'transparent'}}>
            <Height top={25} />
            <View>
              <DropDown
                theme={{
                  colors: { primary: 'red' },

                }}
                label='Select Teacher'
                value={teacher}
                setValue={setTeacher}
                list={teacherList}
                visible={showDropDown}
                placeholder='Alexa'
                dropDownItemStyle={{ backgroundColor: Color.white }}
                activeColor='blue'
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                right={<Image source={image.CalenderIcon} style={{ height: 20, width: 20 }} />} />
            </View>

            <Height top={25} />

            <View>
              <DropDown
                theme={{
                  colors: { primary: 'red' },

                }}
                label='Select Subjects'
                value={subject}
                setValue={setSubject}
                list={subjectList}
                visible={showDropDown2}
                placeholder='Alexa'
                dropDownItemStyle={{ backgroundColor: Color.white }}
                activeColor='blue'
                showDropDown={() => setShowDropDown2(true)}
                onDismiss={() => setShowDropDown2(false)}
                right={<Image source={image.CalenderIcon} style={{ height: 20, width: 20 }} />} />
            </View>
            <Height top={25} />
            <View>
              <TextInput
                style={[globallyStyle.textInput, { height: 46 }]}
                theme={{
                  colors: { primary: Color.inputText },

                }}
                underlineColor='#E1E3E8'
                label='Title'
                value={title}
                onChangeText={title => setTitle(title)}
                
              />
            </View>
            <Height top={25} />
            <View>
              <TextInput
                style={[globallyStyle.textInput]}
                theme={{
                  colors: { primary: Color.inputText },

                }}
                underlineColor='#E1E3E8'
                label='Doubt Description'
                multiline={true}
                value={description}
                onChangeText={description => setDescription(description)}
              />
            </View>
            <Height top={25} />

            <Button text='SEND' onpress={() => { Alert.alert('Send Successfully') }} />
          </ScrollView>
        </View>
        <View >
        <Image source={image.wallpaper} style={styles.wallpaper} resizeMode='stretch' />
      </View>
      </SafeAreaView>
    </Provider>
  )
}

export default AskDoubt
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 16,
  },
  wallpaper: {
    height: dynamicSize(132),
    // height: 132,
    position: 'absolute',
    bottom: 0,
    zIndex:-10,
    // width: CURRENT_WIDTH,
    width:'100%'
    // resizeMode:
  },

})