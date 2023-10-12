import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Handle payment logic here (e.g., send payment to a server)

    // Assuming payment is successful, navigate to a confirmation screen
    navigation.navigate('PaymentConfirmation', { amountPaid: amount });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Payment</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        onChangeText={(text) => setAmount(text)}
        value={amount}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  payButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentScreen;
