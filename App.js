import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home.js";
import About from "./screens/About";
import ProductDetails from "./screens/ProductDetails.js";
import Cart from "./screens/Cart.js";
import Checkout from "./screens/Checkout.js";
import Payments from "./screens/Payments.js";
import Login from "./screens/auth/Login.js";
import Register from "./screens/auth/Register.js";
import Account from "./screens/Account/Account.js";

//routes
const Stack = createNativeStackNavigator()

export default function App() {
  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name = 'home' component={Home} options={{
            headerShown: false
          }}
          />
          <Stack.Screen name = 'productDetails' component={ProductDetails} />
          <Stack.Screen name = 'checkout' component={Checkout}/>
          <Stack.Screen  name = 'login' component={Login}
          options={{headerShown: false}}
          />

        <Stack.Screen  name = 'register' component={Register}
          options={{headerShown: false}}
          />
          <Stack.Screen name = 'payment' component={Payments}/>
          <Stack.Screen name = 'account' component={Account}/>
          <Stack.Screen name = 'cart' component={Cart} />
          <Stack.Screen name = 'mobile' component={About} />

        </Stack.Navigator>
       </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
