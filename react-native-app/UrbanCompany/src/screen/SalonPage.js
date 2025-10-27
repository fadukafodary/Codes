import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Icons, PlusBtn, ProceesBtn } from '../components/Icons';
import { Picture, CheckIcon, Textt, ServiceTitle, MenuBtn } from '../components/Icons';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { FlatList } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { Height } from '../components/Icons';
import { color, fontFamily, fontSize, image, lineHeight } from '../constants/Constants';
import { Categories, Tags, Waxings, Cleanups, Header, Payments } from '../components/componentss';
import { Payment, TagsData, Waxing, Cleanup, CategoriesData } from '../content/data';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';


const Test = ({ navigation }) => {
  //  const navigation = useNavigation();
  const [IsActive, setIsActive] = useState(false)
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  const renderPayment = ({ item }) => {
    return (
      <Payments pay={item} onpress={() => navigation.navigate('Home')} />
    )
  }

  const renderCleanup = ({ item }) => {
    return (
      <Cleanups clean={item} toggleFunction={() => toggleFunction(item)} toggle={toggle} />
    )
  }

  const renderCategories = ({ item }) => {
    return (
      <Categories category={item} onpress={() => { Alert.alert('Hello') }} />
    )
  }
  const renderWaxing = ({ item }) => {
    return (
      <Waxings wax={item} toggleFunction={toggleFunction} toggle={toggle} />
    )
  }
  const renderTags = ({ item }) => {
    return (
      <Tags tags={item} />
    )
  }
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Header title='Salon Classic' iconLeft={image.ArrowLeft} onPressLeft={() => navigation.goBack()} />
      <ScrollView>
        <Slideshow
          style={{ borderRadius: 34 }}
          height={300}
          width={300}
          indicatorColor='blue'
          indicatorSize={10}
          arrowSize={15}
          overlay={true}
          dataSource={[
            {
              url: image.Facial,
            },
            {
              url: image.SpecialFacial,
            },
            {
              url: image.Cleanup,
            }
          ]}

        />

        <View style={styles.card}>
          <View style={styles.salonClassicView}>
            <Height top={45} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.salonClassic}>Salon Classic</Text>
              <CheckIcon />
            </View>
            <Height top={15} />
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Icons name='FontAwesome' icon='star' size={20} color={color.darkBlack} />
              <Height left={10} />
              <Text style={styles.salonText}>4.88 (355K)</Text>
            </TouchableOpacity>
            <Height top={10} />
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Icons name='MaterialCommunityIcons' icon='calendar-check-outline' size={20} color={color.darkBlack} />
              <Height left={10} />
              <Text style={styles.salonText}>boookings 847 in this year in Wagholi</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <FlatList
            horizontal={true}
            data={Payment}
            renderItem={renderPayment}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Height top={8} />
        <View>
          <TouchableOpacity style={styles.skyCard}>
            <View style={styles.customPackage}>
              <Picture height={62} width={62} source={require('../assets/images/SkyBox.png')} />
              <Height left={24} />
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <Textt fontFamily='Axiforma-Medium' fontSize={14} text='Create a Custom Package' color={color.darkBlack} />
                <Textt fontFamily='Axiforma-Medium' fontSize={12} text='Specifically for your needs' color={color.getgray} />
              </View>
              <Icons name='Entypo' icon='chevron-thin-right' size={20} color={color.medBlack} />
            </View>
          </TouchableOpacity>
        </View>

        <Height top={8} />
        <View style={styles.card}>
          <FlatList
            horizontal={true}
            data={TagsData}
            renderItem={renderTags}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 8 }}
          />
        </View>
        <Height top={8} />
        <View style={styles.card}>
          <Height top={16} />
          <ServiceTitle text='Categories' left={16} />
          <Height top={12} />
          <FlatList
            horizontal={true}
            data={CategoriesData}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
          <Height bottom={20} />
        </View>

        <Height top={8} />
        <View style={styles.card}>
          <Collapse>
            <CollapseHeader>
              <View style={styles.title}>
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
              <View style={styles.title}>
                <ServiceTitle text='Bleach & Detan' />
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
              {/* <Height top={1}/> */}
              <View style={styles.title}>
                <ServiceTitle text='Waxing' />
                <Icons name='Entypo' icon='chevron-small-down' size={35} color={color.darkBlack} />
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
        <Height top={103} />
        <View style={styles.addToCartView}>
          <View style={styles.addToCart}>
            <View>
              <View style={styles.wholeView}>
                <Text style={styles[400]}>₹ 400</Text>
                <Height left={4} />
                <Text style={[styles[450], { textDecorationLine: 'line-through' }]}>₹ 450</Text>
              </View>
              <Text style={styles[450]}>2 items</Text>
            </View>
            <ProceesBtn text='Add to cart' width={178} onpress={() => { Alert.alert('Add') }} />
          </View>
        </View>
        <Height bottom={16} />
      </ScrollView >
    </SafeAreaView>
  )
}
export default Test

const styles = StyleSheet.create({
  salon: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center'
  },
  shampoo: {
    height: 200,
    width: '100%'
  },
  skyCard: {
    height: 88,
    backgroundColor: color.lightPurple,
    justifyContent: 'center',

  },
  skyImgTxt: {
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    backgroundColor: color.white
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 10
  },
  customPackage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24
  },
  flatlistTitle: {
    fontFamily: fontFamily.iBold,
    color: color.darkBlack,
    fontSize: fontSize.font16,
    lineHeight: 20
  },
  salonText: {
    fontFamily: fontFamily.aMedium,
    fontSize: fontSize.font15
  },
  salonClassicView: {
    marginLeft: 13,
    flexDirection: 'column',
    marginRight: 16
  },
  SafeAreaView: {
    flex: 1
  },
  addToCartView: {
    backgroundColor: color.white,
    height: 64,
    paddingVertical: 8
  },
  wholeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  400: {
    fontFamily: fontFamily.aSemiBold,
    fontSize: fontSize.font14,
    lineHeight: lineHeight.line23,
    color: color.darkBlack
  },
  450: {
    fontFamily: fontFamily.aRegular,
    fontSize: fontSize.font10,
    lineHeight: lineHeight.line16,
    color: color.mediumBlack,
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    justifyContent: 'space-between'
  },
  salonClassic: {
    fontFamily: fontFamily.iBold,
    fontSize: fontSize.font30,
    color: color.darkBlack
  }
})