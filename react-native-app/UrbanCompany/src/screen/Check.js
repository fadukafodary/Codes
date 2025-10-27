import React, {useState} from 'react';
import { Alert } from 'react-native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Greeting = (props) => {
const {color,onpress, text}=props;
    return (
      <View style={{alignItems: 'center'}}>
       <TouchableOpacity>
        { 
        <Text style={{color:props.Color}} onPress={props.onPress}>Hello {props.name}!</Text>
         }
        </TouchableOpacity>
      </View>
    );
}

const LotsOfGreetings = () => {
  const [text,setText] = useState(true);
 const textFunction = ()=>{
  text(!setText);
 }
    return (
        <View style={{alignItems: 'center', top: 50}}>
          <Greeting Color='blue' name='Rexxar' onPress={textFunction}/>
          <Greeting Color='red' name='Jaina' />
          <Greeting Color='green' name='Valeera' />
        </View>
    )
}
export default LotsOfGreetings;