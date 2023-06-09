import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAnimatedKeyboard} from 'react-native-reanimated';

export default function AppUseKeyboarReanimated(props: Props) {
  const keyboard = useAnimatedKeyboard();

  console.log('==========Only define, not use yet=======', keyboard);
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
