import { StyleSheet } from 'react-native';

// Styles for the FlatList, card and text styles for titles, groups, time, text


const AppListStyles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: 380,
        alignSelf: 'center',
    },
    itemContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    title: {
        fontWeight: '800',
        fontSize: 16,
        color: '#000000',
        letterSpacing: -1,
    },
    group: {
        fontWeight: '800',
        fontSize: 13,
        color: '#777777',
        letterSpacing: -2,
    },
    time: {
        fontWeight: '800',
        fontSize: 13,
        color: '#777777',
        letterSpacing: -2,
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        color: '#000000',
        letterSpacing: -.5,
    },
    
    listContainer: {
        paddingBottom: 20,
    },
});



export default AppListStyles;
