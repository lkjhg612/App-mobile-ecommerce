import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Categories from "../category/Categories";
import { StatusBar } from "expo-status-bar";
import Banner from "../Banner/Banner";
import ProductCart from "../Products/ProductCart";
import Product from "../Products/Product";
const Layout = ({ children }) => {
  console.log(children)
  return (
    <>
      <StatusBar />
      <Header />
      <Categories/>
      <Banner/>
      {/* <Product/> */}
      <Text>{children}</Text>
    
      <View style = {styles.footer}>
        <Footer />
      </View>
      
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  footer:{
    display:"flex",
    width: "100%",
    flex: 1,
    justifyContent:"flex-end",
    zIndex: 100,
    borderWidth: 1,
    borderTopColor: "white",
    position:"absolute",
    bottom: 0,
    padding: 10
  }
});
