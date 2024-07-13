import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React , {useState}from 'react'

const CartItem = ({item}) => {
    console.log(item)
    const [qyt, setQty] = useState(1)
 
  //hàm tăng giảm số lượng 
const handleAddQty = () => {
    if(qyt === 10) return alert("you can't add more than 10 quantity")
    setQty((prev) => prev + 1)
}

const handleRemoveQty = () => {
  if(qyt <=1) return
  setQty((prev) => prev - 1)
}
  return (
    <View style = {styles.container}>
      <Image style = {styles.img} source = {item.image}/>

      <View>
          <Text style = {styles.nameText}>{item.name}</Text>
      </View>

      <View style = {styles.btnContainer}>
            <TouchableOpacity style = {styles.btnQty} onPress={handleRemoveQty}>
              <Text style = {styles.btnQuyText}>-</Text>
            </TouchableOpacity>
            <Text style = {styles.btnQuyText}>{qyt}</Text>
            <TouchableOpacity style = {styles.btnQty} onPress={handleAddQty}>
              <Text style = {styles.btnQuyText}>+</Text>
            </TouchableOpacity>
            </View>
      
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container:{
      margin: 10,
      backgroundColor:"#ffffff",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent:"space-evenly",
      alignItems:"center",
      
  },
  img: {
    width: 50, 
    height: 50
  },

  nameText:{
    fontSize: 12
  },
  btnContainer :{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 20,
    marginHorizontal: 10,
  },

  btnQty:{
    backgroundColor:"gray",
    width: 30,
    alignItems:"center",
    marginHorizontal: 10
  },

  btnQuyText:{
    fontSize: 20,
    fontWeight: "bolđ"
  }

})