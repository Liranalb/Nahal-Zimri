import React, { Component } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import ReportBox from "./explore/ReportBox";

class RoutesUser extends Component {

    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <HeaderComp />
                </View>
                <View style={styles.imageStyle}>
                    <Image
                        source={require('../assets/img/route.png')}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View>
                    <ScrollView>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>שם המסלול</Text>
                            <Text style={styles.textDetailStyle}>גל-קראוס שביל ימין</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>רמת קושי</Text>
                            <Text style={styles.textDetailStyle}>קל</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>ק"מ</Text>
                            <Text style={styles.textDetailStyle}>2.5</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>פרטים</Text>
                            <Text style={styles.textDetailStyle}>מתאים לילדים ולמשפחות</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>נ.צ</Text>
                            <Text style={styles.textDetailStyle}>123.123.123</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>המלצות</Text>
                            <Text style={styles.textDetailStyle}>"מסלול מרתק ולא קשה מידיי!" "נהנינו מכל רגע!"</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>בעלי החיים במסלול</Text>
                            <Text style={styles.textDetailStyle}>צבאים, שפני סלע.</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>סימון</Text>
                            <Text style={styles.textDetailStyle}>כחול לבן</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default RoutesUser;

const styles = {
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'relative',
        borderWidth: 3,
        height: "50%",
        width: "95%"
    },
    textStyle: {
        flexDirection: 'row-reverse'
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
