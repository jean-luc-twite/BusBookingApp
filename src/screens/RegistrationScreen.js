import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const RegistrationScreen = ({navigation}) => {
    const [firstname,setName] =useState("");
  const [lastname,setLastName] =useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [customer,setIsCustomer] =useState(true);
  const [driver,setIsProviderriver]  =useState(true);

  const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };
  
  const getStrengthText = () => {
    if (!password) 
    return 'Enter a strong password';
    return isStrongPassword(password)
      ? 'Strong password'
      : 'Weak password. Make it stronger.';
  };
  
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };
  
  const handleCheckBoxChange = (e) => {
    setIsCustomer(e.target.checked);
  };
  const handleCheckBoxDriverChange = (e) => {
    setIsProviderriver(e.target.checked);
  };
  
  const toggleSwitch = () => {
    setIsCustomer((previousState) => !previousState);
  };
  const toggleSwitchPtovider = () => {
    setIsProviderriver((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
    <View>
    <Image 
     style={styles.welcome_img}
     resizeMode='contain'
     source={require('../assetsImage/bus_Logo1.png')}/>

     <Text style={styles.Welcome_Text}>Create Account</Text>
     <Text style={styles.SubTitle}>You are just one step away</Text>
    </View>
    <TextInput style ={styles.input}
      placeholder='enter first name' 
      value={firstname} 
      onChangeText={text => setName(text)}
      mode='Text'/>

    <TextInput style ={styles.input}
      placeholder='enter lastname' 
      value={lastname} 
      onChangeText={text => setLastName(text)}
      mode='Text'/>

      <TextInput style ={styles.input}
      placeholder='enter email' 
      value={email} 
      onChangeText={text => setEmail(text)}
      keyboardType='email'/>
  
      {/* <Text style={styles.strengthText}>{getStrengthText()}</Text> */}
      <TextInput style ={styles.input}
      placeholder='password' 
      value={password} 
      onChangeText={text => setPassword(text)} 
      secureTextEntry
      keyboardType='password'/>

      <TextInput
      style={styles.input}
      secureTextEntry
      placeholder="Confirm Password"
      value={confirmPassword}
      onChangeText={handleConfirmPasswordChange}
      keyboardType='password'
    />

 {/* <View style={styles.switchContainer}>
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
</View> */}
    <TouchableOpacity  onPress={()=> navigation.navigate('Step2')}>
    <View style ={styles.button}>
      <Text style={styles.ButtonText}>NEXT</Text>
    </View>
  </TouchableOpacity>
  </View>
  )
}

export default RegistrationScreen

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