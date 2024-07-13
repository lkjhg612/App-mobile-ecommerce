import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const Checkout = () => {
    const navigation = useNavigation()
    const handleCOD = () => {
        alert ("Your order has been placed successfully")
    }

    const handleOnline = () => {
        alert("Redirecting to payment")
        navigation.navigate("payment")
    }
 
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Payment Options</Text>
      <Text style = {styles.price}>Total: </Text>
      <View style = {styles.paymentCard}>
        <Text style = {styles.paymentHeading}>Select your Payment Mode</Text>
        <TouchableOpacity style = {styles.paymentBtn} onPress = {handleCOD}>
            <Text style = {styles.paymentBthText}>Cash on Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.paymentBtn} onPress={handleOnline}>
            <Text style = { styles.paymentBthText}>Online (CREDIT | DEBIT CARD)</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center",
        height:"90%"
    }, 
    heading: {
        fontSize: 25,
        fontWeight: "500",
        marginVertical: 10
    },
    price: {
        fontSize: 20,
        marginBottom: 10,
        color: "gray"
    },
    paymentCard:{
        backgroundColor:"#ffffff",
        width: "90%",
        borderRadius: 10,
        padding: 30,
        marginVertical: 10
    },
    paymentHeading:{
        color: "gray",
        marginBottom: 10
    },
    paymentBtn:{
        backgroundColor:"#000000",
        height: 40,
        borderRadius: 10,
        justifyContent:"center",
        marginVertical: 10,
    },
    paymentBthText:{
        color: "#ffffff",
        textAlign:"center"
    },

})