import React, { createContext, useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, AsyncStorage, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Home from "./Home";
 import { AuthContext } from "../App";



const auth = { authEmail: "sunita@123", authPassword: "123" }

 const contextType = AuthContext

export const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
      console.log(contextType);

    }, []
    )



    return (
        <>

            <AuthContext.Consumer  {(email,password) => {

                console.log(Context.Consumer.value);
                return

                <View style={styles.main_container}>

                    <View style={styles.inner_container} >

                        <View>
                            <Text style={styles.signin} >Sign In</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, }}>Enter Your Email</Text>
                            {/* <TextInput style={styles.input_field} onChangeText={(ele)=>{console.log(ele)}} /> */}
                            <TextInput
                                style={styles.input_field}
                                placeholder="Enter Email"
                                onChangeText={newText => { setEmail(newText); console.log(newText); }}
                                defaultValue={email}
                            />



                            <Text style={{ fontSize: 15, marginTop: 10, }}>Enter Your Password</Text>
                            {/* <TextInput style={styles.input_field} secureTextEntery={true} /> */}
                            <TextInput
                                style={styles.input_field}
                                placeholder="Password"
                                secureTextEntery={true}
                                onChangeText={newText => { setPassword(newText); console.log(newText); }}
                                defaultValue={password}
                            />

                            <TouchableOpacity>
                                <Text style={styles.forget}>Forgot Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ () => {
                                 navigation.navigate("home") 
                                console.log({ email, password });
                                if (email.toLowerCase() == auth.authEmail && password == auth.authPassword) {
                                    // const authValues = { email: email.toLowerCase(), password }
                                    // await AsyncStorage.setItem('AllProducts', authValues)

                                    navigation.navigate("home")
                                } else {
                                    alert('Authentication not match')
                                }

                            }}>
                                <Text style={styles.login_tx}> Login</Text>
                            </TouchableOpacity>


                        </View>

                    </View>

                </View>



            }}>








            </AuthContext.Consumer>
        </>

    )
}

const styles = StyleSheet.create({

    welconeContainer: {
        width: wp('100%'),
        height: wp('50%'),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 42,
        fontWeight: "bold",
    },
    welcomeParagraph: {
        fontSize: 15,
        fontWeight: "500",
    },

    login_tx: {
        backgroundColor: "#e35827",
        textAlign: "center",
        color: "white",
        borderRadius: 60,
        paddingBottom: 8,
        paddingTop: 8,
    },

    main_container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

    bg_image: {
        flex: 1,
        resizeMode: "cover",
        height: wp('100%'),
    },

    inner_container: {
        width: wp('70%'),
        backgroundColor: "#ffffffd9",
        padding: 50,
        // borderRadius: 20,

        borderTopRightRadius: 100,
        overflow: "hidden",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        //shadowRadius: 6,
        elevation: 3,

    },


    signin: {
        //position:"relative",
        //zIndex:2,
        alignItems: 'center',
        fontSize: 30,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "700",
    },

    input_field: {
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 1,
        fontFamily: "regular",
        fontSize: 16,
        marginTop: 5,
        borderRadius: 3,
    },

    forget: {
        alignItems: 'center',
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
    },

    triangle: {

        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
    },

    menuStyle: {

    },

    lineStyle: {
        marginBottom: 20,
        borderColor: "#ffffffd9",
        borderWidth: 0.5,

    },



});



export default Login