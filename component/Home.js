import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BottomMenu from "./BottomMenu";

const Home = () => {
  return (
    <View>
      <Text>Home Page</Text>
          <View style={[styles.lineStyle, {marginVertical:20,},]}></View>
            <BottomMenu/>
            <View style={styles.lineStyle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    lineStyle:{
        marginBottom:2,
        borderColor:"#ffffffd9",
        borderWidth:0.7,
        
      },
})


export default Home
