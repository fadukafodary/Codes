import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { AddBtn, Icons, PlusBtn } from '../components/Icons'
import { Textt } from '../components/Icons'
import { Height } from '../components/Icons'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { Picture, ServiceTitle, RoundBtn, ArrowBtn } from '../components/Icons'
import { fontFamily, fontSize, color, lineHeight, image } from '../constants/Constants'
import { Tags, Cleanup, Waxing } from '../content/data'
import { renderTags, renderOwnCleanup, renderWaxing, Header } from '../components/componentss'
import { Cleanups, Waxings } from '../components/componentss'
import Alert from 'react-native'

const SelfcareText = (props) => {
    const { } = props;
    return (
        <View style={{ flexDirection: 'column' }}>
            <Textt text='Self Care Package' numberOfLines={1} fontFamily='Axiforma-Medium' lineHeight={19.25} fontSize={12} color='#000000' />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Height bottom={4} />
                <View style={{ justifyContent: 'center', marginRight: 4 }}>
                    <Picture width={12} height={11} source={require('../assets/images/Star.png')} />
                </View >
                <Textt text='4.76k (978k) | 55 mins' fontFamily='Axiforma-Regular' fontSize={10} lineHeight={16} color='#242424' />
            </View>
            <Textt text='Customise' fontFamily='Axiforma-Medium' fontSize={12} lineHeight={24} color='#07794C' />
        </View>
    )
}

const SelfcareCharge = (props) => {
    const { } = props;
    return (
        <View style={[styles.viewCharge, {}]}>
            <View style={styles.selcareChargeView}>
                <Height left={8} />
                <View style={styles.roundBtn}></View>
                <Height left={8} />
                <Text style={styles.selfCareChargeText} numberOfLines={1}>Fully body massage - ₹ 400</Text>
            </View>
            <View style={styles.selcareChargeView}>
                <Height left={8} />
                <View style={styles.roundBtn}></View>
                <Height right={8} />
                <Text style={styles.selfCareChargeText} numberOfLines={1}>Head massage - ₹ 140</Text>
            </View>
            <View style={styles.selcareChargeView}>
                <Height left={8} />
                <View style={styles.roundBtn}></View>
                <Height right={8} />
                <Text style={styles.selfCareChargeText} numberOfLines={1}>Manicure - ₹ 200</Text>
            </View>
            <View style={styles.selcareChargeView}>
                <Height left={8} />
                <View style={styles.roundBtn}></View>
                <Height right={8} />
                <Text style={styles.selfCareChargeText} numberOfLines={1}>Padicure - ₹ 350</Text>
            </View>
        </View>

    )
}

const OwnPage = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [toggle, setsoggle] = useState(true);

    const toggleFunction = () => {
        setsoggle(!toggle);
    }
    const renderCleanup = ({ item }) => {
        return (
            <Cleanups clean={item} toggleFunction={toggleFunction} toggle={toggle} />
        )
    }
    const renderWaxing = ({ item }) => {
        return (
            <Waxings wax={item} toggleFunction={toggleFunction} toggle={toggle} />
        )
    }

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Header title='Make your own page' iconLeft={image.ArrowLeft} onPressLeft={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.searchContainer}>
                    <Searchbar
                        inputStyle={styles.Searchbar}
                        style={styles.SearchbarStyle}
                        iconColor={color.searchBarIcon}
                        placeholder=" Search for 'facial' "
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>

                <Height top={8} />
                <View style={styles.card}>
                    <FlatList
                        horizontal={true}
                        data={Tags}
                        renderItem={renderTags}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: 16, paddingRight: 8 }}
                    />
                </View>
                <Height top={8} />

                <View>
                    <TouchableOpacity style={styles.skyCardView}>
                        <View style={styles.skyContent}>
                            <Picture height={56} width={56} source={image.SkyBox} />
                            <Height left={24} />
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={styles.order}>Order Again & Exciting Offers</Text>
                                <Text style={styles.manviPackage}>Manvi's Package</Text>
                                <Text style={styles.customise}>Customise</Text>
                            </View>
                            <Icons name='Entypo' icon='chevron-thin-right' size={20} color={color.medBlack} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Height top={16} />

                <View style={styles.selcCare}>
                    <View style={styles.selfCarePackage}>
                        <View>
                            <Height top={8} />
                            <Picture height={60} width={60} source={image.Frameseller} />
                        </View>
                        <Height left={24} />
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Height top={10} />
                            <SelfcareText />
                        </View>
                        <View>
                            <Height top={8} />
                            {toggle ?
                                <AddBtn onpress={() => toggleFunction()} /> : <PlusBtn minus={() => toggleFunction()} />
                            }
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles[1450]}>₹ 1450</Text>
                                <Text style={styles[1200]}>1200</Text>
                            </View>
                        </View>
                    </View>
                    <Height top={13} />
                    <SelfcareCharge />
                </View>

                <Height top={16} />
                <View style={styles.card}>
                    <Collapse>
                        <CollapseHeader>
                            <View style={styles.flatlistTitle}>
                                <ServiceTitle text='Cleanup & Facial' />
                                <Icons name='Entypo' icon='chevron-small-up' size={35} color={color.darkBlack} />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            {/* <Height top={23} /> */}
                            <FlatList
                                data={Cleanup}
                                renderItem={renderCleanup}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </CollapseBody>
                    </Collapse>
                </View>

                <Height top={16} />
                <View style={styles.card}>
                    <Collapse>
                        <CollapseHeader>
                            <View style={styles.flatlistTitle}>
                                <ServiceTitle text='Bleach & Detan' />
                                <Icons name='Entypo' icon='chevron-small-up' size={35} color={color.darkBlack} onpress={()=>navigation.navgate('Summary')}/>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            {/* <Height top={23} /> */}
                            <FlatList
                                data={Cleanup}
                                renderItem={renderCleanup}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </CollapseBody>
                    </Collapse>
                </View>
                <Height top={16} />
                <View style={styles.card}>
                    <Collapse>
                        <CollapseHeader>
                            {/* <Height top={1}/> */}
                            <View style={styles.flatlistTitle}>
                                <ServiceTitle text='Waxing' />
                                <ArrowBtn on/>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <FlatList
                                data={Waxing}
                                renderItem={renderWaxing}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </CollapseBody>
                    </Collapse>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OwnPage

const styles = StyleSheet.create({
    skyCardView: {
        height: 88,
        backgroundColor: color.lightPurple,
        justifyContent: 'center',

    },
    card: {
        backgroundColor: color.white
    },
    flatlistTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
        paddingVertical: 10
    },
    searchContainer: {
        height: 72,
        padding: 16,
        backgroundColor: color.white
    },
    SearchbarStyle: {
        borderRadius: 8,
        height: 40,
        borderColor: color.searchBorder,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    selcCare: {
        height: 192,
        backgroundColor: color.white,
    },
    skyContent: {
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    selfCarePackage: {
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selfCareChargeText: {
        fontFamily: 'Axiforma-Medium',
        lineHeight: 24,
        color: color.gray7575,
        fontSize: 12
    },
    roundBtn: {
        height: 4,
        width: 4,
        border: 1,
        backgroundColor: color.gray7575,
        borderRadius: 10
    },
    selcareChargeView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewCharge: {
        height: 96,
        // backgroundColor: 'pink',
        marginHorizontal: 16
    },
    AddBtn: {
        flexDirection: 'column'
    },
    SafeAreaView: {
        flex: 1
    },
    order: {
        fontFamily: fontFamily.aRegular,
        fontSize: fontSize.font12,
        lineHeight: lineHeight.line16
    },
    Searchbar: {
        fontFamily: fontFamily.iRegular,
        fontSize: fontSize.font14,
        lineHeight: lineHeight.line24,
        // color:'black'
    },
    1450: {
        fontFamily: fontFamily.aRegular,
        fontSize: fontSize.font10,
        color: color.mediumBlack,
        lineHeight: lineHeight.line16,
        textDecorationLine: 'line-through'
    },
    1200: {
        fontFamily: fontFamily.aSemiBold,
        fontSize: fontSize.font14,
        color: color.darkBlack,
        lineHeight: lineHeight.line24
    },
    manviPackage: {
        fontFamily: fontFamily.aSemiBold,
        fontSize: fontSize.font14,
        lineHeight: lineHeight.line24,
        color: color.medBlack
    },
    customise: {
        fontFamily: fontFamily.aMedium,
        fontSize: fontSize.font12,
        lineHeight: lineHeight.line24,
        color: color.medPurple
    },
    order: {
        fontFamily: fontFamily.aRegular,
        fontSize: fontSize.font12,
        lineHeight: lineHeight.line16,
        color: color.mediumBlack
    }
})