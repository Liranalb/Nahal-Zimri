import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput
} from "react-native";

class ReportBox extends Component {



    render() {
        return (

            <View style={{ height: 300, width: 150, marginLeft: 10,marginTop:3, borderWidth: 0.8, borderColor: '#dddddd' }}>
                <View style={{ flex: 10 }}>
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

                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>מגיש הדיווח</Text>
                </View>


            </View>

        );
    }
}
export default ReportBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    editButtons:{
        paddingRight:1,
       
    }

});

