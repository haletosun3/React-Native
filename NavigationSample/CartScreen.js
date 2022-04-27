import { StyleSheet, View, Button} from 'react-native'
import React,  { useContext } from 'react'
import cartContext from '../store/CartContext'
import { Text} from 'react-native-paper'



const CartScreen = () => {

 const { cart, setCart}  = useContext(cartContext);
  
 const emptyCart = () => {
   setCart([]);
 }

  return (
    <View>
       {
           cart.map((item,key) => {
           return <>
           <Text key={key} style={[styles.border, styles.cart]}> 
           {item.name} - {item.quantity} * {item.price.toFixed(2)} 
           = {(item.quantity * item.price).toFixed(2)}</Text>
           <Button title='delete'></Button>
           </> 
         })  
         
        }
       {
         cart.length > 0  ? (<Button title='Empty Cart' onPress={() => emptyCart()}></Button>) 
         : <><Text style={[styles.cart]} >Cart is Empty!!!!!</Text></>
       }
    </View>
  ) 
}

const styles = StyleSheet.create({
  cart:{
    alignItems:'center',
    color:'#0F2C67',
    fontWeight:'600',
    fontSize:20
  },
  border:{
    padding:20,
    borderRadius:18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom:15,
    borderBottomColor:'black',
    borderBottomWidth:10,
    borderWidth:5,
    borderColor:'#F3954D',
  }
})

export default CartScreen