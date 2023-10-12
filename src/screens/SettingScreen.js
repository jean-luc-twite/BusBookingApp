import { ScrollView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

const SettingScreen = () => {
  const [firstname,setName] =useState("");
  const [selectedPackage, setSelectedPackage] = useState('wash');
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
  const handleSubmit = () => {
    // Handle form submission here
    console.log('Package:', selectedPackage);
    console.log('Car Type:', selectedCarType);
    console.log('Quantity:', quantity);
    // Add your logic to submit data to your server or perform any other actions
  }; 

  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView 
      showsVerticalScrollInducator ={false}
      contentContainerStyle ={{paddingBottom:29}}>
        <View style = {styles.profileInfo} row aCenter>
          <View style ={styles.image}/>
          <View style ={styles.nameSection}>
           <View style={styles.icons}>
             <Icon name="camera-outline" size={35} color="#000" />
           </View>
            <Text style ={styles.username}>Jean-Luc Twite</Text>
          </View>
        </View>
        <Text style={styles.label}>Name</Text>
        <TextInput style ={styles.input}
           placeholder='Jean-Luc twite' 
           value={firstname} 
           onChangeText={text => setName(text)}
            mode='Text'/>
            <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
            <MatIcon name="edit" size={30} color="grey" />
             </TouchableOpacity>
            <Text style={styles.label}>Phone No</Text>
       <TextInput style ={styles.input}
            placeholder='+27658106607' 
            value={firstname} 
            onChangeText={text => setName(text)}
             mode='Text'/>
             <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
             <MatIcon name="edit" size={30} color="grey" />
             </TouchableOpacity>
             <Text style={styles.label}>Email</Text>
       <TextInput style ={styles.input}
            placeholder='jeanluctwite21@gmail.com' 
            value={firstname} 
            onChangeText={text => setName(text)}
            mode='Text'/>
            <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
            <MatIcon name="edit" size={30} color="grey" />
      </TouchableOpacity>
         <Text style={styles.label}>Gender:</Text>
      <Picker
        style={styles.formIinput}
        selectedValue={selectedPackage}
        onValueChange={(itemValue) => setSelectedPackage(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />

      </Picker>
            <Text style={styles.label}>DOB</Text>
       <TextInput style ={styles.input}
            placeholder='04/06/1998' 
            value={firstname} 
            onChangeText={text => setName(text)}
             mode='Text'/>
             <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
             <Icon name="calendar" size={25} color="grey" />
      </TouchableOpacity>

      <TouchableOpacity>
      <View style ={styles.bookButton}>
      <Text style={styles.ButtonText}>Save</Text>
    </View>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: 'white',
    alignItems:'center',
    marginBottom:20
   },
   profileInfo : {
    marginTop:16,
    paddingHorizontal:29,
   },
   image:{
    width:120,
    height:120,
    left:60,
    borderRadius:60,
    borderColor:'#dddddd',
    borderWidth:1,
    backgroundColor: '#dcdcdc'
   },
   icons:{
     bottom:80,
     left:105
   },
  username:{
      left:65,
      bottom:30,
      fontSize:18,
      color:'#60A0FF'
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    paddingHorizontal: 18,
    width:300,
    height:50,
    bottom:20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    color:'#60A0FF'
  },
  iconContainer: {
    left:260,
    bottom:70
  },
  bookButton:{
    padding:10,
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#F5A522',
    borderWidth: 1,
    bottom:20,
    width:200
  },
  ButtonText: {
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    textSize:16,
    textAlign:'center',
    fontSize:18,

  }

})