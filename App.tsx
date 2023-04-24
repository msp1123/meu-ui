import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeView } from "./screens/Home";
import { StatusBar } from "expo-status-bar";
const Stack = createNativeStackNavigator();

export default function App() {
  const defaulTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#0F172A",
    },
  };

  return (
    <NavigationContainer theme={defaulTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
