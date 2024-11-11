import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function HomeScreen({ navigation }) {
  const [firstBike, setFirstBike] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67319a237aaf2a9aff112759.mockapi.io/bike"
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setFirstBike(data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!firstBike) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>A premium online store for</Text>
      <Text style={styles.heading}>sporters and their stylish choice</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: firstBike.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BikeList")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageContainer: {
    backgroundColor: "#fbe9e7",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff5252",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
