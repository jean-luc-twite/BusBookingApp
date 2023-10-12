import { StyleSheet, Text, View,Image,Switch,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const SecondScreen = ({navigation}) => {
    const [customer,setIsCustomer] =useState(true);
    const [driver,setIsDriver]  =useState(true);
  
    const toggleSwitch = () => {
      setIsCustomer((previousState) => !previousState);
    };
    const toggleSwitchPtovider = () => {
      setIsDriver((previousState) => !previousState);
    };
  return (
    <View style ={styles.container}>
     <View>
      <Image 
       style={styles.welcome_img}
       resizeMode='contain'
       source={require('../assetsImage/bus_Logo1.png')}/>

       <Text style={styles.Welcome_Text}>Create Account</Text>
       <Text style={styles.SubTitle}>You are just one step away</Text>
      </View>
        <View style={styles.switchContainer}>
    <Text style={styles.switchLabel}>Are you a customer?</Text>
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={customer ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={customer}
    />
    </View>

    <View style={styles.switchContainer}>
    <Text style={styles.switchLabel}>Are you a provider?</Text>
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={driver ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitchPtovider}
      value={driver}
    />
  </View>
  <TouchableOpacity  onPress={()=> navigation.navigate('Main')}>
      <View style ={styles.button}>
        <Text style={styles.ButtonText}>Register</Text>
      </View>
    </TouchableOpacity>

    <Text style ={styles.alreadyHaveAccount}>Already  have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                 <Text style ={styles.link}>Login</Text>
            </TouchableOpacity>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      Welcome_Text:{
        fontFamily:'sans-serif',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:32,
        color:'#000000',
        bottom:20
        
      },
      SubTitle:{
        fontFamily:'sans-serif',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        color:'#A0A0A0',
        bottom:20
      },
      switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        bottom:20,
        display:'flex'
      },
      switchLabel: {
        marginRight: 12,
        fontSize: 16,
        right:50
      },
      button:{
        padding:10,
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#F5A522',
        borderWidth: 1,
        top:10,
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
      link: {
        color: 'red',
        fontSize:24,
        top:35
      },
      alreadyHaveAccount:{
         color:"#000000",
         fontSize:24,
         top:30
      },
      welcome_img: {
       bottom:25
      },
})