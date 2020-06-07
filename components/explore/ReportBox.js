import React, { Component } from "react";
import {
    View,
    Text,
    Image
} from "react-native";

class ReportBox extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ flex: 6 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text>קטגוריה:     {this.props.catagory}</Text>
                </View>
                <View style={{ flex: 4, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>תיאור:    {this.props.name}</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.date}</Text>
                </View>
                
            </View>
        );
    }
}
export default ReportBox;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerStyle: {
         height: 300, 
         width: 170, 
         marginLeft: 10, 
         borderWidth: 0.8, 
         borderColor: '#dddddd',
         backgroundColor: '#F4D5A7'
    }
}