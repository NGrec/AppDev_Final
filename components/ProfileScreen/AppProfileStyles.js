import { StyleSheet } from 'react-native';

// Styles profile card, headings, text for profile details

const AppProfileStyles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: '90%',
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
    heading1: {
        fontSize: 25,
        letterSpacing: -3,
        fontWeight: '900',
        color: '#000000',
        textAlign: 'center',
    },
    heading2: {
        fontSize: 12,
        letterSpacing: -.5,
        fontWeight: '600',
        color: '#000000',
        textAlign: 'left',
        marginVertical: 5,
    },
    heading3: {
        fontSize: 15,
        fontStyle: 'italic',
        letterSpacing: -1,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
    },
});

export default AppProfileStyles;
