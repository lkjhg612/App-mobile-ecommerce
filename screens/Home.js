import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/Banner/Banner";
import Product from "../components/Products/Product";

const Home = () => {
  return (
    <Layout>  
      <View>
        <Product/>
      </View>
    </Layout>
      
    
  );
};

export default Home;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
