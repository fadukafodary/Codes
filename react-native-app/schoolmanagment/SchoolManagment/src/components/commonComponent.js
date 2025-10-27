import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { dynamicSize } from "../style/Responsive";
import { FontFamily, FontSize, Color } from "../constants/constant";
import { image } from "../data/ImageData";
import Attendance from "../screens/Attendance";
// import {ActData} from "../content/data";


export const Height = (props) => {
    const { left, right, bottom, top } = props;
    return (
        <View style={{
            marginLeft: left,
            marginRight: right,
            marginTop: top,
            marginBottom: bottom,
        }}>
        </View>
    )
}

export const HolidayRect = (props) => {
    const { title, date, day, onpress } = props;
    return (
        <TouchableOpacity style={styles.holidayContainer} onPress={onpress} >
            <View>
                <Height top={13} />
                <Text style={[styles.holidaytitle, { left: 15 }]}>{title}</Text>
                <Height top={9} />
                <View style={styles.row}>
                    <Text style={styles.holidayDate}>{date}</Text>
                    <Text style={styles.holidayDate}>{day}</Text>
                </View>
            </View >
        </TouchableOpacity >
    )
}


export const Button = (props) => {
    const { text, padding, onpress, rightIcon } = props;
    return (
        <TouchableOpacity onPress={onpress} style={{ paddingHorizontal: padding }}>
            <LinearGradient style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: -0 }}
                colors={[Color.darkthemeColor, Color.lightThemeColor]}>
                <Text style={styles.buttonText}>{text}</Text>
                {rightIcon ?
                    <Image style={styles.rightIcon} source={rightIcon} /> : <></>
                }
            </LinearGradient>
        </TouchableOpacity>
    )
}



// export const SecondButton = (props) => {
//     const { text, rightIcon } = props;
//     return (
//         <TouchableOpacity>
//             <LinearGradient style={styles.gradient}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 0.8, y: 0 }}
//                 colors={[Color.darkthemeColor, Color.lightThemeColor]}>
//                 <View style={styles.row}>
//                     <Text style={styles.subMitBtnText}>{text}</Text>
//                 </View>
//                 <View style={styles.pdfContainer}>
//                     <Image style={styles.shareIcon} source={rightIcon} resizeMode='contain' />
//                 </View>
//             </LinearGradient>
//         </TouchableOpacity>
//     )
// }



// export const ProcessButton = (props) => {
//     const { text, padding, onpress , } = props;
//     return (
//         <TouchableOpacity onPress={onpress} style={{ paddingHorizontal: padding }}>
//             <LinearGradient style={styles.gradient}
//                 start={{ x: 1, y: 1 }}
//                 end={{ x: 1, y: 0 }}
//                 colors={[Color.darkthemeColor, Color.lightThemeColor]}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <Text style={styles.buttonText}>{text}</Text>
//                     <Image style={styles.processBtn} source={image.rightIcon} />
//                 </View>
//             </LinearGradient>
//         </TouchableOpacity>
//     )
// }

export const YearBtn = (props) => {
    const { text } = props;
    return (
        <TouchableOpacity style={styles.YearBtnContainer}>
            <Text style={styles.yearText}>{text}</Text>
        </TouchableOpacity>
    )
}

export const DashRectangle = (props) => {
    const { numeric, title, source, onpress } = props;
    return (
        <TouchableOpacity style={styles.data} onPress={onpress}>
            {
                <Image style={styles.img} source={source} />
            }
            <Text style={styles.numeric}>{numeric}</Text>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

    )
}

export const Header = (props) => {
    const { text, onpressLeft, iconLeft, iconRight, onpressRight, rightText, onpressrighttext, iconRight2, onpressRight2 } = props;
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onpressLeft}>
                {iconLeft ?
                    <Image style={styles.backArrow} source={iconLeft} /> : <></>
                }
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Text style={styles.headerTitle}>{text}</Text>
            </View>
            <TouchableOpacity onPress={onpressRight}>
                {iconRight ?
                    <Image style={styles.headerRighticon} source={iconRight} /> : <></>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={onpressRight2}>
                {iconRight2 ?
                    <Image style={styles.shareIcon} source={iconRight2} /> : <></>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={onpressrighttext}>
                <Text style={[styles.headerTitle, { marginLeft: 0 }]}>{rightText}</Text>
            </TouchableOpacity>
        </View>
    )
}
export const StarPattern = (props) => {
    const { top, star, opacity } = props;
    return (
        <View>
            {star ?
                <Image style={[styles.star, { marginTop: top, opacity: opacity }]} resizeMode='contain' source={star} /> : <></>
            }
        </View>
    )
}

export const FestiveRect = (props) => {
    const { leftText, rightText, onpress, bordercolor, leftColor, circleBackground, circleTextColor } = props;
    return (
        <TouchableOpacity style={[styles.festiveContainer, { borderColor: bordercolor }]} onPress={onpress} >
            <View style={styles.festiveTextContainer}>
                <Text style={styles.festiveText}>{leftText}</Text>
                <TouchableOpacity style={[styles.circle, { backgroundColor: circleBackground }]} >
                    <Text style={[styles.circleText, { color: circleTextColor }]}>{rightText}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export const AttendanceBtn = (props) => {
    const { } = props;
    return (
        <TouchableOpacity style={styles.holidayBtn}>

        </TouchableOpacity>
    )
}

export const SubmitButton = (props) => {
    const { text, padding, onpress, rightIcon } = props;
    return (
        <TouchableOpacity onPress={onpress} style={{ paddingHorizontal: padding }}>
            <LinearGradient style={styles.submitGradient}
                start={{ x: 0.1, y: 1 }}
                end={{ x: 1, y: 0.8 }}
                colors={[Color.darkthemeColor, Color.lightThemeColor]}>
                <Text style={styles.subMitBtnText}>{text}</Text>
                <Image style={styles.rightIcon} source={rightIcon} />
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    holidaytitle: {
        fontFamily: FontFamily.sSemiBold,
        fontSize: FontSize.font16,
        lineHeight: 20,
        color: Color.lightBlack
    },
    holidayDate: {
        fontFamily: FontFamily.sRegular,
        fontSize: FontSize.font14,
        lineHeight: 18,
        color: Color.gray,
    },
    holidayContainer: {
        height: dynamicSize(80),
        backgroundColor: Color.white,
        borderWidth: 1,
        borderColor: Color.feesBorderBottom,
        borderRadius: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 15
    },
    gradient2: {
        height: 54,
        borderRadius: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareIcon: {
        height: dynamicSize(20),
        width: dynamicSize(18)
    },
    submitGradient: {
        height: 39,
        borderRadius: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subMitBtnText: {
        fontFamily: FontFamily.sBold,
        fontSize: FontSize.font14,
        color: Color.white,
        lineHeight: 20
    },
    holidayBtn: {
        height: dynamicSize(28),
        width: dynamicSize(178),
        backgroundColor: Color.lightHolidayBtn,
        borderRadius: 14
    },
    AttendanceHeaderContainer: {
        flexDirection: 'row',
        marginTop: dynamicSize(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    star: {
        position: 'absolute',
        height: 63,
        width: '100%',
        marginLeft: dynamicSize(18),
        Right: 24,
        // backgroundColor:'red'
    },
    buttonText: {
        fontFamily: FontFamily.sBold,
        fontSize: FontSize.font16,
        color: Color.white,
    },
    gradient: {
        height: 54,
        borderRadius: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIcon: {
        width: 25,
        height: 18,
        position: 'absolute',
        right: 29
    },
    processBtn: {
        width: 25,
        height: 18,
    },
    YearBtnContainer: {
        height: dynamicSize(24),
        width: dynamicSize(84),
        borderRadius: 20,
        backgroundColor: Color.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    yearText: {
        color: '#6184C7',
        fontFamily: FontFamily.sRegular,
        fontSize: FontSize.font14,
        lineHeight: 18,
    },
    data: {
        height: dynamicSize(202),
        backgroundColor: Color.white,
        width: dynamicSize(163),
        borderWidth: 1,
        borderColor: Color.dashBorder,
        borderStyle: 'solid',
        borderRadius: 12
    },
    numeric: {
        fontSize: FontSize.font43,
        lineHeight: 43,
        fontFamily: FontFamily.BebasNeueRegular,
        top: 108,
        position: 'absolute',
        left: 20,
        color: Color.dashAandFees
    },
    title: {
        fontSize: FontSize.font16,
        lineHeight: 20,
        fontFamily: FontFamily.sRegular,
        top: 162,
        position: 'absolute',
        left: 20,
        color: Color.gray
    },
    img: {
        height: dynamicSize(72),
        width: dynamicSize(72),
        position: 'absolute',
        top: 22,
        left: 20
    },
    backArrow: {
        height: 21,
        width: 12
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'space-between',
        // flex:1
    },
    headerTitle: {
        fontFamily: FontFamily.sSemiBold,
        color: Color.white,
        fontSize: FontSize.font18,
        lineHeight: 23,
        marginLeft: 15
    },
    headerRighticon: {
        height: dynamicSize(28),
        width: dynamicSize(86),
    },
    festiveContainer: {
        borderWidth: 1,
        backgroundColor: Color.white,
        height: dynamicSize(46),
        borderRadius: dynamicSize(10),
        borderLeftWidth: dynamicSize(15),
        // marginHorizontal:dynamicSize(16)


    },
    circle: {
        height: dynamicSize(28),
        width: dynamicSize(28),
        borderRadius: dynamicSize(18),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    festiveText: {
        color: Color.festiveBlack,
        fontSize: FontSize.font14,
        lineHeight: 14,
        fontFamily: FontFamily.sRegular,
        marginLeft: 12,


    },
    circleText: {
        fontFamily: FontFamily.sBlack,
        fontSize: FontSize.font14,
    },
    festiveTextContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    }

})