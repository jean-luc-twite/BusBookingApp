import { ScrollView, StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {SIZES} from '../constants/Theme'
import BookCard from '../component/BookCard'

const BookScreen = () => {
  return (
    <ScrollView>
     <View style ={styles.sub_container}>
     </View>
     <BookCard/>
       
  </ScrollView>
  )
}

export default BookScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 sub_container:{
   
    backgroundColor:'#60A0FF',
    padding:300,
    bottom:80,
    paddingBottom:10,
    right:25,
    borderBottomStartRadius:50,
    borderBottomEndRadius:680

 },
 table: {
  backgroundColor:'white',
  padding:5,
  width:320,
  height:120,
  bottom:0,
  borderRadius:10
 },
//  table2: {
//   backgroundColor:'white',
//   padding:5,
//   width:320,
//   height:120,
//   bottom:295,
//   borderRadius:10
//  },
//  table3: {
//   backgroundColor:'white',
//   padding:5,
//   width:320,
//   height:120,
//   bottom:270,
//   borderRadius:10
//  },
})