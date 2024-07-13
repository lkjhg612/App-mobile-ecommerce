import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";


const Header = () => {
  const [searchText, setSearchText] = useState("")
  const handleSearch = () =>{
    console.log(searchText)
    setSearchText("")
  }
  return (
    <View style={styles.header}>
      <View style = {styles.container}>
        <TextInput style = {styles.inputBox} placeholder="Search" value = {searchText} onChangeText={(text) => setSearchText(text)}/>
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome style = {styles.searchBtn} name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 17
  },
  inputBox :{
    borderWidth: 0.3,
    width: '100%',
    position: "absolute",
    left: 10,
    height: 40,
    color: '#000000',
    backgroundColor:"#ffffff",
    paddingLeft: 18,
    fontSize:16,
    borderRadius: 5,
    
  },

  searchBtn :{
    justifyContent:"space-between",
    left: 345,
    fontSize: 16
  },
  
  header:{
    height: 90,
    backgroundColor: "lightgray"
  }
});
