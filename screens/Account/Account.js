import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { userData } from '../../data/userData'
const Account = () => {
  return (
    <View style = {styles.container}>
        <Image style = {styles.image} source = {userData.pic}/>
        <View>
        <Text>Hi {userData.name}😊😊</Text>
        </View>
      
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
       alignItems:"center"
    },
    image:{
        height: 106,
        width: 106,
        resizeMode:"contain",
       
    }
})