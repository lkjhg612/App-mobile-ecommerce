import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { CategoriesData } from "../../data/Categories";
import {useNavigation} from "@react-navigation/native"

const Categories = () => {
  const navigation = useNavigation()
  return (
    <ScrollView horizontal =  {true} showsHorizontalScrollIndicator = {false} style = {{flexGrow: 0}}>
      <View style={styles.headericon}>
        {CategoriesData?.map((item) => (
          <View key={item._id}>
            <TouchableOpacity style={styles.imagename}
            onPress = {() => navigation.navigate(item.path)}
            >
              {/* <FontAwesome>
              {item.icon}
            </FontAwesome> */}

              <Image style={styles.icon} source={item.iconName} />
              <Text style={styles.namedevice}>{item.name} </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },

  headericon: {
    flexDirection: "row",
    backgroundColor: "white",
  },

  imagename: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  namedevice: {
    textAlign: "center",
    fontSize: 15,
  },

  containers: {},
});
