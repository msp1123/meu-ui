import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

export function HomeView() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-4xl text-white">Home</Text>
    </View>
  );
}
