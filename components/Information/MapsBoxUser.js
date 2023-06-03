
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking,
    Alert

} from "react-native";
import { Divider } from "react-native-elements";

class MapBoxUser extends React.Component {
    render() {
        return (
            <View style={styles.mapStyle}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                        <Image
                            source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                    </View>
                </View >

                <View style={{ flex: 2 }}>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>שם המפה: </Text>
                        <Text numberOfLines={1} style={styles.textDetailStyle}>{this.props.name} </Text>
                    </View>
                    <Divider />
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>מיקום: </Text>
                        <Text numberOfLines={1} style={styles.textDetailStyle}>{this.props.location}</Text>
                    </View>
                    <Divider />
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>פרטים: </Text>
                        <Text numberOfLines={1} style={styles.textDetailStyle}>{this.props.details}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        if (this.props.link === undefined)
                            Alert.alert("", "המפה אינה קיימת");
                        else
                            Linking.openURL(this.props.link);
                    }}>

                        <View style={styles.buttonStyle}>
                            <Text
                                style={styles.buttonText}>פתיחת המפה</Text>

                        </View>

                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}
export default MapBoxUser;

const styles = StyleSheet.create({

    mapStyle: {
        backgroundColor: "#F4D5A7",
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 1.1,
        fontSize: 20,
        marginTop: "2%",
        width: '100%',
        //height:155,
        flexDirection: 'row-reverse'
    },

    textStyle: {
        flexDirection: 'row',
        //flex:1

    },
    ButtonStyle: {
        width: "69%",
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

        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 2

    },
    textDetailStyle: {
        //fontWeight: "normal",
        fontSize: 16,
        flex: 1,
        textAlign: 'left'

        //alignSelf: "center"
    },

    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
        marginRight: "3%",
        marginLeft: "3%"
    },

    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#FF8C37",
        borderColor: "#FF8C37",
        borderRadius: 10,
        borderWidth: 2,
        alignSelf: "center",
        marginTop: "2%",
        marginBottom: "3%",

    }

});

