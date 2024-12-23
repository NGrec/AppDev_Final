import React from 'react';
import { Animated, Text, StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AppHeading from "../components/HomeScreen/AppHeading";
import AppButton from "../components/HomeScreen/AppButton";
import { Video } from "expo-av";
import { useMemo } from "react";


export default function HomeScreen() {
    const navigation = useNavigation();
    const opacity = useMemo(() => new Animated.Value(0), []);


    return (
        <ImageBackground 
        source={require('../assets/VideoBgReal.jpg')} // Local image
            style={styles.background}
        >
            <View style={styles.container}>
                <ScrollView>
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
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

// Styles
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 200,
    },
});
