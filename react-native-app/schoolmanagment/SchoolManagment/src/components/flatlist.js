import React from "react";
import { dynamicSize } from "../style/Responsive";
import { FontFamily, FontSize, Color } from "../constants/constant";
import { image } from "../data/ImageData";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Height } from "./commonComponent";

export const Acts = props => {
    const { onpress, act } = props;
    // const { image: source1, height: height1, marginTop: marginTop1 } = act.image;
    return (
        <View style={styles.activityContainer}>
            <TouchableOpacity onPress={onpress}>
                {act.image ?

                    <Image style={styles.actImg} source={act.image} /> : <></>

                }

            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.actTitle}>{act.title}</Text>
        </View>
    )
}

export const Assigns = props => {
    const { assign } = props;
    <View style={styles.AssignContainer}>
        <Height top={13} />
        <TouchableOpacity style={styles.subjectContainer}>
            <Text style={styles.subject}>{assign.subject}</Text>
        </TouchableOpacity>

    </View>
}



export const Gallerys = props => {
    const { onpress, gallery } = props;
    return (
        <View>
            <TouchableOpacity style={[styles.galleryContainer, {}]} onPress={onpress}>
                {gallery.image ?

                    <Image style={styles.galleryImg} resizeMode='stretch' source={gallery.image} /> : <></>

                }

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    activityContainer: {
        // height: dynamicSize(132),
        borderRadius: 10,
        backgroundColor: Color.lightSky,
        width: dynamicSize(163),
        marginBottom: 16,
        paddingVertical: 27,
        paddingHorizontal: 20,

    },
    actTitle: {
        fontFamily: FontFamily.sRegular,
        fontSize: FontSize.font18,
        color: Color.darkBlack,
        lineHeight: 23,
        marginTop: 20,
        // backgroundColor:'green'
    },
    actImg: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        // backgroundColor:'red',
        alignItems: 'center'

    },
    AssignContainer: {
        // height: dynamicSize(186),
        // backgroundColor: Color.red,
        borderWidth: 1,
        borderColor: Color.feesRectBorder,
        borderRadius: 15,
        marginVertical: 16,
        paddingHorizontal: 15
    },
    center: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})