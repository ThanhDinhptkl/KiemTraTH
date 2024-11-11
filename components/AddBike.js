import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Screen4 = ({ route, navigation }) => {
  const { bike } = route.params;

  // Set up state for the editable bike information
  const [name, setName] = useState(bike.name);
  const [price, setPrice] = useState(bike.price.toString());
  const [description, setDescription] = useState(bike.description);

  // Function to handle API submission
  const handleAddToCart = async () => {
    try {
      const response = await fetch('https://67319a237aaf2a9aff112759.mockapi.io/bike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: bike.id,
          name,
          price: parseFloat(price),
          description,
          image: bike.image,
        }),
      });

      if (response.ok) {
        alert('Bike added to cart successfully!');
        navigation.goBack(); // Go back to the previous screen
      } else {
        alert('Failed to add to cart.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add to Cart</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Bike Name"
      />

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleAddToCart}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#FFF',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      marginBottom: 16,
    },
    submitButton: {
      backgroundColor: '#FF5252',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    submitButtonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default Screen4;
