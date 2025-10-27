import { View, Text, StyleSheet, Image, SafeAreaView, Alert, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Color, FontFamily, FontSize } from '../constants/constant'
import { Dp, Height, StarPattern, Header } from '../components/commonComponent'
import { image } from '../data/ImageData'
import { YearBtn, DashRectangle } from '../components/commonComponent'
import React, { useState } from 'react'
import { dynamicSize } from '../style/Responsive'
import { globallyStyle } from '../style/globalStyle'
import { Acts, Gallerys } from '../components/flatlist'
import { ActData, SchoolData } from '../content/data'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import { Button } from 'react-native'

const SchoolGallery = (props) => {
  const navigation = useNavigation();
  const modalVisible = () => {
    console.log('button pressed');
    alert('hiiiii');
    height: 400;
  }

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const toggleModal = () => {
    setVisible(!visible);
  };

  // const renderActivity = ({ item }) => {
  //   return (

  //     < Gallerys gallery = { item } onpress = { showModal } />

  //   )
  // }

  const SchoolData = [
    {
      id: 'item1',
      image: image.profileImg,
      modal: 'true',
      title: 'Hello'
    },
    {
      id: 'item2',
      image: image.profileImg2,
      // modal: 'true'

    },
    {
      id: 'item3',
      image: image.profileImg3,
      // modal: 'true'

    },
    {
      id: 'item4',
      image: image.profileImg4,

    },
    {
      id: 'item5',
      image: image.profileImg5,

    },
    {
      id: 'item6',
      image: image.profileImg6,

    },
    {
      id: 'item7',
      image: image.profileImg7,

    },
    {
      id: 'item8',
      image: image.profileImg,
    },
    {
      id: 'item9',
      image: image.profileImg,

    },
    {
      id: 'item10',
      image: image.profileImg,
    },
    {
      id: 'item11',
      image: image.profileImg,
    },
    {
      id: 'item12',
      image: image.profileImg,
    },
    {
      id: 'item13',
      image: image.profileImg,
    },
    {
      id: 'item14',
      image: image.profileImg,
    }
  ]

  const renderGallerys = props => {
    const { onpress, item } = props;
    return (
      <View>

        <TouchableOpacity style={[styles.galleryContainer, {}]} onPress={toggleModal}>
          {item.image ?

            <Image style={styles.galleryImg} resizeMode='stretch' source={item.image} /> : <></>

          }
        </TouchableOpacity>

      </View>
    )
  }
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>

      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 2, y: 2 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

        <Header iconLeft={image.backArrow} text='School Gallery'
          onpressLeft={() => navigation.goBack()} />
        <Height top={66} />
      </LinearGradient>
      <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>

        <Height top={16} />

        <FlatList

          data={SchoolData}
          renderItem={renderGallerys}
          keyExtractor={item => item.id}
          // numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <Modal isVisible={visible} animationIn={'rubberBand'}
        animationInTiming={560}
          animationOutTiming={50}
          hideModalContentWhileAnimating={false}
          animationOut={'flash'}
          >

          <TouchableOpacity onPress={toggleModal}>
            <View style={{ alignItems: 'center' }}>
              {image ?

                <Image style={styles.galleryImg2} resizeMode='stretch' source={image.profileImg} /> : <></>
              }
            </View>
          </TouchableOpacity>
        </Modal>

      </View>
    </SafeAreaView >
  )
}

export default SchoolGallery

const styles = StyleSheet.create({
  galleryImg2: {
    height: dynamicSize(323),
    width: dynamicSize(323),
    borderRadius: 10,
  },
  galleryImg: {
    height: dynamicSize(152),
    width: dynamicSize(152),
    borderRadius: 10,

    // backgroundColor: 'red',
  },

  galleryContainer: {
    borderRadius: 10,
    backgroundColor: Color.silver,
    width: dynamicSize(152),
    height: dynamicSize(152),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  img2: {
    height: 88,
    width: 77
  },
  img: {
    height: 32,
    width: 45
  },
  linearGradient: {
    paddingHorizontal: 16,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // paddingHorizontal: 16,
  },
  center: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
})