import { View, Text } from 'react-native'
import React from 'react'
import ChildComp from './ChildComp';

const ParentComp = (props) => {
    let hello = () =>{
        alert("merhaba canım");
    }
    let calc = (x,y) =>{
        let z = x + y;
        alert("sonuc" + z);
    }
  return (
    <View>
        <ChildComp  name={props.name} hello={hello} calc={calc}></ChildComp>
    </View>
  )
}

export default ParentComp