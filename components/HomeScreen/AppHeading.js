import React from "react";
import { StyleSheet, Text} from "react-native";

class AppHeading extends React.Component{

    styles = StyleSheet.create({
        heading1: {
            letterSpacing: -5,
            fontSize: 50,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#FFFFFF',
            textAlign: 'center',
        },

        heading2: {
            letterSpacing: -1,
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#FFFFFF',
            paddingBottom: 15,
            textAlign: 'left',
        },

    // heading component, renders text with different styles (h1, h2)

    });
    render(){

        return(
            <Text style={this.evalHeadingStyle()}>
                {this.props.children}
            </Text>
        )
    }

    evalHeadingStyle(){
        switch(this.props.headingStyle){
            case 'h1':
                return this.styles.heading1;
                
            case 'h2':
                return this.styles.heading2;
        }
    }
}

export default AppHeading;