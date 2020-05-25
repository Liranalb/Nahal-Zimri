import React, { Component } from "react"
import {Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from "react-navigation-stack";*/
import {Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container } from "native-base"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import LogoHeaderComponent from "./LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp";

class RoutesUser extends Component {
    render() {
        return(
            <View style={{width: "100%", height: "100%", backgroundColor: '#FAE5D3'}}>
                <ScrollView>
                    <View>
                        <HeaderComp/>
                    </View>
                    <View style = {styles.routeStyle}>
                        <View style = {styles.imageStyle}>
                            <Image />
                        </View>
                        <View style = {styles.textStyle}> /*Tag*/
                            <Text style = {styles.textTitleStyle}> מסלול</Text>
                            <Text style = {styles.textTitleStyle}>פריחה\טיול</Text>
                        </View>
                        <View style = {styles.textStyle}> /*Name of route*/
                            <Text style = {styles.textTitleStyle}></Text>
                        </View>
                        <View style = {styles.textStyle}> /*Details of route*/
                            <Text style = {styles.textDetailStyle}></Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default RoutesUser;


const styles = {
    headerStyle: {
        
    },
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