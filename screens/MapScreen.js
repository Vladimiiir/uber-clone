import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-black absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="menu" color={"white"} />
      </TouchableOpacity>

      <View className="bg-white">
        <View style={tw`h-1/2`}>
          <Map />
        </View>
        <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;
