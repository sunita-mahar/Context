import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const BottomMenu = () => {
 
    //const Tab = createBottomTabNavigator();

    const navigation = useNavigation()

  return (
    <View style={styles.bottomMenuContainer}>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("home")}>
            <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("toDoList")}>
            <Text>ToDoList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("cart")}>
            <Text>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("userProfile")}>
            <Text>User Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("category")}>
            <Text>Category</Text>
        </TouchableOpacity>


    </View>




  )
}


const styles = StyleSheet.create({

    bottomMenuContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    },

    bottomButtonStyle:{
        textTransform:'uppercase',
        marginBottom:23,
        //backgroundColor:"blue",
        padding:10,
        
    }



})


export default BottomMenu

    