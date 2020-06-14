import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    
} from "react-native";


class InfoUnitAdmin extends React.Component {
    render() {
        return (
            <View >
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>{this.props.catagory}</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>{this.props.title} </Text>
                </View>
                <View style={styles.detailStyle}>
                    <Text style={styles.textDetailStyle}> {this.props.detail} </Text>
                </View>
                <View style={styles.dateStyle}>
                    <Text style={styles.textDetailStyle}> תאריך העלאה | {this.props.date}  </Text>
                </View>
               
            </View>
        );
    }
}
export default InfoUnitAdmin;

const styles = StyleSheet.create({
    routeStyle: {
        backgroundColor: "#F6D365",
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 20,
        marginTop: 10
    },
    ButtonStyle:{
       
    },
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "75%",
        width: "30%"
    },
    textStyle: {
        flexDirection: 'row-reverse'
    },
    detailStyle: {
       height: 50,
       width: "69%",
       marginLeft: 111,

    },
    dateStyle:{
        height: 30,
       width: "50%",
       marginLeft: 180,
       marginTop:10

    },
    textTitleStyle: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10
    },
    textDetailStyle: {
        fontWeight: "normal",
        fontSize: 16,
        //alignSelf: "center"
    }


});