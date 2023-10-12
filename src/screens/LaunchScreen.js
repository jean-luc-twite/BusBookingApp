import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import FlatButton from '../component/FlatButton'

const LaunchScreen = ({navigation}) => {
  return (
    <View style={styles.containerMain}>
    <View>
        <Text style={styles.Welcome_Text}>Welcome to JLT Express</Text>
   <Image 
   style={styles.welcome_img}
   resizeMode='contain'
   source={require('../assetsImage/bus_2.png')}/>

      <Text style ={styles.Welcome_Text2}>Quick & Easy 
       to Travel anywhere & 
        anytime</Text>
        
    </View>
    
    <FlatButton text='Get Started' onPress={()=> navigation.navigate('Register')}/>

</View>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({
    containerMain: {
        backgroundColor:'#60A0FF',
         flex:1,
         justifyContent: 'center',
         alignItems: 'center',
         
       },
       welcome_img: {
         width: 350,
         height: 300,
         marginTop:120,
         alignItems:'center'
       },
       Welcome_Text:{
         fontFamily:'sans-serif',
         textAlign:'center',
         fontWeight:'bold',
         fontSize:30,
         color:'#000000'
         
       },
 
       Welcome_Text2:{
        marginBottom:300,
        fontFamily:'sans-serif',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
        color:'#FFFFFF'
       },
 
     get_Started: {
         Color:'#FFFFFF',
         alignItems:'center',
         padding:10,
         fontSize:18,
         fontWeight:'bold',
         borderRadius:5
     }
})