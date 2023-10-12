import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");


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
  
  return (
    <View style={styles.container}>
    <View>
    <Image 
     style={styles.welcome_img}
     resizeMode='contain'
     source={require('../assetsImage/bus_Logo1.png')}/>

     <Text style={styles.Welcome_Text}>Sign In</Text>
     <Text style={styles.SubTitle}>Login Into your Account</Text>
    </View>
      <TextInput style ={styles.input}
      placeholder='enter surName or email' 
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
    <TouchableOpacity  onPress={()=> navigation.navigate('Main')}>
    <View style ={styles.button}>
      <Text style={styles.ButtonText}>Login</Text>
    </View>
  </TouchableOpacity>
  <View style={styles.touchIdContainer}>
          <TouchableOpacity   style={styles.opacityContainer}>
              <Image 
                  source={require('../assetsImage/Vector.png')}
              />
              <Text style={styles.touchText}>Login with Touch ID</Text>
          </TouchableOpacity>

      </View>
  <View style={{flexDirection:'row', marginTop:20}}>
          <Text style ={styles.dontHaveAccount}>Don't have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
               <Text style ={styles.link}>Register</Text>
          </TouchableOpacity>
       </View>
  </View>
  )
}

export default LoginScreen

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
        bottom:50
        
      },
      SubTitle:{
        fontFamily:'sans-serif',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        color:'#A0A0A0',
        bottom:50
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
    
      },
      welcome_img: {
        bottom:30
       },
       link: {
        color: 'red',
       left:20,
       fontSize:18,
       bottom:15
      },
      dontHaveAccount:{
         color:"#000000",
        fontSize:18,
        bottom:15
      },
      touchIdContainer: { 
        marginBottom: 20,
        alignItems: 'center',
        left:25,
        backgroundColor:'#60A0FF',
        marginRight:50,
        padding:25,
        borderRadius:10
    }, 
    touchText: {
      textAlign: 'center', 
      marginTop: 10,
      fontFamily: 'Raleway-Regular',
      color:'#000000',
      
    },
    opacityContainer:{
      alignItems:'center'
    }
})