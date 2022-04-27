import { View, Text,TextInput, StyleSheet, Button } from 'react-native'
import React,{ useState }  from 'react'


const AddProduct = (props) => {

    const [name,setName] = useState('');
    const [unitPrice, setUnitPrice] = useState(''); 
    const [unitStock, setUnitStock] = useState('');

    const addNewProduct = () => {
        let newProduct = {
            name:name,
            unitPrice:unitPrice,
            unitStock:unitStock
        }
        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }

        fetch("https://northwind.vercel.app/api/products", requestOptions)
        .then(res=> res.json())
        .then((data) => {
            props.getProducts();
        })
    }

  return (
    <View style={{flex:1, padding:10}}>

      <TextInput 
      style={styles.input} 
      placeholder='Product Name'
      value={name}
      onChangeText={setName}
      ></TextInput>

      <TextInput style={styles.input}
       placeholder='Unit Price'
       value={unitPrice}
       onChangeText={setUnitPrice}
       ></TextInput>

      <TextInput style={styles.input} 
      placeholder='Unit stock'
      value={unitStock}
      onChangeText={setUnitStock}
      ></TextInput>

      <Button title='Add New Product' onPress={() => addNewProduct()}></Button>

    </View>
  )
}
const styles=StyleSheet.create({
    input:{
        height:30,
        margin:12,
        borderWidth:1,
        padding:10
    }
})
export default AddProduct