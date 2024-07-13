import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCart from './ProductCart'
import {ProductsData} from '../../data/ProductsData'

const Product = () => {
  return (
    <View>
      {ProductsData.map((p) => (
        <ProductCart key={p._id} p = {p}/>
      ))}
      
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})