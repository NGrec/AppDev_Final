import { Video } from "expo-av";
import { Animated, StyleSheet, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

import AppHeading from "../components/HomeScreen/AppHeading";
import AppButton from "../components/HomeScreen/AppButton";

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.background}>
          <Video
            isLooping
            isMuted
            resizeMode="cover"
            shouldPlay
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
                onPress={() => navigation.navigate('Genres')}
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