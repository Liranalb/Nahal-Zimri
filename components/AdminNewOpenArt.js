import React, { Component } from "react"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import HeaderComp from "./HeaderComp";


class AdminNewOpenArt extends Component {

    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <HeaderComp />

                </View>
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View>
                    <ScrollView>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleHeaderStyle}> {this.props.title} </Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>{this.props.detail}</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textDetailStyle}>{this.props.content}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default AdminNewOpenArt;

const styles = {
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'relative',
        borderWidth: 3,
        height: "30%",
        width: "95%"
    },
    textStyle: {
        flexDirection: 'row-reverse'
    },
    textTitleHeaderStyle:{
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 24,
        marginLeft: 10
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
        alignSelf: "center"
    },
    CheckBoxStyle: {
        backgroundColor: "#F6D365",
        borderColor: "#FFAF50",
        borderWidth: 2,
        width: "30%",
        flex: 1,
        marginTop: 10
    }
}
