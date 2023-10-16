import { Text, View } from "react-native";
import ManIcon from "../../../assets/man-icon.svg";
import FemaleIcon from "../../../assets/female-icon.svg";

export function FriendsSection() {
    return (
        <View className="flex flex-col w-full gap-y-1 px-5">
            <Text className="text-[#DF3222] text-base font-medium">
                Ver amigos
            </Text>
            <View className="p-4 rounded-3xl shadow-lg shadow-zinc-800 bg-[#D9D9D9] flex flex-col items-stretch gap-y-1 w-full">
                <View className="flex flex-row gap-1 items-stretch w-full">
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <ManIcon />
                        <Text className="font-regular text-[10px]">Fernando</Text>
                    </View>
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <FemaleIcon />
                        <Text className="font-regular text-[10px]">Pietra</Text>
                    </View>
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <FemaleIcon />
                        <Text className="font-regular text-[10px]">Jéssica</Text>
                    </View>
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <ManIcon />
                        <Text className="font-regular text-[10px]">Pedro</Text>
                    </View>
                </View>
                <View className="flex flex-row gap-1 items-stretch w-full">
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <ManIcon />
                        <Text className="font-regular text-[10px]">João</Text>
                    </View>
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <FemaleIcon />
                        <Text className="font-regular text-[10px]">Leticia</Text>
                    </View>
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <FemaleIcon />
                        <Text className="font-regular text-[10px]">Matheus</Text>
                    </View>
                    <View className="flex flex-col flex-1 p-1 items-center justify-center gap-y-2  rounded-lg bg-zinc-100">
                        <ManIcon />
                        <Text className="font-regular text-[10px]">Nicolly</Text>
                    </View>
                </View>
            </View>
        </View> 
    );
}
