import { Video } from "expo-av";
import { useMemo } from "react";
import { Animated, Text, StyleSheet, View, ScrollView, ImageBackground } from "react-native";

import AppHeading from "../components/HomeScreen/AppHeading";
import AppButton from "../components/HomeScreen/AppButton";

export default function App() {
  const opacity = useMemo(() => new Animated.Value(0), []);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
          <Video
            isLooping
            isMuted
            resizeMode="cover"
            source={require("../assets/videoBG.mp4")}
            style={{ flex: 1 }}
          />
      </View>
      <View style={styles.overlay}>
            <AppHeading headingStyle='h1'>
                Choose a mood
            </AppHeading>
            <AppHeading headingStyle='h1'>
                Choose a song
            </AppHeading>
            <AppButton 
                title="GO"
                onPress={() => navigation.navigate('Music')}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
});