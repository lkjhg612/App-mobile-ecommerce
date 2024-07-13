import {
  StyleSheet,
  Text,

  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {useNavigation} from "@react-navigation/native"
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";
//resizeMode react native
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  const handleLogin = () => {
    if(!email || !password){
      return alert("Email and password is empty")
    }
    navigation.navigate("home")
  }
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageicon}
        source={require("../../assets/login3.png")}
      />
      <InputBox placeholder={"Enter your email"} autoComplete={"email"} value={email} setValue={setEmail} />
      <InputBox placeholder={"Enter your password"} secureTextEntry={true} value = {password} setValue={setPassword} />
      <View style = {styles.btnContainer}>
      <TouchableOpacity style = {styles.logicBtn} onPress={handleLogin}>
        <Text style ={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <Text>
        Already have an account? <Text style = {styles.signUpText}onPress={() => navigation.navigate('register')}>Sign up</Text>
      </Text>
      </View>
    </View>
  );
};

export default Login;

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


});
