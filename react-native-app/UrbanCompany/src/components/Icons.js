import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import { fontFamily, lineHeight, color, fontSize, image } from '../constants/Constants'





export const Icons = (props) => {
    const { name, color, icon, size, onPress } = props;
    return (

        <>
            {
                name == 'FontAwesome' ? <FontAwesome style={{ color: color }} name={icon} size={size} onPress={onPress} /> : <></>
            }
            {
                name == 'FontAwesome5' ? <FontAwesome5 style={{ color: color }} name={icon} size={size} onpress={onPress} /> : <></>
            }
            {
                name == 'MaterialCommunityIcons' ? <MaterialCommunityIcons style={{ color: color }} name={icon} size={size} onpress={onPress} /> : <></>
            }
            {
                name == 'Ionicons' ? <Ionicons style={{ color: color }} name={icon} size={size} onpress={onPress} /> : <></>
            }
            {
                name == 'Entypo' ? <Entypo style={{ color: color }} name={icon} size={size} onpress={onPress} /> : <></>
            }
            {
                name == 'AntDesign' ? <AntDesign style={{ color: color }} name={icon} size={size} onpress={onPress} /> : <></>
            }
            {
                name == 'EvilIcons' ? <EvilIcons style={{ color: color }} name={icon} size={size} onpress={onPress} /> : <></>
            }
        </>
    )
}

export const Button = (props) => {
    const { } = props;
    return (
        <TouchableOpacity style={[styles.text, { flexDirection: 'column', textAlign: 'right' }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <FontAwesome icon='star' size={18} color='#242424' />
                <Text style={{ color: '#242424', fontSize: 15 }}>UC Safe</Text>
            </View>
        </TouchableOpacity>
    )
}
export const Picture = (props) => {
    const { source, height, width, color, left, right } = props;
    return (
        <View>
            <Image style={{ height: height, width: width, tintcolor: color, marginLeft: left }} source={source} />
        </View>
    )
}
export const Textt = (props) => {
    const { fontFamily, fontSize, color, textDecorationLine, textAlign, lineHeight, text, marginLeft, textDecorationColor } = props;
    return (
        <View>
            <Text
                {...props}
                style={{
                    textDecorationLine: textDecorationLine,
                    textDecorationColor: textDecorationColor,
                    textAlign: textAlign,
                    lineHeight: lineHeight,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    color: color,
                    marginLeft: marginLeft
                }}>{text}</Text>
        </View>
    )
}


export const Height = (props) => {
    const { left, right, top, bottom } = props;
    return (

        <View style={{ marginLeft: left, marginRight: right, marginTop: top, marginBottom:bottom}} />

    )
}

export const RoundBtn = () => {
    <View style={styles.roundBtn}>
    </View>
}

export const CalanderBtn = (props) => {
    const { fontFamily } = props;
    return (

        <TouchableOpacity style={styles.calanderBtn} onPress={() => tpyeIcon === 'square' ? settpyeIcon('check-square') : settpyeIcon('square')}>
            <View>
                <Text style={styles.calanderBtnText}>Sat</Text>
                <Text style={[styles.calanderBtnText, { fontFamily: 'Inter-SemiBold', color: '#242424' }]}>16</Text>
            </View>
        </TouchableOpacity>
    )
}

export const ProceesBtn = (props) => {
    const { text, backgroundColor, onpress, width, align } = props;
    return (
        <TouchableOpacity style={[styles.proceesBtn, { width: width, textAlign: align }]} onPress={onpress}>
            <View>
                <Text style={styles.proceesBtnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const AddBtn = (props) => {
    const { height, onpress } = props;

    return (
        <View>
            <TouchableOpacity style={styles.AddBtnView} onPress={onpress}>
                <Text style={styles.AddBtnText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export const PlusBtn = (props) => {
    const { onpress, minus } = props;
    const [count, setCount] = useState(1);
    const Plus = () => setCount(prevCount => prevCount + 1);
    // const Minus = () => setCount(prevCount => prevCount - 1);

    return (
        <View style={[styles.plusBtn, {}]}>

            <TouchableOpacity onPress={minus}><Text style={styles.plusBtnTxtAround}>-</Text></TouchableOpacity>
            <View>
                <Text style={styles.plusBtnTxt}>{count}</Text>
            </View>
            <TouchableOpacity onPress={Plus}><Text style={styles.plusBtnTxtAround}>+</Text></TouchableOpacity>

        </View>
    )
}

export const ArrowBtn = (props) => {
    const {onpress}=props;
    return (
        <View>
            <TouchableOpacity>
                <Entypo name='chevron-small-up' size={34} color={'black'} onPress={onpress}/>
            </TouchableOpacity>
        </View>
    )
}

export const Line = (props) => {
    const { } = props;
    return (
        <View
            style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
            }}
        />
    )
}

export const CheckIcon = (props) => {
    const { } = props;
    return (
        <TouchableOpacity style={[styles.checkIcon, {}]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Icons name='Ionicons' icon='shield-checkmark' size={20} color='#242424' />
                <Text style={{ color: '#242424', fontSize: 15, fontFamily: 'Inter-SemiBold' }}>UC Safe</Text>
            </View>
        </TouchableOpacity>
    )
}

export const ServiceTitle = (props) => {
    const { text, left, onpress } = props;
    return (
        <View>
            <Text onPress={onpress} style={[styles.ServiceTitle, { marginLeft: left }]}>{text}</Text>
        </View>
    )
}



export const MenuBtn = (props) => {
    const { text, backgroundColor, onpress, width, align } = props;
    return (
        <TouchableOpacity style={[styles.menuBtn, { width: width }]} onPress={onpress}>
            <View style={{flexDirection:'row'}}>
                <Icons name='Entypo' size={20}  icon='menu'/>
                <Text style={styles.menuText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    text: {
        backgroundColor: '#fff',
        height: 43,
        width: 123,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 12,
        borderRadius: 8
    },
    AddBtnView: {
        height: 30,
        width: 72,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#572AC8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    AddBtnText: {
        fontFamily: 'Axiforma-SemiBold',
        fontSize: 12,
        lineHeight: 24,
        color: '#572AC8'
    },
    roundBtn: {
        height: 4,
        width: 4,
        borderWidth: 1,
        backgroundColor: '#757575',
        borderRadius: 10
    },
    plusBtn: {
        width: 72,
        height: 32,
        borderColor: '#572AC8',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'rgba(87, 42, 200, 0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    plusBtnTxt: {
        fontSize: 14,
        fontFamily: 'Axiforma-ExtraBold',
        color: '#242424'
    },
    plusBtnTxtAround: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Axiforma-ExtraBold',
        color: '#572AC8'
    },
    calanderBtn: {
        height: 65,
        width: 65,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    calanderBtnText: {
        fontFamily: 'Inter-Medium',
        padding: 3,
        lineHeight: 19
    },
    freeCancelation: {
        backgroundColor: 'gray',
        height: 60,
        width: '90%'
    },
    proceesBtn: {
        backgroundColor: '#6E42E5',
        borderRadius: 8,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    proceesBtnText: {
        fontFamily: 'Axiforma-SemiBold',
        fontSize: 14,
        lineHeight: 24,
        color: '#FFFFFF'
    },
    line: {
        textDecorationLine: 'underline',
        textDecorationLineColor: 'blue'
    },
    checkIcon: {
        backgroundColor: color.white,
        height: 43,
        width: 123,
        borderColor: color.gray,
        borderWidth: 0.5,
        justifyContent: 'center',
        borderRadius: 8
    },
    ServiceTitle: {
        fontFamily: fontFamily.iBold,
        fontSize: 16,
        lineHeight: 20,
        color: color.darkBlack
    },
    menuBtn: {
        width: 90,
        height: 36,
        backgroundColor: color.menuBtn,
        borderRadius: 52,
        // alignItems: 'center',
        justifyContent:'space-around'
        // marginHorizontal:150
    },
    menuText: {
        fontFamily: fontFamily.aSemiBold,
        fontSize: fontSize.font14,
        lineHeight: lineHeight.line24,
        color: color.white
    }})