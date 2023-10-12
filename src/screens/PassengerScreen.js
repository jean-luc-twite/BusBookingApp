import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'

const PassengerScreen = ({navigation}) => {
   const [fullName,setFullName] =useState('')
   const [age,setAge] =useState('');
   const [selectedGender, setSelectedGender] = useState(null);
   const [passengers, setPassengers] = useState([]);
   const [email,setEmail]= useState('');
   const [phoneNo,setPhoneNumber]=useState('')

   const selectMale = () => {
     setSelectedGender("male");
   };
 
   const selectFemale = () => {
     setSelectedGender("female");
   };
   const addPassenger = () => {
    if (fullName && age && selectedGender && phoneNo && email) {
      const newPassenger = {
        fullName,
        age,
        gender: selectedGender,
        phoneNo,
        email,

      };
      setPassengers([...passengers, newPassenger]);
      // Clear input fields
      setFullName('');
      setAge('');
      setSelectedGender(null);
      setPhoneNumber('');
      setEmail('');
    }
  };

  return (
    <View style ={styles.container}>
      <ScrollView>
      <View style ={styles.sub_Container}>
            <Text style={styles.label}>Passenger Details</Text>
           <TextInput style ={styles.input1}
           placeholder='Full Name' 
           value={fullName} 
           onChangeText={text => setFullName(text)}
            mode='Text'/>

        
        <TextInput style ={styles.input2}
           placeholder='Age' 
           value={age} 
           onChangeText={text => setAge(text)}
            mode='Text'/>
           
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText1}>Male</Text>
        <TouchableOpacity
          style={[
            styles.circleButton1,
            selectedGender === "male" && styles.selectedButton,
          ]}
          onPress={selectMale}
        >
        </TouchableOpacity>

        <Text style={styles.buttonTe2}>Female</Text>
        <TouchableOpacity
          style={[
            styles.circleButton2,
            selectedGender === "female" && styles.selectedButton,
          ]}
          onPress={selectFemale}
        >
          
        </TouchableOpacity>

      
      </View>
      <TextInput style ={styles.input1}
            placeholder='Enter Phone Number' 
            value={phoneNo} 
            onChangeText={text => setPhoneNumber(text)}
             mode='Text'/>
             
       <TextInput style ={styles.input1}
            placeholder='Enter Email Id' 
            value={email} 
            onChangeText={text => setEmail(text)}
            mode='Text'/>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Payment')} >
          <Text style={styles.addButtonText}>Proceed Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProceedButton} onPress={addPassenger}>
          <Text style={styles.ProceedButtonText}>Add Passenger</Text>
        </TouchableOpacity>
        <Text style={styles.label2}>Passenger List:</Text>
        {passengers.map((passenger, index) => (
          <View key={index} style={styles.passengerListItem}>
            <Text>Passenger {index + 1}:</Text>
            <Text>Full Name: {passenger.fullName}</Text>
            <Text>Age: {passenger.age}</Text>
            <Text>Gender: {passenger.gender}</Text>
            <Text>Phone Number: {passenger.phoneNo}</Text>
            <Text>email: {passenger.email}</Text>
          </View>
        ))}
    </View>
    </ScrollView>
      </View>
    
  )
}

export default PassengerScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      sub_Container:{
        backgroundColor:"#FFFFFF",
        padding:80,
        right:0,
        width:350,
        marginBottom:80
      },
      input1:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 18,
        width:300,
        height:50,
        bottom:20,
        backgroundColor:"#F5F5F5",
        right:65
      },
      input2:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 18,
        width:180,
        height:50,
        bottom:20,
        backgroundColor:"#F5F5F5",
        right:65
      },
      input3:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 18,
        width:300,
        height:50,
        bottom:20,
        backgroundColor:"#F5F5F5",
        right:225
      },
      input4:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 18,
        width:300,
        height:50,
        top:40,
        backgroundColor:"#F5F5F5",
        right:525
      },
      PassengerDetails:{
          right:50,
          fontSize:16,
          bottom:50
          
      },
      buttonContainer: {
        flexDirection: "row",
      },
      circleButton1: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        left:85,
        bottom:70
      },
      circleButton2: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        left:70,
        bottom:70
      },
      selectedButton: {
        backgroundColor: "blue", // Change the color for the selected button
      },
      buttonText1: {
        fontSize: 14,
        left:150,
        bottom:70,
        fontWeight:'500'
       
      },
      buttonTe2: {
        fontSize: 14,
        left:150,
        bottom:70,
        fontWeight:'500'
        
      },
      selectedText1: {
        fontSize: 14,
       
      
      },
      buttonText2:{
        fontSize:14
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 30,
        color:'black',
        textAlign:'center'
      },
      addButton: {
        backgroundColor:'#60A0FF',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 70,
      },
      ProceedButton: {
        borderColor:'#60A0FF',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 45,
        borderWidth:5,
      
        
      },
      addButtonText: {
        color: 'white',
        fontSize: 16,
      },
      ProceedButtonText:{
        color: '#60A0FF',
        fontSize: 16,
        fontWeight:'bold'
      },
      label2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#60A0FF',
        right: 60,
      },
      passengerListItem: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
      },
})