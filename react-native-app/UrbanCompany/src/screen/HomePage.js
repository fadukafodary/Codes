import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { Searchbar, Devider } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { Icons, Picture, ServiceTitle } from '../components/Icons'
import { color, fontSize, fontfamily, image, fontFamily, lineHeight } from '../constants/Constants'
import { Height, Textt } from '../components/Icons'
import { Homeservice, NewData, Pservice, Trendingservice } from '../content/data'
import { Item } from '../components/componentss'
import Test from './SalonPage'
import { Alert } from 'react-native'
import { Services } from '../components/componentss'
import { SafeAreaView } from 'react-native'
import { Header } from '../components/componentss'

const HomePage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const renderPServices = ({ item }) => {
    return (
      <Services datas={item} onpress={() => navigation.navigate('Salon Classic')} />
    )
  };
  const renderHServices = ({ item }) => {
    return (
      <Services datas={item} onpress={() => navigation.navigate('MakeYourOwnPackage')} />
    )
  };
  const renderTServices = ({ item }) => {
    return (
      <Services backgroundColor={color.lightBlue} datas={item} onpress={() => navigation.navigate('Summary')} />
    )
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <StatusBar
          backgroundColor='gray'
          barStyle='statusBarstyle' />
        <View>
          <View style={styles.top}>
            <View style={{ paddingHorizontal: 10 }}>
              <Height top={34} />
              <TouchableOpacity style={styles.View} onPress={() => navigation.navigate('Map')}>
                <Icons name='Ionicons' icon="md-location-outline" size={30} />
                <Text style={styles.location} numberOfLines={1} >Kesanand Rd, opp. to Ayurvedic colla..</Text>
              </TouchableOpacity>
              <Height top={15} />
              <View>
                <Searchbar
                  style={{ borderRadius: 8 }}
                  inputStyle={styles.searchbarInput}
                  iconColor={color.searchBarIcon}
                  placeholder="Search for service and packages"
                  onChangeText={onChangeSearch}
                  value={searchQuery}
                />
              </View>
              <TouchableOpacity style={styles.plusTxt} onPress={() => navigation.navigate('Map')}>
                <View style={styles.View}>
                  <Picture height={25} width={25} source={image.roundStar} />
                  <Text style={styles.plusText}>plus</Text>
                  <Text style={styles.save}> Save 15% on every service</Text>
                </View>
                <Icons name="Entypo" icon='chevron-thin-right' size={15} />
              </TouchableOpacity>
            </View>
          </View>

          <Height top={15} />
          <LinearGradient colors={['#764BA2', '#667EEA']}>
            <TouchableOpacity style={styles.bannerView} onPress={() => navigation.navigate('MakeYourOwnPackage')}>
              <View style={styles.bnrView}>
                <Text style={styles.bannerText1}>Let's make a package just for you, manvi!</Text>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                  <Text style={styles.bannerText2}>Salon for women</Text>
                  <Icons name='AntDesign' icon='arrowright' size={25} color={color.white} />
                </TouchableOpacity>
              </View>
              <Picture height={115} width={115} source={image.Heirs} />
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.card}>
            <Height top={16} />
            <ServiceTitle text='Personal Services' left={16} />
            <Height top={20} />
            <FlatList
              horizontal={true}
              data={Pservice}
              renderItem={renderPServices}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.card}>
            <Height top={16} />
            <ServiceTitle text='Home Services' left={16} />
            <Height top={20} />
            <FlatList
              horizontal={true}
              data={Homeservice}
              renderItem={renderHServices}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={[styles.card, { height: 186 }]}>
            <Height top={16} />
            <ServiceTitle text='Trending Services' left={16} />
            <Height top={20} />
            <View>
              <FlatList
                horizontal={true}
                data={Trendingservice}
                renderItem={renderTServices}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <TouchableOpacity style={styles.exploreView}>
              <Text style={styles.endText} onPress={() => navigation.navigate('Check')}>Explore All Trending Services</Text>
            </TouchableOpacity>
          </View>
          <Height bottom={12} />
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default HomePage

const styles = StyleSheet.create({
  top: {
    backgroundColor: color.white,
    height: 200
  },
  plusTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  location: {
    fontFamily: 'Inter-Bold',
    fontSize: 17,
    color: '#242424',
    marginLeft: 5,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: color.gray,
    // width:'80%'
  },
  plusText: {
    marginLeft: 5,
    fontSize: 20,
    color: color.purple,
    fontFamily: fontFamily.aBold
  },
  save: {
    marginLeft: 6,
    fontFamily: fontFamily.iSemiB,
    color: color.darkBlack,
    fontSize: fontSize.font15
  },
  bannerText1: {
    fontFamily: fontFamily.aExtraB,
    fontSize: 18,
    color: color.white,
    marginTop: 25,
    marginBottom: 4
  },
  bannerText2: {
    fontFamily: fontFamily.iMedium,
    fontSize: fontSize.font15,
    color: color.white
  },
  bnrView: {
    marginLeft: 16,
    flex: 1
  },
  bannerView: {
    flexDirection: 'row',
  },
  card: {
    marginTop: 16,
    backgroundColor: color.white,
    height: 158,
    // backgroundColor:'red'
  },
  text: {
    fontFamily: fontFamily.rBold,
    fontSize: 15,
    color: color.black,
    marginLeft: 16,
    marginTop: 16
  },
  endText: {
    fontFamily: fontFamily.aMedium,
    fontSize: 10,
    color: color.darkGray,
    marginTop: 2,
    textDecorationLine: 'underline',
    textAlign: 'right',
    lineHeight: lineHeight.line016
  },
  Searchbar: {
    borderRadius: 8,
    height: 60
  },
  SafeAreaView: {
    flex: 1
  },
  searchbarInput: {
    fontFamily: fontFamily.aRegular,
    fontSize: fontSize.font16
  },
  View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exploreView: {
    marginRight: 16,
    marginTop: 12,
    marginBottom: 16
  }
})