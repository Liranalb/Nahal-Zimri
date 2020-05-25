import React, { Component } from "react"
import {Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import {Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";

class EventUser extends Component {
    render() {
        return(
            <View style={{width: "100%", height: "100%", backgroundColor: '#FAE5D3'}}>
                <ScrollView>
                    <View>
                        <HeaderComp/>
                    </View>
                    <View style = {styles.eventStyle}>
                        <View style = {styles.imageStyle}>
                            <Image  
                                source={require('../assets/img/ev1.jpeg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שם האירוע</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> תאריך</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> יום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שעה</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> מיקום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> פרטים</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                    </View>
                    <View style = {styles.eventStyle}>
                        <View style = {styles.imageStyle}>
                            <Image></Image>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שם האירוע</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> תאריך</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> יום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שעה</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> מיקום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> פרטים</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                    </View>
                    <View style = {styles.eventStyle}>
                        <View style = {styles.imageStyle}>
                            <Image></Image>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שם האירוע</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> תאריך</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> יום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שעה</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> מיקום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> פרטים</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                    </View>
                    <View style = {styles.eventStyle}>
                        <View style = {styles.imageStyle}>
                            <Image></Image>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שם האירוע</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> תאריך</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> יום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> שעה</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> מיקום</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}>
                            <Text style = {styles.textTitleStyle}> פרטים</Text>
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default EventUser;

const styles = {
    headerStyle: {
        
    },
    eventStyle: {
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
        borderWidth: 4,
        height: "40%",
        width: "30%"
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
    }
}