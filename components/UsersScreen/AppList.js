import { StyleSheet } from 'react-native';

// Styles for list items, card layout and text styling.

const AppListStyles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: 350,
        alignSelf: 'center',
    },
    itemContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    song: {
        fontWeight: '800',
        fontSize: 30,
        color: '#000000',
        letterSpacing: -2,
    },
    album: {
        fontWeight: '800',
        fontSize: 15,
        color: '#777777',
        letterSpacing: -2,
    },
    artist: {
        fontWeight: '800',
        fontSize: 20,
        color: '#000000',
        letterSpacing: -2,
    },
    genreImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginTop: 10,
    },
    listContainer: {
        paddingBottom: 20,
    },
});

export default AppListStyles;
