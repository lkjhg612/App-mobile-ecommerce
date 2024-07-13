import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductsData } from '../data/ProductsData'

const ProductDetails = ({route}) => {
  // console.log(route)
  const [pDetails, setPDetails] = useState({})
  const [qyt, setQty] = useState(1)
  useEffect(() =>{
    //chi tiết sản phẩm theo id 
    const getProduct = ProductsData.find((p) => {
      return p._id === params?._id
    })
    setPDetails(getProduct)
  }, [params?._id])

  //hàm tăng giảm số lượng 
const handleAddQty = () => {
    if(qyt === 10) return alert("you can't add more than 10 quantity")
    setQty((prev) => prev + 1)
}

const handleRemoveQty = () => {
  if(qyt <=1) return
  setQty((prev) => prev - 1)
}
  const {params} = route
  return (
    <View>
      {/* <Text>ProductDetails {params._id}</Text>
      <Text>ProductDetails {JSON.stringify(pDetails, null, 4)}</Text> */}
      <Image source = {pDetails?.image} style = {styles.image}/>
      <View style = {styles.container}>
          <Text style = {styles.title}>{pDetails?.name}</Text>
          <Text style = {styles.title}>Price: {pDetails?.price}</Text>
          <Text style = {styles.desc}>Price: {pDetails?.description}</Text>
          <View style = {styles.btnContainer}>
            <TouchableOpacity style = {styles.btnCart} 
            onPress={() => alert(`${qyt} items added to cart`)}
            disabled = {pDetails.quantity <=0}
            >
              <Text style = {styles.btnCartText} >
                {pDetails.quantity > 0 ? "ADD TO CART " : "OUT OF STOCK"}
              </Text>
            </TouchableOpacity>
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
      </View>
      
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  image:{
    height: 400,
    width: "100%"
  },
  container:{
    marginVertical: 15,
    marginHorizontal: 10
  },
  title:{
    fontSize: 18,
    textAlign:"left"
  },
  desc: {
    fontSize: 12,
    textTransform:"capitalize",
    textAlign:"justify",
    marginVertical: 10
  }, 
  btnContainer :{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart:{
    width: 180,
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 40,
    justifyContent:"center"
  },
  btnCartText: {
    color: 'white',
    fontWeight:"bold",
    textAlign:"center",
    fontSize: 16
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