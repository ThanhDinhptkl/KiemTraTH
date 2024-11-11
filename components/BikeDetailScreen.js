import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function BikeDetailScreen({ navigation, route }) {
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: bike.img }} style={styles.image} />
      </View>
      <Text style={styles.bikeName}>{bike.name}</Text>
      <Text style={styles.discountText}>
        {bike.discount}% OFF | ${bike.price}
      </Text>
      <Text style={styles.originalPrice}>${bike.originalPrice}</Text>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>{bike.description}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.heartIcon}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate("AddBike", { bike })}
        >
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "#fbe9e7",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
  bikeName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  discountText: {
    fontSize: 18,
    color: "#ff5252",
    marginBottom: 5,
  },
  originalPrice: {
    fontSize: 16,
    color: "#9e9e9e",
    textDecorationLine: "line-through",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 15,
    color: "#757575",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  favoriteButton: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 50,
    marginRight: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  heartIcon: {
    fontSize: 20,
    color: "gray",
  },
  addToCartButton: {
    backgroundColor: "#ff5252",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default BikeDetailScreen;
