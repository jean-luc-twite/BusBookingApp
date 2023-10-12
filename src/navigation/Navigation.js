import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//import screens 
import LaunchScreen from '../screens/LaunchScreen'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import SecondScreen from '../screens/SecondScreen'
import MainContainer from './MainContainer'
import SeatSelectionScreen from '../screens/SeatSelectionScreen'
import PassengerScreen from '../screens/PassengerScreen'
import ChoosePaymentScreen from '../screens/ChoosePaymentScreen'
import CreditCardDetailsScreen from '../screens/CreditCardDetailsScreen'
import PaymentScreen from '../screens/PaymentScreen'
import PaymentConfirmScreen from '../screens/PaymentConfirmScreen'
import ReasonCancelScreen from '../screens/ReasonCancelScreen'
import ConfirmCancelation from '../screens/ConfirmCancelation'

const Stack =createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name ="Home"
             component={LaunchScreen}
             />
               {/* <Stack.Screen name ="Welcome"
                component={WelcomeHome}
             /> */}
              <Stack.Screen name ="Step2"
                component={SecondScreen}
             />
             <Stack.Screen name ="Login"
             component={LoginScreen}
             options={{headerShown:false}}/>
             <Stack.Screen name ="Register"
             component={RegistrationScreen}
             options={{headerShown:false}}/>
             <Stack.Screen name ="SeatSelection"
             component={SeatSelectionScreen}
             options={{headerShown:false}}/>
             <Stack.Screen name ="Passengers"
             component={PassengerScreen}
             options={{headerShown:false}}/>
             <Stack.Screen name ="Payment"
             component={ChoosePaymentScreen}
             options={{headerShown:false}}/>
              <Stack.Screen name ="Credit_Card"
             component={CreditCardDetailsScreen}
             options={{headerShown:false}}/>
              <Stack.Screen name ="Payment_Screen"
             component={PaymentScreen}
             options={{headerShown:false}}/>

             <Stack.Screen name ="PaymentConfirmation"
             component={PaymentConfirmScreen}
             options={{headerShown:false}}/>

                <Stack.Screen name ="Reason_cancel"
             component={ReasonCancelScreen}
             options={{headerShown:false}}/>
             
             <Stack.Screen name ="Confirm_cancel"
             component={ConfirmCancelation}
             options={{headerShown:false}}/>

              <Stack.Screen name ="Main"
             component={MainContainer}
             options={{headerShown:false}}/>
    </Stack.Navigator>
 </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})