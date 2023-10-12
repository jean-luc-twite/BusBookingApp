import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS,SIZES,SHADOWS} from '../constants/Theme'
import { useNavigation } from '@react-navigation/native';

const BookCard =() => {
  const navigation = useNavigation();
  return (
    <View>
      <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus4.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>JLT'S TRAVELS</Text>
     <Text style ={styles.RouteName}>{'Bus Route islampur To Wakad,Pune A/C buss'}</Text>
     <View style ={styles.icons}>
     {[...Array(5)].map((start, index) => (
            <Ionicons key={index} name="star" size={18} color="gold" style={styles.star} />
          ))}
   
     </View>
     <Text style ={styles.priceName}>$ 650</Text>
     
     <TouchableOpacity onPress={() =>navigation.navigate('SeatSelection')}>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Book Now</Text>
    </View>
      </TouchableOpacity>
    </View>
    <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus4.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>JLT'S TRAVELS</Text>
     <Text style ={styles.RouteName}>Bus Route islampur To Wakad,Pune A/C bus</Text>
     <View style ={styles.icons}>
     {[...Array(5)].map((start, index) => (
            <Ionicons key={index} name="star" size={18} color="gold" style={styles.star} />
          ))}
   
     </View>
     <Text style ={styles.priceName}>$ 850</Text>
     
     <TouchableOpacity onPress ={() => navigation.navigate('SeatSelection')}>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Book Now</Text>
    </View>
      </TouchableOpacity>
    </View>
    <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus4.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>JLT'S TRAVELS</Text>
     <Text style ={styles.RouteName}>Bus Route islampur To Wakad,Pune A/C bus</Text>
     <View style ={styles.icons}>
     {[...Array(5)].map((start, index) => (
            <Ionicons key={index} name="star" size={18} color="gold" style={styles.star} />
          ))}
   
     </View>
     <Text style ={styles.priceName}>$ 750</Text>
     
     <TouchableOpacity onPress ={() => navigation.navigate('SeatSelection')}>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Book Now</Text>
    </View>
      </TouchableOpacity>
      
    </View>
    <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus3.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>JLT'S TRAVELS</Text>
     <Text style ={styles.RouteName}>Bus Route islampur To Wakad,Pune A/C bus</Text>
     <View style ={styles.icons}>
     {[...Array(5)].map((start, index) => (
            <Ionicons key={index} name="star" size={18} color="gold" style={styles.star} />
          ))}
   
     </View>
     <Text style ={styles.priceName}>$ 850</Text>
     
     <TouchableOpacity onPress ={() => navigation.navigate('SeatSelection')}>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Book Now</Text>
    </View>
      </TouchableOpacity>
      
    </View>
    <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus3.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>JLT'S TRAVELS</Text>
     <Text style ={styles.RouteName}>Bus Route islampur To Wakad,Pune A/C bus</Text>
     <View style ={styles.icons}>
     {[...Array(5)].map((start, index) => (
            <Ionicons key={index} name="star" size={18} color="gold" style={styles.star} />
          ))}
   
     </View>
     <Text style ={styles.priceName}>$ 950</Text>
     
     <TouchableOpacity onPress ={() => navigation.navigate('SeatSelection')}>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Book Now</Text>
    </View>
      </TouchableOpacity>
      
    </View>
    <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus5.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>JLT'S TRAVELS</Text>
     <Text style ={styles.RouteName}>{'Bus Route islampur To Wakad,Pune \n Non A/C bus, Sleeper coach'}</Text>
     <View style ={styles.icons}>
     {[...Array(5)].map((start, index) => (
            <Ionicons key={index} name="star" size={18} color="gold" style={styles.star} />
          ))}
   
     </View>
     <Text style ={styles.priceName}>$ 1000</Text>
     
     <TouchableOpacity onPress ={() => navigation.navigate('SeatSelection')}>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Book Now</Text>
    </View>
      </TouchableOpacity>
      
    </View>
    <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus5.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>RD'S TRAVELS</Text>
     <Text style ={styles.RouteName}>{'Bus Route islampur To Wakad,Pune \n Non A/C bus, Sleeper coach'}</Text>
     <View style ={styles.icons}>
     {[...Array(5)].map((start, index) => (
            <Ionicons key={index} name="star" size={18} color="gold" style={styles.star} />
          ))}
   
     </View>
     <Text style ={styles.priceName}>$ 1050</Text>
     
     <TouchableOpacity onPress ={() => navigation.navigate('SeatSelection')}>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Book Now</Text>
    </View>
      </TouchableOpacity>
      
    </View>
    </View>
  )
}

export default BookCard

const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
        width: 350,
        padding: SIZES.xLarge,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
        bottom:80,
       left:15
        
      }),
      logoContainer: (selectedJob, item) => ({
        width: 50,
        height: 50,
        backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      }),
      logoImage:{
         width: "70%",
         height: "70%",
         right:55
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
        bottom:250,
        justifyContent:"space-between",
        left:10

       },
       CompanyName :{
        left:120,
        bottom:80,
        fontSize:24,
        fontWeight:"bold"
        
       },
       RouteName:{
        left:120,
        bottom:78,
        fontSize:9
       },
       priceName:{
        left:80,
        bottom:60,
        fontSize:22,
        fontWeight:'bold',
        color:"#F5A522"
       },
       bookButton :{
        borderRadius:15,
        paddingVertical:8,
        paddingHorizontal:15,
        backgroundColor:'#60A0FF',
        bottom:100,
        width:150,
        left:170
       },
       ButtonText:{
        color:'white',
       fontWeight:'300',
       fontSize:14,
       textAlign:'center',
       fontSize:18,
       },
       icons:{
        bottom:75,
        left:120,
        flexDirection:'row'
        
      },
})