import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
const Footer = () => {
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.menuContainer} 
      onPress={() => navigation.navigate("home")}>
        <Image style = {[styles.icon, route.name === "home"]}source = {require('../../assets/home.png')}/>
        <Text style = {[styles.iconText , route.name === "home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.menuContainer}
      onPress={() => navigation.navigate("home")}  
      >
        <Image style = {[styles.icon, route.name === "notification"]}source = {require('../../assets/notification.png')}/>
        <Text style = {[styles.iconText , route.name === "notification" && styles.active]}>
          Notification
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.menuContainer}
      onPress={() => navigation.navigate("account")}>
        <Image style = {[styles.icon, route.name === "account"]}source = {require('../../assets/user.png')}/>
        <Text style = {[styles.iconText , route.name === "account" && styles.active]}>
          Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.menuContainer}
      onPress={() => navigation.navigate("cart")}>
        <Image style = {[styles.icon, route.name === "cart"]}source = {require('../../assets/cart.png')}/>
        <Text style = {[styles.iconText , route.name === "cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.menuContainer}onPress={() => {
        alert("You have already logged out your account"),
        navigation.navigate("login")
        
        }}>

        <Image style = {[styles.icon]}source = {require('../../assets/logout.png')}/>
        <Text style = {[styles.iconText ]}>
          Logout
        </Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  icon:{
    width: 20,
    height: 20
  },
  iconText: {

  },
  menuContainer:{
    alignItems:"center"

  },
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal: 10
  },

  
})