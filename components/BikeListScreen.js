import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchBikes } from "../redux/bikeSlice";

const BikeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.items);
  const status = useSelector((state) => state.bikes.status);
  const error = useSelector((state) => state.bikes.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("BikeDetail", { bike: item })}
    >
      <TouchableOpacity style={styles.favoriteIcon}>
        <Text style={styles.heartIcon}>❤️</Text>
      </TouchableOpacity>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  if (status === "loading") {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff5252" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The World’s Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={[styles.filterText, styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText1}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText1}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bikes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#ff5252",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: "#ff5252",
  },
  filterText: {
    color: "#ff5252",
    fontSize: 16,
    fontWeight: "500",
  },
  filterText1: {
    color: "gray",
    fontSize: 16,
    fontWeight: "500",
  },
  activeFilterText: {
    color: "#fff",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    position: "relative",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
  },
  heartIcon: {
    color: "gray",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    color: "#ff8a65",
    fontWeight: "500",
  },
  row: {
    justifyContent: "space-between",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BikeListScreen;
