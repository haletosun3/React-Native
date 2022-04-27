import { View, Text, Button} from 'react-native'
import React from 'react'
import GrandChildComp from './GrandChildComp';

const ChildComp  = (props) => {
  return (
    <View>
     <Button title='Click Me!' onPress={() => props.hello()}></Button>
     <Button title='calc!' onPress={() => props.calc(5,6)}></Button>
     <GrandChildComp name={props.name}></GrandChildComp>
    </View>
  )
}

export default ChildComp;