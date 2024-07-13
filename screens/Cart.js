import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState}from 'react'
import { CartData } from '../data/CartData'
import PriceTable from '../components/cart/PriceTable'
import CartItem from '../components/cart/CartItem'
import {useNavigation} from "@react-navigation/native"

const Cart = () => {
    const [cartItems, setCardItems] = useState(CartData)
    const navigation = useNavigation()
  return (
    <View>
      <Text style = {styles.heading}>
        {
        cartItems.length > 0
        ?`You have ${cartItems.length} item in your cart`:
        "Your cart is Empty"
        
         }</Text>
         {
            cartItems.length > 0 && (
                <>
                <ScrollView>
                    {cartItems.map((item) => (
                        <CartItem item = {item} key={item._id}/>
                    ))}
                    
                </ScrollView>
                
                {/* <Text>Cart Items</Text> */}
                <View>
                    {/* <Text>Price</Text>
                    <Text>999$</Text> */}
                    <PriceTable title={"Price"} price={999}/>
                    <PriceTable title={"Tax"} price={10}/>
                    <PriceTable title={"Shipping"} price={10}/>
                    <View style = {styles.grandTotal}>
                        <PriceTable title={'Grand Total'} price = {1019}/>
                    </View>
                    <TouchableOpacity style = {styles.btnCheckOut}
                    onPress={() => navigation.navigate("checkout")}

                    >
                       <Text style = {styles.checkOutText}>Checkout</Text>
                    </TouchableOpacity>

                </View>
                
                </>
            )
         }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    heading: {
        textAlign:"center",
        color:"blue",
        marginTop:10,
    },
    grandTotal:{
        borderWidth: 1,
        borderColor:"lightgray",
        backgroundColor:"#ffffff",
        padding: 5,
        margin: 5
    },
    btnCheckOut: {
        marginTop: 20,
        alignItems: "center",
        justifyContent:"center",
        height: 40,
        backgroundColor:"black",
        width: "90%",
        marginHorizontal: 20,
        borderRadius: 20
    },

    checkOutText: {
        color:"white",
        fontWeight:"bold"
    }


})