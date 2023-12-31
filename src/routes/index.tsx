import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <View className="flex-1 bg-zinc-100">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}