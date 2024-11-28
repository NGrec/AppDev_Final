import { StyleSheet } from 'react-native';

// Styles for the single activity text, just layout and text formatting

const AppActivityStyles = StyleSheet.create({
    card: {
        backgroundColor: '#017373',
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        width: '20%',
        alignSelf: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    text: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
    },
    activity1: {
        fontSize: 15,
        letterSpacing: -1,
        fontWeight: '900',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    
});

export default AppActivityStyles;
