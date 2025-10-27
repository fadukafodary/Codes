import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {FontFamily, Color, FontSize } from '../constants/constant'
import { dynamicSize } from './Responsive'

export const globallyStyle=StyleSheet.create({
    textInput: {
        // height: 60,
        backgroundColor: Color.white,
        fontSize:FontSize.font12,
        fontFamily:FontFamily.sBlack
      },
    card: {
        backgroundColor: Color.white,
        paddingHorizontal: dynamicSize(30),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: -30,
        flex:1,
        
        
      },
    safeAreaView:{
        flex:1,
        backgroundColor:Color.white,
    },
})