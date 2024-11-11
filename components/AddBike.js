import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const Screen4 = ({ route, navigation }) => {
  const { bike } = route.params;

  const [name, setName] = useState(bike.name);
  const [price, setPrice] = useState(bike.price.toString());
  const [description, setDescription] = useState(bike.description);

  const handleAddToCart = async () => {
    try {
      const response = await fetch(
        "https://67319a237aaf2a9aff112759.mockapi.io/bike",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: bike.id,
            name,
            price: parseFloat(price),
            description,
            image: bike.image,
          }),
        }
      );

      if (response.ok) {
        alert("Bike added to cart successfully!");
        navigation.goBack();
      } else {
        alert("Failed to add to cart.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Add Bike to Cart</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Bike Name"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Price"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />

        <TextInput
          style={[styles.input, styles.descriptionInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          placeholderTextColor="#888"
          multiline
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleAddToCart}>
          <Text style={styles.submitButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
  },
  scrollContainer: {
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  descriptionInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#FF5252",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#FF5252",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Screen4;
