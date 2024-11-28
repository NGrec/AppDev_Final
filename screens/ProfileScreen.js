import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AppHeading from "../components/ProfileScreen/AppHeading";
import AppProfileStyles from '../components/ProfileScreen/AppProfileStyles';
import AppActivityStyles from '../components/ProfileScreen/AppActivityStyles';
import AppListStyles from '../components/ProfileScreen/AppList';
import { userActivity } from '../data/dataActivity';

const UNSPLASH_ACCESS_KEY = 'aNxP9refdi4urLevhY5RYjIgrXAL_lepQLrW8iULCi4';

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [backgroundImage, setBackgroundImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBackgroundImage = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/search/photos?query=deadmau5&client_id=${UNSPLASH_ACCESS_KEY}`
                );
                const json = await response.json();
                const imageUrl = json.results[0]?.urls?.regular || '';
                setBackgroundImage(imageUrl);
            } catch (error) {
                console.error("Error fetching background image:", error);
                
                setBackgroundImage('assets\TheMSdm5.jpg');
            } finally {
                setLoading(false);
            }
        };

        fetchBackgroundImage();
    }, []);

    const renderItem = ({ item }) => (
        <View style={AppListStyles.card}>
            <View style={AppListStyles.itemContainer}>
                <Text style={AppListStyles.title}>{item.title}</Text>
                <Text style={AppListStyles.artist}>{item.artist}</Text>
                <Text style={AppListStyles.album}>{item.album}</Text>
                <Text style={AppListStyles.text}>{item.text}</Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ImageBackground 
            source={{ uri: backgroundImage }}
            style={styles.background}
        >
            <View style={styles.container}>
                <ScrollView>
                    <AppHeading headingStyle='h1'>grecsters.</AppHeading>
                    <AppHeading headingStyle='h2'>Est. 2024</AppHeading>
                    <Image
                        source={require('../assets/profileIcon.png')}
                        style={styles.icon}
                    />
                    <Image
                        source={require('../assets/testpilot_live.png')}
                        style={styles.testpilot}
                    />
                    <View style={AppProfileStyles.card}>
                        <Text style={AppProfileStyles.heading3}>Favourite Artist</Text>
                        <Text style={AppProfileStyles.heading1}>deadmau5</Text>
                        <Text style={AppProfileStyles.heading2}>
                            Obsessed with electronic music, and anything deadmau5. Whether I’m vibing to Strobe or driving to XYZ, music sets the tone for my day. I’m all about finding tracks that match my mood—whether I need energy, focus, or just a moment to unwind. Always down to discover new sounds and share playlists!
                        </Text>
                    </View>
                    <View style={AppActivityStyles.card}>
                        <Text style={AppActivityStyles.activity1}>Activity</Text>
                    </View>
                    <FlatList
                        data={userActivity}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={AppListStyles.listContainer}
                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
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
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    icon: {
        width: 60,
        height: 60,
        alignSelf: "center",
        borderRadius: 100,
    },
    testpilot: {
        width: 350,
        height: 200,
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 20,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
