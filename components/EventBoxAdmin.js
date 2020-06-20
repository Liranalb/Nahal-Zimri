
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from "react-native";
import AdminButton from './AdminButton'

class EventBoxAdmin extends React.Component {
    render() {
        return (
            <View style={styles.eventStyle}>
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View>
                        <Button
                            title="מחק"
                            color="green"
                            onPress={this.props.onDelete}
                        />
                    </View>
                </View >
                <View >
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>שם האירוע:</Text>
                        <Text style={styles.textDetailStyle}>{this.props.name} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>תאריך:</Text>
                        <Text style={styles.textDetailStyle}>{this.props.date}</Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>יום:</Text>
                        <Text style={styles.textDetailStyle}>{this.props.weekday} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>שעה:</Text>
                        <Text style={styles.textDetailStyle}>{this.props.hour} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>מיקום:</Text>
                        <Text style={styles.textDetailStyle}>{this.props.location} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>פרטים:</Text>
                        <Text style={styles.textDetailStyle}>{this.props.details} </Text>
                    </View>
                </View>

            </View>

        );
    }
}
export default EventBoxAdmin;

const styles = StyleSheet.create({

    eventStyle: {
        backgroundColor: "#F4D5A7",
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
        height: "60%",
        width: "30%"
    },
    textStyle: {
        flexDirection: 'row-reverse',

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

