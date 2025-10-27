import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ProfileViewData = () => {
    const route = useRoute();
    return (
        <View>
            <Text>adhar no:{route.params.adhar}</Text>
            <Text>academic year:{route.params.academic}</Text>
            <Text>adhar no:{route.params.admissionclass}</Text>
            <Text>admissiondate:{route.params.admissiondate}</Text>
            <Text>dob:{route.params.dob}</Text>
            <Text>mail:{route.params.mail}</Text>
            <Text>mothername:{route.params.mothername}</Text>
            <Text>fathername:{route.params.fathername}</Text>
            <Text>address:{route.params.address}</Text> 
        </View>
    )
}

export default ProfileViewData