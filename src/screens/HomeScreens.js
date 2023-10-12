import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreens = ({navigation}) => {
    const [pickUp,setPickUp]=useState("");
    const [destination,setDestination] =useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  return (
    <ScrollView contentContainerStyle={{
        alignItems: 'center',    // Example alignItems
        justifyContent: 'center', // Example justifyContent
      }}>
    <View style={styles.sub_container}> 
    <Text style ={styles.Welcome_Text}>Hey John</Text>
    <Text style ={styles.SubTitle}>Where you want go.</Text>
    <Image 
     style={styles.welcome_img}
     resizeMode='contain'
     source={require('../assetsImage/icons8-bus.png')}/>
    </View>
    <View style ={styles.wrapper}>
    <TextInput style ={styles.input}
      placeholder='Boarding From' 
      value={pickUp} 
      onChangeText={text => setPickUp(text)}
      keyboardType='pick Up'/>
      <TextInput style ={styles.input}
      placeholder='Where Are You Going  ?' 
      value={destination} 
      onChangeText={text => setDestination(text)} 
      secureTextEntry
      keyboardType='Destination'/>

     <TextInput style ={styles.input}
      placeholder='DD/MM/YYYY' 
      value={destination} 
      onChangeText={text => setDestination(text)} 
      secureTextEntry
      keyboardType='Destination'/>
        <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
        <Icon name="calendar" size={25} color="#000" />
      </TouchableOpacity>
      
  <TouchableOpacity>
    <View style ={styles.button}>
      <Text style={styles.ButtonText1}>Find Bus</Text>
    </View>
  </TouchableOpacity>
    </View>
   
    <View style ={styles.table}>
    <Image
           resizeMode='contain'
           source={require('../assetsImage/bus3.jpg')}
           style ={styles.logoImage}

        />

     <Text style ={styles.CompanyName}>RD'S TRAVELS</Text>
     <Text style ={styles.RouteName}>{'Bus Route islampur To Wakad,Pune'}</Text>
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
  </ScrollView>
  )
}

export default HomeScreens

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
      padding:125,
      top:80,
      paddingBottom:2
    
     },
     wrapper:{
        backgroundColor:'#F5A522',
        padding:18,
        paddingBottom:10,
        paddingTop:52,
        bottom:20,
        borderRadius:15
     },
     welcome_img: {
      bottom:90
     },
     welcome_img2:{
        height:60,
        right:380,
        top:45

     },
     Welcome_Text:{
      fontFamily:'sans-serif',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:24,
      color:'#000000',
      bottom:80
      
    },
    SubTitle:{
      fontFamily:'sans-serif',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:12,
      color:'#A0A0A0',
      bottom:80
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 18,
        width:300,
        height:50,
        bottom:20,
        backgroundColor:"#FFFFFF"
    },
    button1:{
        padding:10,
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'#F5A522',
        borderWidth: 1,
        bottom:20,
        width:100,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
    button:{
      padding:10,
      borderRadius:10,
      paddingVertical:10,
      paddingHorizontal:15,
      backgroundColor:'#60A0FF',
      borderWidth: 1,
      bottom:20,
      width:290,
      height:45,
      flexDirection:'row',
      justifyContent:'space-between',
      left:3,
      
      alignItems:'center'
    },
    ButtonText :{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    textSize:16,
    textAlign:'center',
    fontSize:18,
    },
    ButtonText1:{
       textAlign:'center',
       fontSize:20,
       left:90,
       color:'white'
    },
    button0:{
      padding:10,
      borderRadius:8,
      paddingVertical:10,
      paddingHorizontal:10,
      backgroundColor:'#F5A522',
      borderWidth: 1,
      bottom:20,
      width:100,
      flexDirection:'row',
      justifyContent:'space-between',
      right:10
    },
    
    bottomText:{
      color:'black',
       textAlign:'left',
       right:98,
       bottom:120,
       fontWeight:'bold',
       fontSize:18
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
      bottom:5,
      justifyContent:"space-between",
      

     },
     logoImage:{
      width: "70%",
      height: "70%",
      right:55
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
   
    iconContainer: {
        position: 'absolute',
        right: 30,
        top: 170,
      },
    

})