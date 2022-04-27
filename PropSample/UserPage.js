import { View, Text } from 'react-native'
import React from 'react'
import UserDetail from './UserDetail'
import AdminUserDetail from './AdminUserDetail'
import UserList from './UserList'

const UserPage = () => {
    let admin={
        name:"esin",
        role:"editor"
    }
    let users = [
        'gojira', 'mor ve ötesi' ,'radio head','ramsstein','hepsi 1'
    ]
  return (
    <View> 
        {
            //props olarak her seyi yollayabiliriz
        }
      <UserList users={users }></UserList>
      <AdminUserDetail adminUser={admin}></AdminUserDetail>
      <UserDetail name="hale" surname="tosun" city="antalya"></UserDetail>
    </View>
  )
}

export default UserPage