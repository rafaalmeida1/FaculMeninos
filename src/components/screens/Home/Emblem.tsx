import { Text, View } from "react-native";

export function Emblem() {
    return (
        <View className="flex flex-col w-full gap-y-1 px-5 mt-3">
        <Text className="text-[#117900] text-base font-medium">
            Principais Emblemas
        </Text>
        <View className="px-4 py-2 rounded-3xl shadow-lg shadow-zinc-800 bg-[#C3FE78]  w-full">
            <View className="flex flex-row py-4 items-stretch w-full justify-center ml-3 gap-x-4">
                <View className="flex flex-col shadow-lg shadow-black p-1 items-center justify-center gap-y-2 h-[92px] w-[65px] rounded-lg bg-zinc-100">
                    <Text className="font-regular text-[10px]">Fernando</Text>
                </View>
                <View className="flex flex-col shadow-lg shadow-black p-1 items-center justify-center gap-y-2 h-[92px] w-[65px] rounded-lg bg-zinc-100">
                    <Text className="font-regular text-[10px]">Pietra</Text>
                </View>
                <View className="flex flex-col shadow-lg shadow-black p-1 items-center justify-center gap-y-2 h-[92px] w-[65px] rounded-lg bg-zinc-100">
                    <Text className="font-regular text-[10px]">Jéssica</Text>
                </View>
                <View className="flex flex-col shadow-lg shadow-black p-1 items-center justify-center gap-y-2 h-[92px] w-[65px] rounded-lg bg-zinc-100">
                    <Text className="font-regular text-[10px]">Pedro</Text>
                </View>
            </View>
        </View>
    </View> 
    )
}