import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState }  from 'react'
import {useNavigation} from "@react-navigation/native"
import InputBox from '../../components/Form/InputBox'
const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")    
  const [city, setCity] = useState("")      
  const [contact, setContact] = useState("") 
     
  const handleRegister = () => {
    if(!email || !password || !name || !address || !city || !contact){
      return alert("Information is empty")
    }
    alert("Register Successfully please login")
    navigation.navigate("login")
  }
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageicon}
        source={require("../../assets/login3.png")}
      />
     
      <InputBox placeholder={"Enter your email"} autoComplete={"email"} value={email} setValue={setEmail} />
      <InputBox placeholder={"Enter your password"} secureTextEntry={true} value = {password} setValue={setPassword} />
      <InputBox placeholder={"Enter your name"}  value={name} setValue={setName} />
      <InputBox placeholder={"Enter your address"}  value={address} setValue={setAddress} autoComplete={"address-line1"}/>
      <InputBox placeholder={"Enter your city"}  value={city} setValue={setCity} autoComplete={'country'} />
      <InputBox placeholder={"Enter your Contact"}  value={contact} setValue={setContact} autoComplete={"tell"}/>
      <View style = {styles.btnContainer}>
      <TouchableOpacity style = {styles.logicBtn} onPress={handleRegister}>
        <Text style ={styles.loginBtnText}>Register</Text>
      </TouchableOpacity>
      {/* <Text>
        Already have an account? <Text style = {styles.signUpText}onPress={() => navigation.navigate('register')}>Sign up</Text>
      </Text> */}
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    // alignItems:"center",
    justifyContent: "center",
    height: 500,
  },
  imageicon: {
    height: 200,
    width: 200,
    marginLeft: 100,
    marginTop: 300
  },
  logicBtn:{
    backgroundColor:"#000000",
    width:"80%",
    justifyContent:"center",
    height: 40,
    borderRadius: 10,
    alignItems:"center",
    marginHorizontal: 20,
    marginVertical: 20
  },
  loginBtnText:{
    color:"#ffffff",
    textAlign: "center",
    textTransform:"uppercase",
    fontWeight:"500",
    fontSize: 18
  },

  btnContainer: {
    justifyContent:"center",
    alignItems:"center"
  },
  
  signUpText:{
    textDecorationLine: "underline",
    color:"red"
  }
})