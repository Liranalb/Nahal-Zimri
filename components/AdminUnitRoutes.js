import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,

} from "react-native";
import AdminButton from "./AdminButton";

class AdminUnitRoutes extends React.Component {
    render() {
        return (
            <View style={styles.routeStyle}>
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View >
                <View >
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>שם המסלול:</Text>
                    <View style={styles.ButtonStyle}>
                    <Text >{this.props.nameOfRoutes} </Text>
                    </View>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>רמת הקושי:</Text>
                    <Text >{this.props.diff} </Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}> ק"מ: </Text>
                    <Text >{this.props.km}</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>משך זמן ההליכה:</Text>
                    <Text >{this.props.time} </Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}>סוג המסלול:</Text>
                    <Text >{this.props.kind} </Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.textTitleStyle}> פרטים:</Text>
                        <Text  >{this.props.detail} </Text>
                </View>
                </View>
                <View style={styles.textStyle}>
                    <AdminButton />
                </View>

            </View>

        );
    }
}
export default AdminUnitRoutes;

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
        height: "75%",
        width: "30%"
    },
    textStyle: {
        flexDirection: 'row-reverse',
     

    },
    ButtonStyle: {
        width:"69%",
       // marginLeft:100,
       


    },
    detailStyle: {
        height: 50,
        width: "69%",
        marginLeft: 111,
         height: "75%",

    },
    dateStyle: {
        height: 30,
        width: "50%",
        marginLeft: 180,
        marginTop: 10

    },
    textTitleStyle: {
       // alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 2
    },
    textDetailStyle: {
        //fontWeight: "normal",
        fontSize: 16,



        //alignSelf: "center"
    }


});