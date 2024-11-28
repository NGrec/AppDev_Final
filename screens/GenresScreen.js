import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native";

export default function MoodsScreen() {
    const moods = [
        { name: "CHILL", backgroundColor: "#C4E538" }, // Green
        { name: "GROOVY", backgroundColor: "#32FF7E" }, // Bright Green
        { name: "HYPE", backgroundColor: "#F35588" }, // Pink
        { name: "GOOFY", backgroundColor: "#18DCFF" }, // Blue
        { name: "ANGRY", backgroundColor: "#9B59B6" }, // Purple
    ];

    return (
        <ImageBackground
            source={require('../assets/VideoBgReal.jpg')} // Replace with your image path
            style={styles.background}
        >
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>MOODS</Text>
                </View>
                {moods.map((mood, index) => (
                    <View
                        key={index}
                        style={[styles.mood, { backgroundColor: mood.backgroundColor }]}
                    >
                        <Text style={styles.moodText}>{mood.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent overlay for text readability
    },
    header: {
        padding: 20,
        alignItems: "center",
    },
    headerText: {
        color: "#FFF", // White text for "MOODS"
        fontSize: 44,
        fontWeight: "bold",
    },
    mood: {
        height: 150, // Height for each section
        justifyContent: "center",
        alignItems: "center",
        // Removed margin to make the boxes touch each other
    },
    moodText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF", // White text for moods
    },
});
