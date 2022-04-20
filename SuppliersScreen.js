import { View, Text, FlatList, Pressable } from 'react-native'
import React , { useState, useEffect} from 'react'


const SuppliersScreen = ({navigation}) => {

    const [suppliers,setSuppliers] = useState([]);
    

    useEffect(() => {
      
        fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then((data) => {
            
            setSuppliers(data);
        });

    }, [])
    

   const renderSupplier = ({item}) => {
       return <Pressable onPress={() => navigation.navigate("SupplierDetail", {id: item.id})}>
           <Text style={{ fontSize:18, margin: 10}}> {item.companyName} </Text>
       </Pressable>
        
   }

  return (
    <View>
      <FlatList 
      data={suppliers}
      renderItem={renderSupplier}
      >
      
      </FlatList>
    </View>
  )
}

export default SuppliersScreen