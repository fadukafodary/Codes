import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { TabView, SceneMap } from 'react-native-tab-view'
import { useWindowDimensions } from 'react-native'
import Attendance from './Attendance'
import Holiday from './Holiday'
const renderScene = SceneMap({
    first:Attendance,
    first:Holiday,
})

const Tabs = () => {
    const {index, setIndex} =useState(0); 
    const [routes] = useState(
        [
            {key:'first',title:''},
            {key:'second',title:''},
        ]
    )
    
  return (
    <View>
     <TabView
    navigationState={{index, routes}}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{width: layout.width}}
     />
        
    </View>
  )
}

export default Tabs