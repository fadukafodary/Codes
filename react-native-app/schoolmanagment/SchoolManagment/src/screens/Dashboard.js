import { View, Text, StyleSheet, Image, SafeAreaView, Alert, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Color, FontFamily, FontSize } from '../constants/constant'
import { Dp, Height } from '../components/commonComponent'
import { image } from '../data/ImageData'
import { YearBtn, DashRectangle } from '../components/commonComponent'
import React, { useState } from 'react'
import { dynamicSize } from '../style/Responsive'
import { globallyStyle } from '../style/globalStyle'
import { Acts } from '../components/flatlist'
import { ActData } from '../content/data'
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: 'item1',
            image: image.attendance,
            numeric: '80.39%',
            title: 'Attendance'
        },
        {
            id: 'item2',
            numeric: 'Rs 6400',
            image: image.feesDue,
            title: 'Fees Due'
        }
    ]


    const renderActivity = ({ item }) => {
        return (
            <Acts act={item} onpress={()=>navigation.navigate(item.navigateTo)} />
        )
    }

    return (
        <SafeAreaView style={globallyStyle.safeAreaView}>
            <ScrollView>
                <LinearGradient style={[styles.linearGradient]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 2, y: 2 }}
                    colors={[Color.darkthemeColor, Color.lightThemeColor]}>
                    <Image style={styles.star} resizeMode='contain' source={image.star_pattern} />
                    <Height top={25} />
                    <View style={styles.center}>
                        <View>
                            <Text style={styles.text}>Hi Akshay</Text>
                            <Height top={9} />
                            <Text style={styles.text2}>Class XI-B | Roll no: 04</Text>
                            <Height top={10} />
                            <YearBtn text='2020-2021' />
                        </View>
                        <TouchableOpacity style={styles.profileContainer} onPress={() => navigation.navigate('Profile')}>
                            <Image style={styles.profileImg} resizeMode='contain' source={image.profileImg}/>
                        </TouchableOpacity>
                    </View>
                    <Height top={126} />
                </LinearGradient>

                <View>
                    <Height top={156} />
                    <FlatList
                        style={{ flex: 1 }}
                        data={ActData}
                        renderItem={renderActivity}
                        keyExtractor={item => item.id}
                        // numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainerStyle}
                    />
                </View>
                <View style={styles.dataContainer}>
                    <DashRectangle numeric='80.39%' title='Attendance' source={image.attendance} onpress={() => navigation.navigate('Attendance')}/>
                </View>
                <View style={styles.dataContainer2}>
                    <DashRectangle numeric='$ 6400' title='Fees due' source={image.feesDue} onpress={() => navigation.navigate('Fees')}/>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Dashboard

const styles = StyleSheet.create({
    linearGradient: {
        paddingHorizontal: 16,
    },
    star: {
        position: 'absolute',
        height: 63,
        width: '100%',
        marginLeft: dynamicSize(18),
        Right: 24,
        marginTop: dynamicSize(117),
        // backgroundColor:'red'
    },
    text: {
        fontFamily: FontFamily.sSemiBold,
        fontSize: FontSize.font30,
        color: Color.white,
        lineHeight: 38
    },
    text2: {
        fontFamily: FontFamily.sRegular,
        fontSize: FontSize.font18,
        color: Color.white,
        lineHeight: 23,
        opacity: 0.61

    },
    FlatList: {

    },
    dataContainer: {
        position: 'absolute',
        top: 160,
        left: 16,
    },
    dataContainer2: {
        position: 'absolute',
        top: 160,
        right: 16,

    },
    contentContainerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
    profileContainer: {
        height: dynamicSize(58),
        width: dynamicSize(58),
        borderRadius: 30,
        backgroundColor: Color.lightGray,
    },
    center: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileImg:{
        height: dynamicSize(58),
        width: dynamicSize(58),
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Color.white,
    }
})