import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView} from 'react-native'
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






const PayOnline = (props) => {
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('DD-MM-YYYY'));
    const [selectedPeriod, setSelectedPeriod] = useState(moment(new Date()).format('DD-MM-YYYY'));
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [datePeriodVisible, setDatePeriodVisible] = useState(false);

    const [text, setText] = React.useState("");

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(moment(date).format('DD-MM-YYYY'));
        hideDatePicker();
    };
    const showPeriod = () => {
        setDatePeriodVisible(true);
    };
    const hidePeriod = () => {
        setDatePeriodVisible(false);
    };
    const handleConfirmPeriod = (date) => {
        setSelectedPeriod(moment(date).format('DD-MM-YYYY'));
        hidePeriod();
    };

    const navigation = useNavigation();
    return (
        <SafeAreaView style={globallyStyle.safeAreaView}>
            <LinearGradient style={[styles.linearGradient]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 2, y: 2 }}
                colors={[Color.darkthemeColor, Color.lightThemeColor]}>
                <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

                <Header iconLeft={image.backArrow} text='Pay Online'
                    onpressLeft={() => navigation.goBack()} />
                <Height top={66} />
            </LinearGradient>

            <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
                <Height top={29} />
                <ScrollView>
                    <TouchableOpacity onPress={showDatePicker}>
                        <View>
                            <TextInput  style={globallyStyle.textInput}
                             editable={false}
                             theme={{
                                colors: { primary: Color.inputText },

                            }}
                            underlineColor='#E1E3E8'
                            multiline={true}
                            //  error={true}
                            selectionColor={Color.black}
                            label="Date"
                            placeholder="DD/MM/YYYY"
                            dense={false}
                            value={selectedDate}
                            right={<TextInput.Icon icon="calendar" style={{ opacity: 0.5 }} />}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showPeriod}>
                            <TextInput  style={globallyStyle.textInput}
                            editable={false}
                                theme={{
                                    colors: { primary: Color.inputText },

                                }}
                                underlineColor='#E1E3E8'
                                multiline={true}
                                //  error={true}
                                selectionColor={Color.black}
                                label="Period"
                                placeholder="DD/MM/YYYY"
                                dense={false}
                                value={selectedPeriod}
                                right={<TextInput.Icon icon="calendar" style={{ opacity: 0.5 }} />}
                            />
                    </TouchableOpacity>

                    <TextInput  style={globallyStyle.textInput}
                            //  editable={false}
                             theme={{
                                colors: { primary: Color.inputText },

                            }}
                            underlineColor='#E1E3E8'
                            multiline={true}
                            //  error={true}
                            selectionColor={Color.black}
                            label="Total Fees"
                            placeholder="₹999"
                            dense={false}
                            keyboardType="numeric"
                            value={text}
                            onChangeText={text => setText(text)}
                            />
                </ScrollView>
            </View >
            <DateTimePickerModal
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={datePeriodVisible}
                mode="date"
                onConfirm={handleConfirmPeriod}
                onCancel={hidePeriod}
            />
            <View style={{paddingHorizontal:16}}>
             <Button text='Pay now' onpress={()=>{Alert.alert('Successfully paid')}} rightIcon={image.rightIcon}/>
             </View>
        </SafeAreaView>
    )
}

export default PayOnline
const styles = StyleSheet.create({
    payBtnContainer:{
     position:'absolute',
     bottom:0
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
    // textInputContainer: {
    //     height: dynamicSize(244),
    //     // backgroundColor: Color.red,
    //     borderWidth: 1,
    //     borderColor: Color.feesRectBorder,
    //     // borderRadius: 15,
    //     // marginVertical: 16,
    // },
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
    center: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    // center1:{
    //     flexD
    // }
})