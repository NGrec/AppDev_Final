import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moodImage from '../assets/goofyBlack.png';

const GoofyScreen = () => {
  // Sample data for the tracks
  const tracks = [
    { title: 'Track 1', artist: 'Artist 1' },
    { title: 'Track 2', artist: 'Artist 2' },
    { title: 'Track 3', artist: 'Artist 3' },
    { title: 'Track 4', artist: 'Artist 4' },
    { title: 'Track 5', artist: 'Artist 5' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.cloudContainer}>
        <Image source={moodImage} style={styles.moodImage} />
        <Text style={styles.moodText}>GOOFY</Text>
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
            <Feather name="more-vertical" size={24} color="#fff" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECFF42',
    position: "relative",

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

export default GoofyScreen;