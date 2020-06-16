import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    
} from "react-native";
import AdminButton from "./AdminButton";

class UnitRoutes extends Component {
    render() {
        return (
            <View style={styles.routeStyle}>
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>שם המסלול:</Text>
                    <Text style={styles.textDetailStyle}>{this.props.name}</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>רמת הקושי:</Text>
                    <Text style={styles.textDetailStyle}>{this.props.level}</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>ק"מ:</Text>
                    <Text style={styles.textDetailStyle}>{this.props.km}</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>משך זמן ההליכה:</Text>
                    <Text style={styles.textDetailStyle}>{this.props.duration}</Text>
                </View>
            </View>
        );
    }
}
export default UnitRoutes;

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
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "85%",
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
        fontSize: 18,
        marginLeft: 10
    },
    textDetailStyle: {
        fontWeight: "normal",
        fontSize: 16,
        //alignSelf: "center"
    }


});