import { View, Text } from 'react-native'
import React from 'react'

const UserList = (props) => {
  return (
    <View>
     {
         props.users.map((item,key) => {
              return  <Text key={key}> {item}</Text>
         })
     }
    </View>
  )
}

export default UserList