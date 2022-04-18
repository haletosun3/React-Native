import { View, Text } from 'react-native'
import React from 'react'

const UserDetail = (props) => {
  return (
    <View>
      <Text>UserDetail</Text>
      <Text>{props.name}</Text>
      <Text>{props.surname}</Text>
      <Text>{props.city}</Text>
    </View>
  )
}

export default UserDetail