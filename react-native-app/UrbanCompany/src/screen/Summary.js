import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { AddBtn, RoundBtn, PlusBtn } from '../components/Icons'
import HomePage from './HomePage'
import { BottomSheet } from 'react-native-btr';
import { Icons, Textt, Picture, Height, Line, ProceesBtn } from '../components/Icons'
import { ScrollView } from 'react-native'
import { color, fontFamily, fontSize, lineHeight, image } from '../constants/Constants'
// import { FlatList } from 'react-native-gesture-handler'
import { renderCleanup, Sheet1, Header } from '../components/componentss'
import { CalanderBtn } from '../components/Icons';
import { SafeAreaView } from 'react-native';
// import MapView1 from './MapView';
import MapView from 'react-native-maps'

const Summary2 = ({ navigation }) => {

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const Cleanup = [
    {
      id: 'item1',
      image: require('../assets/images/Cleanup.png'),
      title: "Fruit's cleanup",
      icon: require('../assets/images/Star.png'),
      rating: '4.76k (978k) | 55 mins ',
      edit: 'Edit',
      charge: '₹ 400'
    },
  ]

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
          <View style={{ flexDirection: 'row',alignItems: 'center' }}>
            <Icons name="MaterialCommunityIcons" size={22} icon="home-outline" color={color.purple} />
            <Height left={20} />
            <View style={{ flexDirection: 'row' }}>
              <Textt text='Home' fontFamily={fontFamily.iBold} color={color.black} />
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

  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };



  const SelfcareCharge = (props) => {
    const { } = props;
    return (
      <View style={styles.viewCharge}>
        <View style={styles.selcareChargeView}>
          <View style={styles.roundBtn}></View>
          <Height right={8} />
          <Text style={styles.selfCareChargeText} numberOfLines={1}>Fully body massage - ₹ 400</Text>
        </View>
        <View style={styles.selcareChargeView}>
          <View style={styles.roundBtn}></View>
          <Height right={8} />
          <Text style={styles.selfCareChargeText} numberOfLines={1}>Head massage - ₹ 140</Text>
        </View>
        <View style={styles.selcareChargeView}>
          <View style={styles.roundBtn}></View>
          <Height right={8} />
          <Text style={styles.selfCareChargeText} numberOfLines={1}>Manicure - ₹ 200</Text>
        </View>
        <View style={styles.selcareChargeView}>
          <View style={styles.roundBtn}></View>
          <Height right={8} />
          <Text style={styles.selfCareChargeText} numberOfLines={1}>Padicure - ₹ 350</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        {/* <SafeAreaView> */}
        <Header title='Summary' iconLeft={image.ArrowLeft} onPressLeft={()=>navigation.goBack()}/>
        <TouchableOpacity style={styles.plusTxt}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Image style={{ height: 25, width: 25 }} source={require('../assets/images/Round_Blue.png')} />
              <Text style={styles.plusText}>plus</Text>
              <View>
                <Text style={styles.text2} numberOfLines={1}> Save 15% on every service</Text>
                <Text style={styles.text3}> Select your plan</Text>
              </View>
            </View>
            <Icons name="Entypo" icon='chevron-thin-right' size={15} color='#0F0F0F' />
          </View>
        </TouchableOpacity>


        <View>
          <View style={styles.card}>
            <Height top={16} />
            <Textt text='Your Orders' fontFamily={fontFamily.iBold} fontSize={fontSize.font16} color='#242424' lineHeight={lineHeight.line24} marginLeft={16} />
            <Height top={7} />
            <View>
              <FlatList
                data={Cleanup}
                renderItem={renderCleanup}
                keyExtractor={item => item.id}
              />
            </View>
            <Height top={24} />

            <View style={styles.renderContainer}>
              <View style={styles.selfCarePackage}>
                <View style={{ flexDirection: 'row', flex: 1, marginRight: 15, }}>
                  <View style={{ height: 60, width: 60 }}>
                    <Picture height={56} width={56} source={require('../assets/images/SkyBox.png')} />
                  </View>

                  <View style={{ marginRight: 16, marginLeft: 10, flex: 1 }}>
                    <Textt text="Manvi's Package Manvi's Package Manvi's PackageManvi's Package" numberOfLines={1} fontFamily={fontFamily.aBold} lineHeight={lineHeight.line019} fontSize={12} color={color.black} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Picture width={12} height={11} source={require('../assets/images/Star.png')} />
                      <Height right={4} />
                      <Textt text='4.76k (978k) | 55 mins' fontFamily={fontFamily.aBold} fontSize={fontSize.font10} lineHeight={lineHeight.line015} color={color.darkBlack} />
                    </View>
                    <Textt text='Customise' fontFamily={fontFamily.aBold} fontSize={fontSize.font12} lineHeight={lineHeight.line24} color='#07794C' />
                  </View>
                </View>


                <View style={{ width: 90, alignItems: 'flex-end' }}>
                  <PlusBtn />
                  {/* <Height right={10} /> */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Textt text='₹ 950' fontFamily={fontFamily.aBold} fontSize={fontSize.font10} color=' #545454' lineHeight={lineHeight.line16} textDecorationLine='line-through' />
                    <Height right={4} />
                    <Textt text='₹ 800' fontFamily={fontFamily.aSemiBold} fontSize={fontSize.font14} color={color.darkBlack} lineHeight={lineHeight.line24} />
                  </View>
                </View>
              </View>
              <Height top={13} />
              <SelfcareCharge />
            </View>
            <Height top={15} />
          </View>
        </View>

        <Height top={15} />
        <View style={[styles.card, { height: 70, justifyContent: 'center' }]}>
          <TouchableOpacity style={styles.coupon}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.perIcon}>
                <Icons name='FontAwesome5' icon='percentage' size={20} color='#fff' />
              </View>
              <Height left={15} />
              <Textt text='Coupon and offers' numberOfLines={1} fontFamily={fontFamily.iMedium} color={color.darkBlack} fontSize={fontSize.font16} lineHeight={lineHeight.line20} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Textt text='5 offers' fontFamily={fontFamily.aBold} color='#6E42E5' fontSize={fontSize.font16} />
              <Height right={15} />
              <Icons name="Entypo" icon='chevron-thin-right' size={20} color={color.purple} />
            </View>
          </TouchableOpacity>


        </View>

        <Height top={10} />
        <View style={[styles.card, { height: 100 }]}>
          <View style={{ marginHorizontal: 10 }}>
            <Textt text='Payment Summary' fontFamily={fontFamily.iSemiB} color={color.darkBlack} fontSize={fontSize.font16} />
            <Height top={20} />
            <View style={styles.itemView}>
              <Text style={styles.itemText}>Item total</Text>
              <Text style={styles.itemText}>₹1,349</Text>
            </View>
            <Height top={15} />
            <View style={styles.itemView}>
              <Text style={styles.itemText}>Item discount</Text>
              <Text style={[styles.itemText, { color: 'green' }]}>- ₹120</Text>
            </View>
          </View>
        </View>

        <Height top={15} />
        <View style={[styles.card, { height: 195 }]}>
          <TouchableOpacity style={styles.location} onPress={() => navigation.navigate('Map')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icons name="MaterialCommunityIcons" size={22} icon="home-outline" color={color.darkBlack} />
              <Height left={20} />
              <View style={{ flexDirection: 'row' }}>
                <Textt text='Home' fontFamily='Inter-SemiBold' color='#000000' />
                <Textt text=' - D 105,Kesanand rd, opp t..' fontFamily={fontFamily.iRegular} color={color.darkBlack} />
              </View>
            </View>
            <Icons name="EvilIcons" icon='pencil' size={25} />
          </TouchableOpacity>
          <View style={{
            marginHorizontal: 10, borderBottomWidth: 1,
            borderStyle: 'dashed',
            borderBottomColor: color.gray,
          }}>
          </View>
          <TouchableOpacity style={styles.location} onPress={toggleBottomNavigationView}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icons name="Ionicons" icon='time-outline' size={22} color='#242424' />
              <Height left={20} />
              <View style={{ flexDirection: 'row' }}>
                <Textt text='Sun, Jul 17 - 07:00 AM' fontFamily={fontFamily.iRegular} color={color.darkBlack} />
              </View>
            </View>
            <Icons name="EvilIcons" icon='pencil' size={25} />
          </TouchableOpacity>
          <Line />
          <Height top={10} />
          <View style={{ marginHorizontal: 10 }}>
            <ProceesBtn text='Pay ₹ 1,323' />
          </View>
        </View>
        <View style={styles.policy}>
          <Textt text='By proceeding, you agree to our' fontFamily={fontFamily.iRegular} fontSize={fontSize.font10} />
          <TouchableOpacity>
            <Text style={styles.terms}> T&C. Privacy</Text>
          </TouchableOpacity>
          <Textt text=' and ' fontSize={10} />
          <TouchableOpacity>
            <Text style={styles.terms}>Cancellation policy</Text>
          </TouchableOpacity>


          <SafeAreaView>
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
                      {color: color.darkBlack,
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
                      <Textt text='Time to start the service' fontFamily={fontFamily.iBold} color={color.darkBlack} fontSize={fontSize.font17} />

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
          </SafeAreaView>

          {/* <SafeAreaView>
        <View>
          <BottomSheet
            visible={visible}
            onBackButtonPress={toggleBottomNavigationView}
            onBackdropPress={toggleBottomNavigationView}>
            <View style={styles.container}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,

                }} onRegionChangeComplete={(region) => setRegion(region)} />
              <Text style={styles.text}>Current latitude: {region.latitude}</Text>
              <Text style={styles.text}>Current longitude: {region.longitude}</Text>
            </View>
          </BottomSheet>
          </View>
        </SafeAreaView> */}


        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Summary2
const styles = StyleSheet.create({
  SafeAreaView:{
  flex:1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusTxt: {
    height: 60,
    backgroundColor: color.lightPurple,
    paddingVertical: 8
  },
  plusText: {
    marginLeft: 4,
    fontSize: fontSize.font20,
    color: color.purple,
    fontFamily: fontFamily.iBlack,
    lineHeight: lineHeight.line24
  },
  text2: {
    marginLeft: 20,
    fontFamily: fontFamily.aSemiBold,
    color: color.medBlack,
    fontSize: fontSize.font14,
    lineHeight: lineHeight.line24
  },
  text3: {
    marginLeft: 20,
    fontFamily: fontFamily.aMedium,
    color: color.medPurple,
    fontSize: fontSize.font12,
    lineHeight: lineHeight.line20
  },
  skyCardView: {
    height: 88,
    backgroundColor: color.lightPurple,
    justifyContent: 'center',

  },
  skyContent: {
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  selfCarePackage: {
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    // backgroundColor:"red",
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
    alignItems: 'center',
    marginHorizontal: 8,
  },
  viewCharge: {
    height: 96
  },
  selfCareChargeText: {
    fontFamily: fontFamily.aMedium,
    lineHeight: 24,
    color: color.gray7575,
    fontSize: fontSize.font12
  },
  card: {
    backgroundColor: color.white,
  },
  coupon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    flexWrap: 'wrap'
    // flex: 1

  },
  perIcon: {
    borderRadius: 32,
    backgroundColor: color.green,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: fontFamily.iRegular,
    fontSize: 15,
    color: '#242424'
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    // backgroundColor:'red',
    marginVertical: 20
  },
  policy: {
    flexDirection: 'row',
    marginHorizontal: 25,
    height: 50,
    flexWrap: 'wrap',
    // backgroundColor:'pink'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  render4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    // marginVertical:12
  },
  renderContainer: {
    marginHorizontal: 16,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: color.gray,
  },


  bottomNavigationView: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '94%',
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

  },
  terms: {
    fontFamily: fontFamily.aRegular,
    fontSize: fontSize.font10,
    color: color.black,
    textDecorationLine: 'underline'
  }


})