import { View, Text, Image, Dimensions } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React from 'react'
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
import { image } from '../data/ImageData';
import { Gallerys } from '../components/flatlist';
// import { SchoolData } from '../content/data';
const ImageView = (props) => {
    const route = useRoute();
    return (
        <View>
            {
                <Image source={image.profileImg} style={{ height: deviceHeight, width: deviceWidth }} />
            }
        </View>
    )
}

export default ImageView