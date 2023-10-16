import React from "react";
import { Text, View } from "react-native";

export function RecyclingGraph() {
    return (
        <View className="flex flex-col gap-y-1 mt-3 px-5 w-full">
            <Text className="text-[#117900] text-base font-medium">
                Gráfico de reciblagem
            </Text>
            <View className="shadow-md shadow-zinc-800 bg-pink-200 px-4 py-2 w-full h-48 rounded-3xl"></View>
        </View>
    );
}