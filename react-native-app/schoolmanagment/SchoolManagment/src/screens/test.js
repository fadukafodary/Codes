import { View, Text, StyleSheet, Image, SafeAreaView, Alert, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Color, FontFamily, FontSize } from '../constants/constant'
import { Dp, Height, StarPattern, Header } from '../components/commonComponent'
import { image } from '../data/ImageData'
import { YearBtn, DashRectangle } from '../components/commonComponent'
import React, { useState } from 'react'
import { dynamicSize } from '../style/Responsive'
import { globallyStyle } from '../style/globalStyle'
import { Acts, Gallerys } from '../components/flatlist'
import { ActData, SchoolData } from '../content/data'
import { useNavigation } from '@react-navigation/native'
import { Modal } from 'react-native'
import { Button } from 'react-native'

const SchoolGallery = (props) => {
  const navigation = useNavigation();
  const modalVisible = () => {
    console.log('button pressed');
    alert('hiiiii');
    height:400;
  }
  const onClick = ()=>{
modalVisible({height:400})
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggle = () => {
    console.log('button pressed');
    setModalVisible(!isModalVisible);
  }

  const renderActivity = ({ item }) => {
    return (
      <Gallerys gallery={item} onpress={modalVisible} />
    )
  }

  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>

      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

        <Header iconLeft={image.backArrow} text='School Gallery'
          onpressLeft={() => navigation.goBack()} />
        <Height top={66} />
      </LinearGradient>
      <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
        <Height top={16} />
        <FlatList
          data={SchoolData}
          renderItem={renderActivity}
          keyExtractor={item => item.id}
          // numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView >
  )
}

export default SchoolGallery

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 16,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // paddingHorizontal: 16,
  },
  center: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
})