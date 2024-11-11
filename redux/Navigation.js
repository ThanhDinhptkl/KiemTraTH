import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../components/HomeScreen";
import BikeListScreen from "../components/BikeListScreen";
import BikeDetailScreen from "../components/BikeDetailScreen";
import AddBike from "../components/AddBike";

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BikeList"
          component={BikeListScreen}
          options={{ title: "Bike List" }}
        />
        <Stack.Screen
          name="BikeDetail"
          component={BikeDetailScreen}
          options={({ route }) => ({ title: route.params.bike.name })}
        />
        <Stack.Screen name="AddBike" component={AddBike} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
