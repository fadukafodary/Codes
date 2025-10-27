import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import HomePage from '../screen/HomePage';
import TestPage from '../screen/MapView';
import MyTabs from './BottomTabsNavigation';
import SalonPage from '../screen/SalonPage';
import OwnPage from '../screen/OwnPage';
import MapView1 from '../screen/MapView';
import Summary from '../screen/Summary';
import Sheet from '../screen/BottomSheet';
import Check from '../screen/Check';
const Stack = createStackNavigator();

const MainNavigation = () => {
  const screens = [
    { name: 'tab', comp: MyTabs},
    { name: 'Home', comp: HomePage },
    { name: 'Salon Classic', comp: SalonPage },
    { name: 'MakeYourOwnPackage', comp: OwnPage },
    { name: 'Map', comp: MapView1 },
    { name: 'Summary', comp: Summary },
    { name: 'BottomSheet', comp: Sheet },
    { name: 'Check', comp: Check },
    {name:'sheet', comp:Sheet}
  ]
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          screens.map((screen, index) => {
            return (
              <Stack.Screen
                key={index}
                name={`${screen.name}`}
                component={screen.comp}
                options={{headerShown: false}}/>
            )
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation


{/* <Stack.Screen name='tab' component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Salon Classic" component={SalonPage}  options={{
          headerTitleStyle:{fontFamily:'Axiforma-ExtraBold',
          lineHeight:24,
          color:'#242424',
          fontSize:16 }}}/>
        <Stack.Screen name="Make Your Own Package" component={OwnPage} options={{
          headerTitleStyle:{fontFamily:'Axiforma-ExtraBold',
          lineHeight:24,
          color:'#242424',
          fontSize:16
          }}}/>
          <Stack.Screen  name="Map" component={MapView1}/>
          <Stack.Screen name="Summary" component={Summary}/>
          <Stack.Screen name='BottomSheet' component={Sheet}/> 
          <Stack.Screen name="Check" component={Check}/>
   */}