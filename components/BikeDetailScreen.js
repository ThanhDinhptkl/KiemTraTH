import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function BikeDetailScreen({navigation, route }) {
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ {uri: bike.img} } style={styles.image} />
      </View>
      <Text style={styles.bikeName}>{bike.name}</Text>
      <Text style={styles.discountText}>{bike.discount}% OFF | ${bike.price}</Text>
      <Text style={styles.originalPrice}>${bike.originalPrice}</Text>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>{bike.description}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.favoriteButton}>
          <Text>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addToCartButton} 
          onPress={() => navigation.navigate('AddBike', { bike })}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#fbe9e7',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  bikeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discountText: {
    fontSize: 16,
    color: '#ff5252',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  favoriteButton: {
    marginRight: 20,
  },
  addToCartButton: {
    backgroundColor: '#ff5252',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BikeDetailScreen;
