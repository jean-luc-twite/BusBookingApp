import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const ChoosePaymentScreen = ({navigation}) => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const handlePaymentMethodSelect = (method) => {
      setSelectedMethod(method);
    };
  
    const paymentMethods = [
      { id: 1, name: 'Credit Card' },
      { id: 2, name: 'PayPal' },
      { id: 3, name: 'Google Pay' },
      { id: 4, name: 'Apple Pay' },
    ];
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Choose Payment Method</Text>

    {paymentMethods.map((method) => (
      <TouchableOpacity
        key={method.id}
        style={[
          styles.paymentMethod,
          selectedMethod === method.id && styles.selectedMethod,
        ]}
        onPress={() => handlePaymentMethodSelect(method.id)}
      >
        <Text style={styles.methodName}>{method.name}</Text>
      </TouchableOpacity>
    ))}

    <TouchableOpacity
      style={styles.confirmButton}
      onPress={() => {
        if (selectedMethod) {
          // Perform actions based on the selected payment method
          // For example, navigate to a payment screen with the selected method
          navigation.navigate('Credit_Card')
        } else {
          // Show an error message or prevent further action
          console.log('Please select a payment method.');
        }
      }}
    >
      <Text style={styles.confirmButtonText}>Confirm Payment Method</Text>
    </TouchableOpacity>
  </View>
  )
}

export default ChoosePaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      paymentMethod: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center',
      },
      selectedMethod: {
        borderColor: '#60A0FF', // Change the border color for the selected method
      },
      methodName: {
        fontSize: 18,
      },
      confirmButton: {
        backgroundColor: '#F5A522',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
      },
      confirmButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
})