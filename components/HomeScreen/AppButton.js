// button component
// specific dimensions and colors


import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AppButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        width: 200,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center', 
        marginTop: 20,
    },
    buttonText: {
        color: '#000000',
        letterSpacing: -2,
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default AppButton;