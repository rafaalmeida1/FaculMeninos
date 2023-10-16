import { useCallback, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { api } from "../lib/axios";
import { Loading } from "../components/Loading";
import UserImage from "../assets/user-image.svg";
import { ProgressBar } from "../components/Progress.Bar";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { FriendsSection } from "../components/screens/Home/FriendSection";

export function Home() {
    const [loading, setLoading] = useState(false);

    const { navigate } = useNavigation();

    useFocusEffect(
        useCallback(() => {
            // fetchData()
        }, [])
    );

    if (loading) {
        return <Loading />;
    }

    return (
        <View className="flex-1 bg-zinc-100 pt-8 w-screen">
            <View className="w-full px-4 pt-4 flex flex-row gap-1 justify-between">
                <View className="flex flex-row gap-x-2 items-center">
                    <View className="rounded-full p-3 shadow-lg shadow-rose-300">
                        <UserImage />
                    </View>
                    <View className="flex flex-col items-start">
                        <Text className="text-black text-xl font-medium">
                            Júlia Ellen
                        </Text>
                        <Text className="text-[#DF3222] text-sm font-medium">
                            @JuuElen10
                        </Text>
                        <Text className="text-[#CDB017] text-sm font-medium">
                            Nível Ouro
                        </Text>
                        <View className="max-w-[100px]">
                            <ProgressBar progress={90} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather
                        name="settings"
                        size={32}
                        color={colors.zinc[800]}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100, paddingLeft: 0 }} 
                className="w-full mt-4"
            >
                <FriendsSection />
            </ScrollView>
        </View>
    );
}
