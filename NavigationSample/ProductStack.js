import { View, Text, FlatList , Button , StyleSheet, TouchableOpacity} from 'react-native'
import React , { useState , useEffect, useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SuppliersScreen from './SuppliersScreen';
import SupplierDetailScreen from './SupplierDetailScreen'
import {API_URL} from '../env/config';
import CartContext from '../store/CartContext';
const ProductPageStack = createNativeStackNavigator();

function ProductStack() {
    return (
        <ProductPageStack.Navigator>
            <ProductPageStack.Screen name="Product" component={ProductScreen}  />
        </ProductPageStack.Navigator>
    );
}

    const ProductScreen = () => {
    const [products, setProducts] = useState([]);
    const  { cart , setCart } = useContext(CartContext); //subscribe


    const addToCart = (item) => {
      //eğer ürün varsa 
        var cartItem = cart.find(q => q.id == item.id); 
        
        if(cartItem != undefined){ //cartItem tanımsız degilse varsa obje dönecek
            cartItem.quantity = cartItem.quantity + 1; //ürün varsa 1 ekle
            setCart([...cart]);
        }else{
            let newCartItem = { //ürün yoksa 
                id: item.id,
                quantity:1,
                price:item.unitPrice,
                name:item.name
            }
            setCart([...cart,newCartItem]);
        }
    }

    useEffect( () => {
        fetch(API_URL + "/products")
            .then(res => res.json())
            .then((data) => {
             setProducts(data);
            })

    })

    const renderProduct = ({ item }) => {
        return <View style={styles.view}>
            <Text style={{marginTop:15, fontSize:17 ,color:'#00092C', fontWeight:'600'}}>{item.name}</Text>
            <TouchableOpacity  
            color={'#B20600'}
            onPress={() => addToCart(item)}
            style={styles.button}
            ><Text style={styles.font}>Add To Cart</Text></TouchableOpacity>
        </View>
            
    }
  return (
    <View>
      <FlatList 
       data={products} 
       renderItem={renderProduct}></FlatList>
    </View>
  )
}
 
const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        backgroundColor:'#F3950D',
        padding:10,
        borderRadius: 15,
        paddingVertical: 9,
        paddingHorizontal: 12,
        height:33,
        width:125,
       
    },
    font:{
        color:'#0F2C67',
        fontWeight:'600',
        
    },
    view:{
        backgroundColor:'#DDDDDD',
        flexDirection:'row',
        Content:'space-between',
        justifyContent:'space-between'
    }
})

export default ProductStack
