import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, Image } from "react-native";

export default function MoodsScreen() {
    const moods = [
        { name: "CHILL", backgroundColor: "#ECFF42", image: require('../assets/chill.png') },
        { name: "GROOVY", backgroundColor: "#17FE5E", image: require('../assets/groovy.png') },
        { name: "HYPE", backgroundColor: "#FF00B7", image: require('../assets/hype.png') },
        { name: "GOOFY", backgroundColor: "#0026FF", image: require('../assets/goofy.png') },
        { name: "ANGRY", backgroundColor: "#B350FF", image: require('../assets/angry.png') },
    ];

    return (
        <ImageBackground
            source={require('../assets/VideoBgReal.jpg')}
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
                        <Image source={mood.image} style={styles.moodImage} />
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
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    header: {
        padding: 20,
        alignItems: "center",
    },
    headerText: {
        color: "#FFF",
        fontSize: 80,
        fontWeight: "bold",
    },
    mood: {
        height: 180,
        flexDirection: "row", // Arrange items in a row
        justifyContent: "space-between", // Space between text and image
        alignItems: "center",
    },
    moodImage: {
        width: "40%",
        height: "100%",
        marginTop: 50,
        objectFit: "contain",
    },
    moodText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#1E1E1E",
        marginLeft: 40,
    },
});
