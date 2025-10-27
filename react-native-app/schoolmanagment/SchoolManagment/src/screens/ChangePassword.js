import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { Header, Height, StarPattern } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'
import { Divider } from 'react-native-paper'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment/moment'
import { TextInput } from 'react-native-paper'
import { Button } from '../components/commonComponent'






const ChangePassword = (props) => {
    const [oldpassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [retypepassword, setRetypePassword] = useState("");


    const navigation = useNavigation();
    return (
        <SafeAreaView style={globallyStyle.safeAreaView}>
            <LinearGradient style={[styles.linearGradient]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 2, y: 2 }}
                colors={[Color.darkthemeColor, Color.lightThemeColor]}>
                <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

                <Header iconLeft={image.backArrow} text='Change Password'
                    onpressLeft={() => navigation.goBack()} />
                <Height top={66} />
            </LinearGradient>

            <View style={[globallyStyle.card, { paddingHorizontal: 16, zIndex:10 }]}>
                <Height top={29} />
                <TextInput style={globallyStyle.textInput}
                    //  editable={false}
                    theme={{
                        colors: { primary: Color.inputText },

                    }}
                    underlineColor='#E1E3E8'
                    multiline={true}
                    //  error={true}
                    selectionColor={Color.black}
                    label="Old Password"
                    placeholder="--"
                    dense={false}
                    value={oldpassword}
                    onChangeText={oldpassword => setOldPassword(oldpassword)}
                />
                <TextInput style={globallyStyle.textInput}
                    //  editable={false}
                    theme={{
                        colors: { primary: Color.inputText },

                    }}
                    underlineColor='#E1E3E8'
                    multiline={true}
                    //  error={true}
                    selectionColor={Color.black}
                    label="New Password"
                    placeholder="--"
                    dense={false}
                    value={newpassword}
                    onChangeText={newpassword => setNewPassword(newpassword)}
                />
                <TextInput style={globallyStyle.textInput}
                    //  editable={false}
                    theme={{
                        colors: { primary: Color.inputText },

                    }}
                    underlineColor='#E1E3E8'
                    multiline={true}
                    //  error={true}
                    selectionColor={Color.black}
                    label="Retype Password"
                    placeholder="--"
                    dense={false}
                    value={retypepassword}
                    onChangeText={retypepassword => setRetypePassword(retypepassword)}
                />
                <Height top={25} />
                <View style={{ paddingHorizontal: 16 }}>
                    <Button text='Change Password' onpress={() => { Alert.alert('Password Successfully changed') }} />
                </View>
            </View >
            <View>
                <Image source={image.wallpaper} style={styles.wallpaper} resizeMode='stretch'/>
            </View>
        </SafeAreaView>
    )
}

export default ChangePassword
const styles = StyleSheet.create({
    wallpaper: {
        height: dynamicSize(132),
        // height: 132,
        position: 'absolute',
        bottom: 0,
        zIndex:10,
        // width: CURRENT_WIDTH,
        width:'100%'
        // resizeMode:
      },
    payBtnContainer: {
        position: 'absolute',
        bottom: 0
    },
    height: {
        height: dynamicSize(62),
        // borderWidth:0.5,
        // borderColor:'red',
        // backgroundColor:'green',
        paddingVertical: 10
    },
    icon: {
        height: 18,
        width: 18
    },
    linearGradient: {
        paddingHorizontal: 16,
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
        fontSize: FontSize.font12,
        fontFamily: FontFamily.sRegular,
        color: Color.silver,
        lineHeight: 15
    }, devider: {
        borderColor: Color.feesBorderBottom,
        borderWidth: 0.2,
        // paddingHorizontal:150
    },
    text2: {
        fontFamily: FontFamily.sSemiBold,
        fontSize: FontSize.font16,
        lineHeight: 23,
        color: Color.lightBlack
    },

})