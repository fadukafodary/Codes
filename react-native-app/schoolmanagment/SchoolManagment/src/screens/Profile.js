import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Button, Header, Height, StarPattern } from '../components/commonComponent'
import { globallyStyle } from '../style/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import { FontFamily, Color, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'
import { TextInput } from 'react-native-paper'


const Profile = () => {
    const navigation = useNavigation();
    const [adhar, setAdhar] = useState("12345678910");
    const [academic, setAcademic] = useState("2020-21");
    const [admissionclass, setAdmissionclass] = useState("Abcd");
    const [admissionno, setAdmissionno] = useState("00TR556");
    const [admissiondate, setAdmissiondate] = useState("1 April 2018");
    const [dob, setDob] = useState("26/05/2022");
    const [mail, setMail] = useState("");
    const [mothername, setMothername] = useState("");
    const [fathername, setFathername] = useState("");
    const [address, setAddress] = useState("");

    const gottoMessageScreen = () => {
        navigation.navigate('ProfileViewData', {
            adhar, academic,
            admissionclass, admissiondate, dob, mail,
            mothername, fathername,
            address
        });
    }
    return (
        <SafeAreaView style={globallyStyle.safeAreaView}>
            <LinearGradient style={[styles.linearGradient]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 2, y: 2 }}
                colors={[Color.darkthemeColor, Color.lightThemeColor]}>
                <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

                <Header iconLeft={image.backArrow} text='My Profile'
                    onpressLeft={() => navigation.goBack()}
                    iconRight={image.done}
                    onpressRight={() => { Alert.alert('Profile Updated !') }} />
                <Height top={66} />
            </LinearGradient>
            <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
                <Height top={6} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Height top={12} />
                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle}>
                            <View style={styles.profilecontainer}>
                                <Image style={styles.profileImg} source={image.profileImg} />
                            </View>
                            <Height left={12} />
                            <View>
                                <Text style={styles.text1} >Akshay Syal</Text>
                                <Text style={styles.text2}>Class XI-B | Roll no: 04</Text>
                            </View>
                        </View>
                        <Image style={styles.camera} source={image.camera} />
                    </View>
                    <Height top={34} />
                    <View style={{ flexWrap: 'wrap', numberOfLines: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <TextInput
                                style={styles.textInputContainer}
                                theme={{
                                    colors: { primary: Color.inputText },

                                }}
                                label="Adhar No"
                                underlineColor={Color.borderBottom}
                                selectionColor={Color.black}
                                outlineColor='green'
                                value={adhar}
                                right={<TextInput.Icon icon="lock" size={20} style={{ opacity: 0.5 }} />}
                                onChangeText={adhar => setAdhar(adhar)}
                            />
                        </View>

                        <View>
                            <TextInput
                                style={styles.textInputContainer}
                                theme={{
                                    colors: { primary: Color.inputText },

                                }}
                                label="Acedemic Year"
                                underlineColor={Color.borderBottom}
                                selectionColor={Color.black}
                                outlineColor='green'
                                value={academic}
                                right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                                onChangeText={academic => setAcademic(academic)}
                            />
                        </View>

                        <View>
                            <TextInput
                                style={styles.textInputContainer}
                                theme={{
                                    colors: { primary: Color.inputText },

                                }}
                                label="Admission Class"
                                underlineColor={Color.borderBottom}
                                selectionColor={Color.black}
                                outlineColor='green'
                                value={admissionclass}
                                right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                                onChangeText={admissionclass => setAdmissionclass(admissionclass)}
                            />
                        </View>

                        <View>
                            <TextInput
                                style={styles.textInputContainer}
                                theme={{
                                    colors: { primary: Color.inputText },

                                }}
                                label="Old Admission No"
                                underlineColor={Color.borderBottom}
                                selectionColor={Color.black}
                                outlineColor='green'
                                value={admissionno}
                                right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                                onChangeText={admissionno => setAdmissionno(admissionno)}
                            />
                        </View>

                        <View>
                            <TextInput
                                style={styles.textInputContainer}
                                theme={{
                                    colors: { primary: Color.inputText },

                                }}
                                label="Date of Admission"
                                underlineColor={Color.borderBottom}
                                selectionColor={Color.black}
                                outlineColor='green'
                                value={admissiondate}
                                right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                                onChangeText={admissiondate => setAdmissiondate(admissiondate)}
                            />
                        </View>
                        <View>
                            <TextInput
                                style={styles.textInputContainer}
                                theme={{
                                    colors: { primary: Color.inputText },

                                }}
                                label="Date of Birth"
                                underlineColor={Color.borderBottom}
                                selectionColor={Color.black}
                                outlineColor='green'
                                value={dob}
                                right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                                onChangeText={dob => setDob(dob)}
                            />
                        </View>
                    </View>
                    <TextInput
                        style={styles.textInputContainer2}
                        theme={{
                            colors: { primary: Color.inputText },

                        }}
                        label="Parent Mail id"
                        underlineColor={Color.borderBottom}
                        selectionColor={Color.black}
                        outlineColor='green'
                        value={mail}
                        right={<TextInput.Icon icon="lock" size={20} style={{ opacity: 0.5 }} />}
                        onChangeText={mail => setMail(mail)}
                    />
                    <TextInput
                        style={styles.textInputContainer2}
                        theme={{
                            colors: { primary: Color.inputText },

                        }}
                        label="Mother Name"
                        underlineColor={Color.borderBottom}
                        selectionColor={Color.black}
                        outlineColor='green'
                        value={mothername}
                        right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                        onChangeText={mothername => setMothername(mothername)}
                    />
                    <TextInput
                        style={styles.textInputContainer2}
                        theme={{
                            colors: { primary: Color.inputText },

                        }}
                        label="Father Name"
                        underlineColor={Color.borderBottom}
                        selectionColor={Color.black}
                        outlineColor='green'
                        value={fathername}
                        right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                        onChangeText={fathername => setFathername(fathername)}
                    />
                    <TextInput
                        style={styles.textInputContainer2}
                        theme={{
                            colors: { primary: Color.inputText },

                        }}
                        label="Permanent Add."
                        underlineColor={Color.borderBottom}
                        selectionColor={Color.black}
                        outlineColor='green'
                        value={address}
                        right={<TextInput.Icon icon="lock" style={{ opacity: 0.5 }} />}
                        onChangeText={address => setAddress(address)}
                    />
                </ScrollView>
            </View>
            <Button text='your data' onpress={gottoMessageScreen} />

        </SafeAreaView>
    )
}
export default Profile
const styles = StyleSheet.create({
    linearGradient: {
        paddingHorizontal: 16,
    },
    rectangleContainer: {
        height: dynamicSize(100),
        backgroundColor: Color.white,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Color.dashBorder,
        borderRadius: 18,
        paddingVertical: 13,
        // paddingLeft:12
        // paddingHorizontal: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profileImg: {
        height: dynamicSize(75),
        width: dynamicSize(75),
        borderRadius: 15,

    },
    profilecontainer: {
        backgroundColor: Color.lightGray,
        height: dynamicSize(75),
        width: dynamicSize(75),
        borderRadius: 15,
        marginLeft: 12
    },
    rectangle: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    text1: {
        fontSize: FontSize.font20,
        lineHeight: 25,
        color: Color.darkBlack,
        fontFamily: FontFamily.sBold
    },
    text2: {
        fontFamily: FontFamily.sRegular,
        fontSize: FontSize.font16,
        color: Color.gray,
        lineHeight: 20,
        // flex:1
    },
    camera: {
        height: dynamicSize(19),
        width: dynamicSize(21),
        marginRight: 18
    },
    textInputContainer: {
        height: dynamicSize(62),
        width: dynamicSize(174),
        backgroundColor: Color.white,
        fontSize: FontSize.font12,
        marginBottom: 29
    },
    textInputContainer2: {
        height: dynamicSize(62),
        backgroundColor: Color.white,
        fontSize: FontSize.font12,
        marginBottom: 29,
        lineHeight: 15
    }
})