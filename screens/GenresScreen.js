import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from "react-native";
import { Video } from "expo-av";

export default function MoodsScreen() {
    const moods = [
        { name: "CHILL", backgroundColor: "#ECFF42A1", image: require('../assets/chill.png') },
        { name: "GROOVY", backgroundColor: "#17FE5EA1", image: require('../assets/groovy.png') },
        { name: "HYPE", backgroundColor: "#FF00B7A1", image: require('../assets/hype.png') },
        { name: "GOOFY", backgroundColor: "#0026FFA1", image: require('../assets/goofy.png') },
        { name: "ANGRY", backgroundColor: "#B350FFA1", image: require('../assets/angry.png') },
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
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>MOODS</Text>
                </View>
                {moods.map((mood, index) => (
                    <View
                        key={index}
                        style={[styles.mood, { backgroundColor: mood.backgroundColor, overflow: 'hidden'}]}
                        
                    >
                        <Text style={styles.moodText}>{mood.name}</Text>
                        <Image source={mood.image} style={styles.moodImage} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    header: {
        padding: 40,
        alignItems: "center",
        backgroundColor: "#000",
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: 80,
        fontWeight: "bold",
    },
    mood: {
        height: 180,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
    },
    moodImage: {
        width: "60%",
        height: "100%",
        position: "absolute",
        resizeMode: "contain",
        bottom: 0,
        right: -50, 
    },
    moodText: {
        fontSize: 40,
        fontWeight: "900",
        color: "#000",
        marginLeft: 40,
        fontStyle: "italic",
    },
});