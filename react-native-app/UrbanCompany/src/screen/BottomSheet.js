
import { Wrap } from 'native-base';
import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

import { BottomSheet } from 'react-native-btr';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Icons, Height, CalanderBtn, Textt, ProceesBtn, Line } from '../components/Icons';
import { color, fontFamily } from '../constants/Constants';
import { PlusBtn } from '../components/Icons';
import HomePage from './HomePage';

const Sheet = ({ navigation }) => {

    const [data, setData] = useState([
        {
            id: 'item1',
            time1: '07:00 AM',
        },
        {
            id: 'item2',
            time1: '07:30 AM',
        },
        {
            id: 'item3',
            time1: '08:00 AM',
        },
        {
            id: 'item4',
            time1: '08:30 AM',
        },
        {
            id: 'item5',
            time1: '09:00 AM',
        },
        {
            id: 'item6',
            time1: '09:30 AM',
        },
        {
            id: 'item7',
            time1: '10:00 AM',
        },
        {
            id: 'item8',
            time1: '10:30 AM',
        },
        {
            id: 'item9',
            time1: '11:00 AM',
        },
        {
            id: 'item10',
            time1: '11:30 AM',
        },
        {
            id: 'item11',
            time1: '12:00 PM',
        },
        {
            id: 'item12',
            time1: '12:30 PM',
        }

    ]);


    const Home = () => {
        return (
            <View >
                <TouchableOpacity style={styles.location}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <Icons name="MaterialCommunityIcons" size={22} icon="home-outline" color='#6E42E5' />
                        <Height left={20} />
                        <View style={{ flexDirection: 'row' }}>
                            <Textt text='Home' fontFamily='Inter-SemiBold' color='#000000' />
                            <Textt text=' - D 105,Kesanand rd, opp t..' fontFamily='Inter-Regular' color='#242424' />
                        </View>
                    </View>
                    <Icons name="Entypo" icon='chevron-thin-right' size={15} />
                </TouchableOpacity>
                <View style={styles.dashedBorder}>

                </View>
            </View>
        )
    }

    const FreeCancelation = (props) => {
        return (
            <TouchableOpacity style={styles.freecancelation}>
                <Icons name="MaterialCommunityIcons" size={22} icon="home-outline" />
                <Height right={15} />
                <View>
                    <Text style={styles.freecancelationTxt}>Free cancelation till 2 hrs before the</Text>
                    <Text style={styles.freecancelationTxt}>booked slot, post that ₹ 50 chargeble</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderTime = ({ item }) => (
        <View>
            <Text>Hello</Text>
        </View>
    )


    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {

        setVisible(!visible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Service Timing </Text>
                <Button
                    onPress={toggleBottomNavigationView}
                    title="Show Bottom Sheet" />
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}>
                    <View style={styles.bottomNavigationView}>
                        <Height top={1} />
                        <View>
                            <Home />
                            <ScrollView>
                                <Height top={10} />
                                <View style={{ padding: 20 }}>
                                    <Text style={[styles.freecancelationTxt,
                                    {
                                        color: color.darkBlack,
                                        fontFamily: fontFamily.aBold
                                    }]}>Select Date of Service</Text>
                                    <Text style={styles.freecancelationTxt}>Your service willtake approax. 2 hrs 20 mins</Text>
                                </View>
                                <Height top={30} />
                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                    <CalanderBtn />
                                    <Height left={35} />
                                    <CalanderBtn />
                                    <Height left={35} />
                                    <CalanderBtn />
                                </View>
                                <Height top={30} />
                                <View style={{ marginHorizontal: 20 }}>
                                    <FreeCancelation />
                                </View>
                                <Height top={50} />
                                <View style={{ marginHorizontal: 20 }}>
                                    <Textt text='Time to start the service' fontFamily='Inter-Bold' color='#242424' fontSize={17} />

                                    <View style={styles.timeContainer}>
                                        {data.map((item, index) =>
                                            <TouchableOpacity style={styles.calanderBtn} key={item.id}>
                                                <Text style={styles.timeText}>{item.time1}</Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>

                                <Line />
                                <Height top={10} />
                                <View style={{ marginHorizontal: 20 }}>
                                    <ProceesBtn text='Proceed to checkout' onpress={() => navigation.navigate('Summary')} />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </BottomSheet>
            </View>
        </SafeAreaView>
    );
};

export default Sheet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',

    },
    bottomNavigationView: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        // flex:1
    },
    freecancelation: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E2D9FA',
        height: 70,
        padding: 10,
        borderRadius: 10
    },
    freecancelationTxt: {
        fontFamily: 'Axiforma-Regular',
        lineHeight: 22
    },
    calanderBtn: {
        height: 45,
        width: 95,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        // marginHorizontal:12,
        // marginLeft:20,
        marginVertical: 9,
        // padding:-3
    },
    timeText: {
        fontFamily: 'Axiforma-Regular',
        color: '#242424'
    },
    timeContainer: {
        flexDirection: 'row',
        marginVertical: 30,
        flexWrap: 'wrap',
        // flex: 1,
        justifyContent: 'space-evenly',

    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20

    },
    dashedBorder: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderBottomColor: color.gray,
        marginHorizontal: 20

    }
});
