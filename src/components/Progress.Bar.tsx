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
    <View className="max-w-full h-2 rounded-xl flex flex-row bg-zinc-700">
      <Animated.View 
        className="h-2 rounded-xl bg-[#a82754]"
        style={style}
      />
    </View>
  )
}