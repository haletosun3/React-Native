import { View, Text , ActivityIndicator } from 'react-native'
import React , { useState, useEffect }  from 'react'
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';


const SupplierDetailScreen = ({route }) => {

    const { id } =route.params;

    const [supplier, setSupplier] = useState({});
    const [loading , setLoading] = useState(true);
    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers/" + id)
        .then(res => res.json())
        .then((data) => {
            setLoading(false);
            setSupplier(data);
        })

    }, [])

  return (
    <>
     {
       loading == true ? <ActivityIndicator size='large' color='gray'/> : <View>
      <Text> ID : {supplier.id} </Text>
      <Text> Company Name : {supplier.companyName} </Text>
      <Text> Contact Name : {supplier.contactName} </Text>
      <Text> Contact Title : {supplier.contactTitle} </Text>
       </View>
     }
    </>
  )
}

export default SupplierDetailScreen