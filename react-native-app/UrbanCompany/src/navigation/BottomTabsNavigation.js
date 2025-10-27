import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Test from '../screen/SalonPage'
import HomePage from '../screen/HomePage'
import OwnPage from '../screen/OwnPage'
import Summary2 from '../screen/Summary'
import Sheet from '../screen/BottomSheet'
import { color, fontFamily, fontSize, lineHeight } from '../constants/Constants'
import Sheeet from '../screen/sheeet'

const TabImg = (props) => {
  const { text, source, height, width, color } = props;
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
      <Image style={styles.tabImage} source={source} height={height} width={width} tintColor={color} />
    </View>
  )
}

const Tab = createBottomTabNavigator();
const MyTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName='Uc'
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: color.medBlack,
        // tabBarInactiveTintColor: color.lightGray,
        tabBarHideOnKeyboard: 'true'
      }}>
      <Tab.Screen name='UC' component={HomePage}
        options={{
          tabBarLabel: 'UC',
          tabBarLabelPosition: 'before-icon',
          tabBarLabelStyle: styles.firstLabel,
          headerShown: false,
          tabBarIcon: ({ color }) => (<TabImg height={20} width={20} color={color} source={require('../assets/images/uc.png')} />)
        }} />
      <Tab.Screen
        name='Booking'
        component={HomePage}
        options={{
          tabBarLabel: 'Booking',
          tabBarLabelStyle: styles.secondlable,
          headerShown: false,
          tabBarIcon: ({ color }) => (<TabImg height={18.5} width={16} color={color} source={require('../assets/images/Boookings.png')} />)
        }} />
      <Tab.Screen
        name='UC Plus'
        component={HomePage}
        options={{
          tabBarLabel: 'UC Plus',
          tabBarLabelStyle: styles.secondlable,
          headerShown: false,
          tabBarIcon: ({ color }) => (<TabImg height={20} width={20} color={color} source={require('../assets/images/Group6.png')} />)
        }} />
      <Tab.Screen
        name='Rewards'
        component={HomePage}
        options={{
          tabBarLabel: 'Rewards',
          tabBarLabelStyle: styles.secondlable,
          headerShown: false,
          tabBarIcon: ({ color }) => (<TabImg height={16} width={12} color={color} source={require('../assets/images/Three.png')} />)
        }} />
      <Tab.Screen
        name='Accounts'
        component={Sheeet}
        options={{
          tabBarLabel: 'Accounts',
          tabBarLabelStyle: styles.secondlable,
          headerShown: false,
          tabBarIcon: ({ color }) => (<TabImg height={20} width={20} color={color} source={require('../assets/images/Group.png')} />)
        }} />
    </Tab.Navigator>
  )
}

export default MyTabs

const styles = StyleSheet.create({
  tabImage: {
    height: 28,
    width: 28
  },
  firstLabel: {
    fontFamily: fontFamily.iSemiB,
    fontSize: fontSize.font16,
    lineHeight: lineHeight.line16
  },
  secondlable:{
    fontFamily: fontFamily.iRegular,
    fontSize: fontSize.font10
  },
  tabBarStyle: {
    height: 64, backgroundColor: 'white'
  }
})