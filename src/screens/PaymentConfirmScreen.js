import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

const PaymentConfirmScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{
        alignItems: 'center',    // Example alignItems
        justifyContent: 'center', // Example justifyContent
      }}>
       <View style={styles.sub_container}>
          <Text style ={styles.ChooseSeat}> Your Booking </Text>
          <Text style={styles.Pickup}> Islampur</Text>
          <Text style ={styles.destination}> Wakad,pune </Text>
          <Text style ={styles.date}> 13th -jan -2023 Friday</Text>
       </View>
       <View style ={styles.table}>
        <Text style={styles.departure}>9:AM</Text>
        <Text style={styles.arrival}> - 13PM</Text>
        <Text style ={styles.CompanyName}>JLT'S Travel</Text>
        <Text style ={styles.seatDesc}>A/C bus (2*2)</Text>
        <Text style ={styles.paidText}>Paid</Text>
        <Text style ={styles.price}>$ 1300</Text>
        <Text style ={styles.hours}>4.30 Hour</Text>
    </View>

    <Text style ={styles.detailsText}>Your Seat No.B5,B6</Text>
    <View style ={styles.table2}>

    <Text style={styles.startTime}>Start: Islampur (9:00 AM)</Text>
  <Text style={styles.breakTime}>Break: Karad (10:00 AM), Satara (12:00 PM)</Text>
  <Text style={styles.arrivalTime}>Destination: Wakad, Pune (2:30 PM)</Text>
    </View>
    <TouchableOpacity style={styles.ProceedButton} onPress={() => navigation.navigate('Reason_cancel')} >
          <Text style={styles.ProceedButtonText}>Done</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default PaymentConfirmScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      sub_container:{
        backgroundColor:'#60A0FF',
         padding:80,
        right:0,
        width:380,
    
     },
     ChooseSeat:{
      textAlign:'center',
      color:'#FFFFFF',
      fontSize: 18,
      marginBottom:50
     
     },
     paidText:{
        left:230,
        bottom:68,
        color:"#F5A522",
        fontWeight:'bold',
        fontSize:22
     },
     Pickup:{
        textAlign:'center',
         color:'#FFFFFF',
      fontSize: 24,
      fontWeight:"bold",
      right:95

    
     },
     destination:{
       textAlign:'center',
     color:'#FFFFFF',
      fontSize: 24,
       fontWeight:"bold",
       left:88,
       bottom:30
     },
     date:{
        textAlign:'center',
      color:'#FFFFFF',
      fontSize: 18
      },
      table: {
        backgroundColor:'white',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        padding:15,
        width:340,
        height:120,
        bottom:60,
        justifyContent:"space-between",
        

       },
       detailsText:{
          bottom:65,
          fontSize:20,
          fontWeight:'500',
          color:'#60A0FF'
       },
       departure:{
       
      },
      arrival:{
        left:35,
        bottom:20,
        color:'#616161'
      },
      CompanyName:{
       bottom: 10,
       fontSize:18,
       color:'#585656',
       fontWeight:'700'
      },
      seatDesc:{
       color:'#A0A0A0',
       fontSize:15,
      },
      hours:{
        left:235,
        color:"#A0A0A0",
        bottom:64,
        fontSize:15
      },
      price:{
       left:230,
       bottom:65,
       color:"#F5A522",
       fontWeight:'bold',
       fontSize:22
      },
   table2:{
    backgroundColor:'white',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    padding:15,
    width:320,
    height:300,
    bottom:50,
    justifyContent:"space-between",
   },
   available:{
    backgroundColor:'#EF9A9A',
    width:30,
    bottom:12,
    padding:5,
    borderRadius:10
   },
   seat:{
    backgroundColor:'#60A0FF',
    width:30,
    left:112,
    bottom:62,
    padding:5,
    borderRadius:10

   },
   bookeSeat:{
    backgroundColor:'#DAD9DB',
    width:30,
    left:222,
    bottom:115,
    padding:5,
    borderRadius:10
    
   },
   seatAvailable:{
    left:40,
   fontSize:16,
   top:14,
   color:'#EF9A9A',
   fontWeight:'bold'
   },
   seatText:{
    left:148,
    bottom:38,
    fontSize:16,
    color:'#60A0FF',
   fontWeight:'bold'
   
   },
   seatBooked:{
    left:260,
    bottom:90,
    fontSize:16,
    color:'#DAD9DB',
   fontWeight:'bold'
   },
   sectionA1:{
     bottom:65
   },
   sectionA2:{
    left:50,
    bottom:380

   },
   sectionB1:{
    bottom:689,
    left:195
   },
   ProceedButtonText:{
      fontWeight:'bold',
      fontSize:22
   },
   sectionB2:{
    bottom:1005,
    left:260
   },
   chairIcon:{

   },
   placeNum:{
    fontSize:15,
    fontWeight:"700",
    
   },
   button:{
    padding:10,
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#F5A522',
    borderWidth: 1,
    bottom:30,
    width:200
  },
  ButtonText: {
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    textSize:16,
    textAlign:'center',
    fontSize:18,

  },
  startTime: {
    fontSize: 16,
    color: '#60A0FF',
    marginBottom: 5, // Adjust spacing from the element below
  },
  breakTime: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 5, // Adjust spacing from the element below
  },
  arrivalTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#60A0FF',
  },
  ProceedButton: {
    borderColor:'#60A0FF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 45,
    borderWidth:5,
    bottom:25,
    width:250
  
    
  },
  
})