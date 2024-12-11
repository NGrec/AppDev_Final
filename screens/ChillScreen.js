import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Video } from "expo-av";
import moodImage from '../assets/chill-black.png';

const ChillScreen = () => {
  const tracks = [
    { title: 'Track 1', artist: 'Artist 1' },
    { title: 'Track 2', artist: 'Artist 2' },
    { title: 'Track 3', artist: 'Artist 3' },
    { title: 'Track 4', artist: 'Artist 4' },
    { title: 'Track 5', artist: 'Artist 5' },
  ];

  return (
    <View style={styles.container}>
      <Video
        isLooping
        isMuted
        resizeMode="cover"
        shouldPlay
        source={require("../assets/videoBG.mp4")}
        style={styles.backgroundVideo}
      />
      <View style={styles.contentContainer}>
        <View style={styles.cloudContainer}>
          <Image source={moodImage} style={styles.moodImage} />
          <Text style={styles.moodText}>CHILL</Text>
        </View>
        <FlatList
          data={tracks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.trackContainer}>
              <View style={styles.trackInfo}>
                <Text style={styles.titleText}>Title</Text>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
              <View style={styles.trackInfo}>
                <Text style={styles.artistText}>Artist</Text>
                <Text style={styles.artistText}>{item.artist}</Text>
              </View>
              <Feather name="more-vertical" size={24} color="#000" />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#ECFF42A1',
  },
  cloudContainer: {
    alignItems: 'center',
    marginBottom: 0,
    height: 350,
  },
  moodImage: {
    width: "100%",
    height: "55%",
    marginTop: 40,
    objectFit: "contain",
  },
  moodText: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 0,
    padding: 0,
  },
  trackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  trackInfo: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  artistText: {
    fontSize: 14,
    color: '#000',
  },
});

export default ChillScreen;