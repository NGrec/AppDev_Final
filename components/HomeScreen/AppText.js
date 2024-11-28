import { StyleSheet, Text} from 'react-native';

export default function AppText(props){

    return(
        <Text style={styles.sampleText}>
            {props.children}
        </Text>
    );

}

const styles = StyleSheet.create({
    sampleText: { 
    fontSize: 11,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 5,
    color: '#FFFFFF',
    paddingTop: 320,
    alignSelf: 'center',

},
});

// text component displaying text with predefined style