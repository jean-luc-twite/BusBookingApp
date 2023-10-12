import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const CreditCardDetailsScreen = ({ navigation }) => {
  const [cards, setCards] = useState([]); // Store multiple cards as an array
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAddCard = () => {
    // Validate and add a new card to the list
    if (cardHolderName && cardNumber && expirationDate && cvv) {
      const newCard = {
        cardHolderName,
        cardNumber,
        expirationDate,
        cvv,
      };

      setCards([...cards, newCard]);

      // Clear input fields
      setCardHolderName('');
      setCardNumber('');
      setExpirationDate('');
      setCvv('');
    } else {
      // Show an error message or prevent further action
      console.log('Please fill in all required fields.');
    }
  };

  const handleSaveCards = () => {
    // Save the list of cards (e.g., send to a server)
    console.log('All Cards Saved:', cards);
    navigation.navigate('Payment_Screen'); // Go back to the previous screen (payment method selection)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Credit Card Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Holder Name"
        onChangeText={(text) => setCardHolderName(text)}
        value={cardHolderName}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        onChangeText={(text) => setCardNumber(text)}
        value={cardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date (MM/YY)"
        onChangeText={(text) => setExpirationDate(text)}
        value={expirationDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        onChangeText={(text) => setCvv(text)}
        secureTextEntry={true}
        value={cvv}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.addButtonText}>Add Card</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Saved Cards:</Text>
      <ScrollView style={styles.cardList}>
        {cards.map((card, index) => (
          <View key={index} style={styles.cardItem}>
            <Text>Card {index + 1}</Text>
            <Text>Card Holder Name: {card.cardHolderName}</Text>
            <Text>Card Number: {card.cardNumber}</Text>
            <Text>Expiration Date: {card.expirationDate}</Text>
            <Text>CVV: {card.cvv}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveCards}>
        <Text style={styles.saveButtonText}>Save All Cards</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  addButton: {
    backgroundColor: '#60A0FF',
    padding: 15,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cardList: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    maxHeight: 200,
  },
  cardItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  saveButton: {
    backgroundColor: '#F5A522',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CreditCardDetailsScreen;
