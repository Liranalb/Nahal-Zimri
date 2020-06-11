import React, { Component } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import ReportBox from "./explore/ReportBox";

class NewOpenArt extends Component {

    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <HeaderComp />
                </View>
                <View style={styles.imageStyle}>
                    <Image
                        source={require('../assets/img/im2.jpeg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View>
                    <ScrollView>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleHeaderStyle}>טקס רשמי בהשתתפות ראש העיר</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>ביום שני השבוע התקיים טקס חניכת פינת הישיבה החדשה בנחל בהשתתפות ראש העיר</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textDetailStyle}>הטקס התקיים ברוב עם והדרת מלך, בטקס נשאו דברים חברי המנהל הקהילתי, חברי מועצת העיר וראש העיר. תושבים רבים מהשכונה הגיעו.</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default NewOpenArt;

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
