import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import { color, fontSize, fontfamily, image, fontFamily, lineHeight } from '../constants/Constants'
import { Height, Textt, Icons, Picture, PlusBtn, AddBtn, ProceesBtn, ArrowBtn } from '../components/Icons'
import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';
import { CalanderBtn, Line } from '../components/Icons';
import { timeData } from '../content/data';
import Test from '../screen/SalonPage';
// import {}

export const Services = props => {
  const { onpress, datas, backgroundColor } = props;
  return (
    <View>
      <TouchableOpacity style={styles.serviceContent} onPress={onpress}>
        <View style={[styles.categoryImg, { backgroundColor: backgroundColor ? backgroundColor : color.white }]}>
          {
            datas.image ?
              <Picture height={32} width={32} source={datas.image} /> : <></>
          }
        </View>
        <Height height={16} />
        <View>
          <Text style={styles.serviceTxt}>{datas.title}</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}

export const Payments = props => {
  const { pay, onpress } = props;
  return (
    <View style={[styles.offers, {}]}>
      <TouchableOpacity style={styles.paymentButton} onPress={onpress}>

        <View style={{ flexDirection: 'row', marginLeft: 14 }}>
          {
            pay.image ?
              <Image style={styles.offerIcon} source={pay.image} /> : <></>
          }
          <Height left={14} />
          <View style={{ flexDirection: 'column' }}>

            <Text style={styles.paymentOption}>{pay.payment}</Text>

            <Text style={styles.paymentVoucher}>{pay.offer}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export const Tags= (props) => {
  const {tags} = props;
  return (
    <View>
      <Height top={8} />
      <TouchableOpacity style={styles.TagBtn}>
        <Text style={styles.line24Text}>{tags.text}</Text>
      </TouchableOpacity>
      <Height bottom={8} />
    </View>
  )
}

export const Categories = props => {
  const { category, onpress } = props;
  return (
    <View>
      <TouchableOpacity style={styles.categoryContainer} onPress={onpress}>
        <View style={styles.categoryImg}>
          {
            category.image ?
              <Picture height={32} width={32} source={category.image} /> : <></>
          }
        </View>
        <Height top={8} />
        <View>
          <Text style={styles.categories}>{category.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export const Cleanups = (props) => {
  const { toggleFunction, toggle, clean } = props;
  // const [toggle, setToggle] = useState(true);
  // const toggleFunction = () => {
  //   setToggle(!toggle);
  // };
  return (
    <View style={styles.renderContainer}>
      <View style={styles.render4}>

        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ marginVertical: 10, justifyContent: 'center' }}>
            {
              clean.image ?
                <Picture height={72} width={72} source={clean.image} /> : <></>
            }

          </View>
          <Height left={16} />
          <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
            <Textt text={clean.title} fontFamily='Axiforma-Medium' fontSize={12} lineHeight={19} color='#000000' />
            <View style={{ flexDirection: 'row' }}>
              <Height bottom={4} />
              <View style={{ justifyContent: 'center', marginRight: 4 }}>

                {
                  clean.icon ?
                    <Picture width={12} height={11} source={clean.icon} /> : <></>
                }

              </View>
              <Textt text={clean.rating} fontFamily='Axiforma-Regular' fontSize={10} lineHeight={16} color='#242424' />
            </View>
            <Height bottom={4} />
            <Text style={styles.line24Text}>{clean.charge}</Text>
          </View>
          <Height right={16} />
        </View>
        {toggle ?
          <AddBtn onpress={() => toggleFunction()} /> : <PlusBtn minus={() => toggleFunction()}
          />}
      </View>
    </View>
  )
}

export const Waxings = (props) => {
  const { wax, toggleFunction, toggle } = props;
  return (
    <View style={styles.renderContainer}>
      <View style={styles.render4}>

        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ marginVertical: 10, justifyContent: 'center' }}>
            {
              wax.image ?
                <Picture height={72} width={72} source={wax.image} /> : <></>
            }

          </View>
          <Height left={16} />
          <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
            <Text style={styles.renderTitle}>{wax.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Height bottom={4} />
              <View style={{ justifyContent: 'center', marginRight: 4 }}>

                {
                  wax.icon ?
                    <Picture width={12} height={11} source={wax.icon} /> : <></>
                }

              </View>
              <Text style={styles.renderRating}>{wax.rating}</Text>
            </View>
            <Height bottom={4} />
            <Text style={styles.renderCharge}>{wax.charge}</Text>

          </View>
          <Height right={16} />
        </View>
        {
          toggle ?
            <AddBtn onpress={() => toggleFunction()} /> : <PlusBtn minus={() => toggleFunction()} />
        }
      </View>
    </View>
  )
}
export const renderOwnCleanup = ({ item }) => (
  <View style={styles.renderContainer}>
    <View style={styles.render4}>

      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ marginVertical: 10, justifyContent: 'center' }}>
          {
            item.image ?
              <Picture height={72} width={72} source={item.image} /> : <></>
          }

        </View>
        <Height left={16} />
        <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <Textt text={item.title} fontFamily='Axiforma-Medium' fontSize={12} lineHeight={19} color='#000000' />
          <View style={{ flexDirection: 'row' }}>
            <Height bottom={4} />
            <View style={{ justifyContent: 'center', marginRight: 4 }}>

              {
                item.icon ?
                  <Picture width={12} height={11} source={item.icon} /> : <></>
              }

            </View>
            <Textt text={item.rating} fontFamily='Axiforma-Regular' fontSize={10} lineHeight={16} color='#242424' />
          </View>
          <Height bottom={4} />
          <Textt text={item.charge} fontFamily='Axiforma-Bold' fontSize={14} lineHeight={24} color='#242424' />
        </View>
        <Height right={16} />
      </View>
      <AddBtn />
    </View>
  </View>
)

export const Home = () => {
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

export const FreeCancelation = (props) => {
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

export const Sheet1 = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {

    setVisible(!visible);
  };
  return (
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
                <Text style={[styles.freecancelationTxt, { color: '#242424', fontFamily: 'Axiforma-Bold' }]}>Select Date of Service</Text>
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
                  {timeData.map((item, index) =>
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
  )
}

export const Header = (props) => {
  const { title, iconLeft, logo, backbutton, onPressLeft, iconRight } = props;
  return (
    <View style={styles.headerConatiner}>
      {iconLeft ?
        <TouchableOpacity onPress={onPressLeft}>
          <Picture height={15} width={18} left={15} source={iconLeft} />
        </TouchableOpacity> : <></>
      }
      <Height left={15} />
      {title ?
        <Text style={styles.headerTitle}>{title}</Text> : <></>
      }
    </View>
  )
}



const styles = StyleSheet.create({
  serviceContent: {
    width: 60,
    // backgroundColor: 'red',
    marginHorizontal: 6,
    alignItems: 'center'
  },
  serviceTxt: {
    fontSize: 10,
    fontFamily: fontFamily.aMedium,
    color: '#242424',
    textAlign: 'center',
    lineHeight: lineHeight.line015
  },
  categoryImg: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categories: {
    fontFamily: fontFamily.aRegular,
    fontSize: fontSize.font12,
    lineHeight: 20,
    color: color.black,
  },
  categoryContainer: {
    height: 100,
    width: 80,
    alignItems: 'center',
    marginHorizontal: 8,
    paddingVertical: 8
  },
  TagBtn: {
    height: 40,
    borderRadius: 8,
    marginRight: 8,
    padding: 10,
    borderWidth: 0.5,
    borderColor: color.mediumBlack,
    backgroundColor: color.lightGray
  },
  paymentButton: {
    backgroundColor: color.lightBlue,
    height: 65,
    width: 280,
    borderRadius: 10,
    paddingVertical: 14,
  },
  paymentOption: {
    fontSize: fontSize.font16,
    fontFamily: fontFamily.aMedium,
    color: color.medBlack
  },
  paymentVoucher: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.aMedium,
    color: color.getgray
  },
  render4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  renderTitle: {
    fontFamily: fontFamily.aMedium,
    fontSize: fontSize.font12,
    lineHeight: 19,
    color: color.black
  },
  renderRating: {
    fontFamily: fontFamily.aRegular,
    fontSize: fontSize.font10,
    lineHeight: 16,
    color: color.darkBlack
  },
  renderCharge: {
    fontFamily: fontFamily.aBold,
    fontSize: fontSize.font14,
    lineHeight: 24,
    color: color.darkBlack
  },
  renderContainer: {
    marginHorizontal: 16,
    borderRadius: 5,
    marginVertical: 4,
    borderWidth: 0.5,
    borderColor: color.gray
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 10
    // 
  },
  flatlistTitle: {
    fontFamily: fontFamily.iBold,
    color: color.darkBlack,
    fontSize: fontSize.font16,
    lineHeight: 20
  },
  offers: {
    marginTop: 40,
    marginHorizontal: 9,
    marginBottom: 40
  },
  offerIcon: {
    height: 20,
    width: 20
  },
  card: {
    backgroundColor: 'green'
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
  headerConatiner: {
    backgroundColor: color.white,
    height: 48,
    flexDirection: 'row',
    // paddingVertical:12,
    alignItems: 'center'
  },
  headerTitle: {
    fontFamily: fontFamily.aExtraB,
    fontSize: fontSize.font16,
    lineHeight: lineHeight.line24,
    color: color.darkBlack
  },
  line24Text:{
    fontFamily:fontFamily.aBold,
     fontSize:fontSize.font14,
     lineHeight:lineHeight.line24,
     color:color.darkBlack
  }
})
