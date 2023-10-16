import { useEffect } from "react";
import { View,Text } from "react-native";

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: Props) {
  const sharedProgress = useSharedValue(progress);
  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`
    }
  })

  useEffect(() => {
    sharedProgress.value = withTiming(progress)
  }, [progress])

  return (
    <View className="max-w-full w-[100px] h-2 rounded-xl flex flex-row bg-zinc-300">
      <Animated.View 
        className="h-2 rounded-xl bg-[#DF3222]"
        style={style}
      />
    </View>
  )
}