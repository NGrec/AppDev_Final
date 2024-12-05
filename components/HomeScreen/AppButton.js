// button component
// specific dimensions and colors


import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const AppButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
            <MaterialCommunityIcons style={{ marginLeft: 8 }} name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1E1E1E',
        width: 200,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center', 
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        letterSpacing: -2,
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default AppButton;