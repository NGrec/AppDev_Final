import React from "react";
import { StyleSheet, Text} from "react-native";

// Component for rendering headings with different styles


class AppHeading extends React.Component{

    styles = StyleSheet.create({
        heading1: {
            letterSpacing: -4,
            fontSize: 40,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#FFFFFF',
            textAlign: 'center',
        },

        heading2: {
            letterSpacing: -1,
            fontSize: 15,
            fontWeight: "500",
            fontStyle: 'italic',
            color: '#FFFFFF',
            paddingBottom: 15,
            textAlign: 'center',
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