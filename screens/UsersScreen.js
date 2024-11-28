import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ImageBackground, Image, Text, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AppHeading from "../components/UsersScreen/AppHeading";
import AppListStyles from '../components/UsersScreen/AppList';
import { userData } from '../data/dataUsers';

const UNSPLASH_ACCESS_KEY = 'aNxP9refdi4urLevhY5RYjIgrXAL_lepQLrW8iULCi4';

export default function UsersScreen() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBackgroundImage = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/search/photos?query=dance-music&client_id=${UNSPLASH_ACCESS_KEY}`
                );
                const json = await response.json();
                const imageUrl = json.results[0]?.urls?.regular || '';
                setBackgroundImage(imageUrl);
            } catch (error) {
                console.error("Error fetching background image:", error);
            } finally {
                setLoading(false);
            }
        };

        const fetchImages = async () => {
            const updatedData = await Promise.all(
                userData.map(async (item) => {
                    const response = await fetch(
                        `https://api.unsplash.com/search/photos?query=${item.searchTerm}&client_id=${UNSPLASH_ACCESS_KEY}`
                    );
                    const json = await response.json();
                    const imageUrl = json.results[0]?.urls?.small || '';
                    return { ...item, genreImage: { uri: imageUrl } };
                })
            );
            setData(updatedData);
        };

        fetchBackgroundImage();
        fetchImages();
    }, []);

    const renderItem = ({ item }) => (
        <View style={AppListStyles.card}>
            <View style={AppListStyles.itemContainer}>
                <Text style={AppListStyles.song}>{item.song}</Text>
                <Text style={AppListStyles.album}>{item.album}</Text>
                <Text style={AppListStyles.artist}>{item.artist}</Text>
            </View>
            <Image source={item.genreImage} style={AppListStyles.genreImage} />
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
                <AppHeading headingStyle='h1'>your picks.</AppHeading>
                <AppHeading headingStyle='h2'>todays vibe - goofy.</AppHeading>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={AppListStyles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
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
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
