import { StyleSheet, Text,View,TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';;


const SeatSelectionScreen = ({navigation}) => {
    const [iconColor, setIconColor] = useState('#EF9A9A'); // Initial color is blue
    // Function to handle the icon click
    const handleIconClick = () => {
      // Toggle the color between blue and another color (e.g., red) when clicked
      const newColor = iconColor === 'blue' ? 'red' : 'blue';
      setIconColor(newColor);
    };
  return (
    <ScrollView contentContainerStyle={{
        alignItems: 'center',    // Example alignItems
        justifyContent: 'center', // Example justifyContent
      }}>
       <View style={styles.sub_container}>
          <Text style ={styles.ChooseSeat}> Choose Your Seat </Text>
          <Text style={styles.Pickup}> Islampur</Text>
          <Text style ={styles.destination}> Wakad,pune </Text>
          <Text style ={styles.date}> 13th -jan -2023 Friday</Text>
       </View>
       <View style ={styles.table}>
        <Text style={styles.departure}>9:AM</Text>
        <Text style={styles.arrival}> - 13PM</Text>
        <Text style ={styles.CompanyName}>JLT'S Travel</Text>
        <Text style ={styles.seatDesc}>A/C bus (2*2)</Text>
        <Text style ={styles.price}>$ 1300</Text>
        <Text style ={styles.hours}>4.30 Hour</Text>
    </View>
    
    <View style ={styles.table2}>
        {/* places  */}
    <Text style ={styles.seatAvailable}>Available</Text>
        <View style ={styles.available}>
            <Text></Text>
         </View>
         <Text style={styles.seatText}>Your Seat</Text>
         <View style ={styles.seat}>
            <Text></Text>
         </View>
         <Text style ={styles.seatBooked}>Booked</Text>
         <View style ={styles.bookeSeat}>
           <Text></Text>
         </View>
     {/* section A 1 */}
         <View style ={styles.sectionA1}>
         <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon}>
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
        <Text  style ={styles.placeNum}>A1</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A3</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A5</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A7</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A9</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A11</Text>
    </View>
    {/* section aA 2 */}
     <View style ={styles.sectionA2}>
     <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A2</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A4</Text>
      <TouchableOpacity onPress={handleIconClick}>
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A6</Text>
      <TouchableOpacity onPress={handleIconClick}>
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A8</Text>
      <TouchableOpacity onPress={handleIconClick}>
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text style ={styles.placeNum}>A10</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>A12</Text>
     </View>
     {/* Section B 1 */}
     <View style ={styles.sectionB1}>
     <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B1</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B3</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B5</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B7</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B9</Text>
      <TouchableOpacity onPress={handleIconClick}>
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B11</Text>
     </View>
     {/* section B2 */}
     <View style ={styles.sectionB2}>
     <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B2</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B4</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B6</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B8</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B10</Text>
      <TouchableOpacity onPress={handleIconClick} style ={styles.chairIcon} >
        <Icon name="chair" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text  style ={styles.placeNum}>B12</Text>
     </View>
    </View>
    <TouchableOpacity  onPress={()=> navigation.navigate('Passengers')}>
    <View style ={styles.button}>
      <Text style={styles.ButtonText}>Next</Text>
    </View>
  </TouchableOpacity>
    </ScrollView>
  )
}

export default SeatSelectionScreen
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
        bottom:45,
        fontSize:15
      },
      price:{
       left:230,
       bottom:50,
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
    width:340,
    height:460,
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
})