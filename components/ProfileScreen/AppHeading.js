import React from "react";
import { StyleSheet, Text} from "react-native";

// heading component with styles for different headings (h1, h2)

class AppHeading extends React.Component{

    styles = StyleSheet.create({
        heading1: {
            letterSpacing: -3,
            fontSize: 40,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#FFFFFF',
            textAlign: 'center',
        },

        heading2: {
            letterSpacing: -2,
            fontSize: 18,
            fontWeight: "500",
            fontStyle: 'italic',
            color: '#FFFFFF',
            paddingBottom: 15,
            textAlign: 'left',
            marginLeft: 100,
        },


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