import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native'

const ProductCart = ({ p }) => {
    const navigation = useNavigation()  

    //detail navigate
    const handleMoreButton = (id) => {
      navigation.navigate("productDetails", {_id: id})
      console.log(id)
    }

    //Add to card navigate
    const handleAddToCart = () => {
      alert("Added to cart")
    }
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={p.image} />
        <Text style={styles.cardTitle}>{p.name}</Text>
        <Text style={styles.cardDes}>
          {p.description.substring(0, 30)}...more
        </Text>
        <View style = {styles.btnContainer}>
          <TouchableOpacity style = {styles.btn}>
            <Text style = {styles.btnTextDetail}
              onPress={() => handleMoreButton(p._id)}
            >Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.btnCart} onPress={handleAddToCart}>
            <Text style = {styles.btnTextCart}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 8,
    width: "100%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  cardImage: {
    height:200,
    width: "100%",
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },

  cardDes: {
    fontSize: 10,
    textAlign: "left",
  },

  btnContainer: {
    marginTop: 5,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  btn:{
    backgroundColor:"black",
    height: 20,
    width: 80,
    borderRadius: 5,
    justifyContent:"center"
  },

  btnCart:{
    backgroundColor:"red",
    height: 20,
    width: 80,
    borderRadius: 5,
    justifyContent:"center"
  },


  btnTextDetail: {
      color:"white",
      textAlign:"center",
      fontSize: 8,
      fontWeight: "bold",
      paddingHorizontal: 10,
  },

  btnTextCart: {
    color:"white",
    textAlign:"center",
    fontSize: 8,
    fontWeight: "bold",
    paddingHorizontal: 10,
}
});
