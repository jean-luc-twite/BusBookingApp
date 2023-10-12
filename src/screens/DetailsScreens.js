import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const DetailsScreens = () => {
  return (
    <View style ={styles.container}>
      
      <View style={styles.sub_container}> 
      <TouchableOpacity>
      <View style ={styles.bookedButton}>
      <Text style={styles.ButtonBookedText}>Complited</Text>
    </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style ={styles.bookedButton2}>
      <Text style={styles.ButtonBookedText2}>Booked</Text>
    </View>
      </TouchableOpacity>
    </View>
      
      <View style ={styles.table}>
    <Image 
      style={styles.welcome_img2}
      resizeMode='contain'
      source={require('../assetsImage/bus4.jpg')}/>

     <Text style ={styles.detailsText1}>JLT'S TRAVELS</Text>
     <Text style ={styles.detailsText2}>13th - Jan - 2023 Friday</Text>
     <Text style ={styles.detailsText3}>2 Seat, Seat No,B5,B6</Text>
     <Text style ={styles.price}>$1300</Text>
     
     <TouchableOpacity>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>View</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style ={styles.bookButton2}>
      <Text style={styles.ButtonText}>Cancel</Text>
    </View>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default DetailsScreens

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub_container:{
    resizeMode:'cover',
  backgroundColor:'#60A0FF',
  width:360,
  height:250,
  bottom:100,
  paddingBottom:10,
  borderBottomEndRadius: 15,
  borderBottomStartRadius: 15

 },
 welcome_img2:{
  height:60,
  right:105,
  top:20

},
 table: {
  backgroundColor:'white',
  padding:5,
  width:320,
  bottom:180,
  borderRadius:10
 },
 bookedButton:{
  backgroundColor:'#FFFFFF',
  borderRadius:10,
  paddingVertical:8,
  paddingHorizontal:10,
  borderWidth: 1,
  bottom:10,
  width:140,
  left:185,
  top:77,
  height:40
 },
 
 bookedButton2:{
  borderRadius:10,
  paddingVertical:8,
  paddingHorizontal:10,
  backgroundColor:'#F5A522',
  borderWidth: 1,
  bottom:10,
  width:140,
  left:25,
  top:38,
  height:40
 },
 ButtonBookedText:{
  color:'#60A0FF',
  alignItems:'center',
  left:25,
  fontSize:14
 },
 bookButton:{
  borderRadius:15,
  paddingVertical:8,
  paddingHorizontal:10,
  backgroundColor:'#60A0FF',
  borderWidth: 1,
  bottom:10,
  width:95,
  left:215
},
bookButton2:{
  borderRadius:15,
  paddingVertical:8,
  paddingHorizontal:10,
  backgroundColor:'#F5A522',
  borderWidth: 1,
  bottom:53,
  width:95,
  left:115
  
},
detailsText1 :{
  bottom:50,
  color:'#60A0FF',
  left:115,
  fontWeight:'bold',
  fontSize:24
},

detailsText2:{
  bottom:48,
  left:115,
  color:'#F5A522',
},
detailsText3:{
  bottom:48,
  left:115,
  color:'#60A0FF',
},
TextRated:{
  color:"#60A0FF",
  fontWeight:"bold",
  fontSize:22,
  left:30

},
price :{
  fontSize:20,
  left:250,
  color:'#F5A522',
  bottom:35
},
 ButtonBookedText2:{
  color:"white",
  alignItems:'center',
  left:25,
  fontSize:14
 },
 ButtonText :{
  color:'white',
  fontWeight:'300',
  fontSize:14,
  textAlign:'center',
  fontSize:18,
  },
})