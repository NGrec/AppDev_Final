import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const SongDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.albumContainer}>
        <Image source={{ uri: '/api/placeholder/200/200' }} style={styles.albumCover} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Song Title</Text>
        <Text style={styles.artist}>Artist Name</Text>
        <Text style={styles.album}>Album Name</Text>
        <Text style={styles.year}>2023</Text>
        <Text style={styles.mood}>Mood: Chill</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumContainer: {
    backgroundColor: '#000',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 32,
  },
  albumCover: {
    width: 200,
    height: 200,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  artist: {
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
  },
  album: {
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
  },
  year: {
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
  },
  mood: {
    fontSize: 18,
    color: '#000',
  },
});

export default SongDetailsScreen;