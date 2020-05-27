import React, { Component } from "react"
import {Button, Header, ListItem } from "react-native-elements"
import {Image, View, TouchableWithoutFeedback, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container } from "native-base"
import HeaderComp from "./HeaderComp";

class HomePageUser extends Component {
    render() {
        return(
            <View style={{width: "100%", height: "100%", backgroundColor: '#FAE5D3'}}>
                <View>
                    <HeaderComp/>
                </View>

                <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                    <View style = {styles.infoStyle}>
                        <Image 
                            source={require('../assets/img/article.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>כתבות</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                
                <View style = {styles.routesStyle}>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style = {styles.routesStyleLeft}>
                            <Image 
                                source={require('../assets/img/travel.jpg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <Text>מסלולי טיול</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style = {styles.routesStyleRight}>
                            <Image 
                                source={require('../assets/img/flower.jpg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <Text>מסלולי פריחה</Text>
                            </View>
                        </View> 
                    </TouchableWithoutFeedback>
                </View> 
                <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                    <View style = {styles.infoStyle}>
                        <Image 
                            source={require('../assets/img/fox.jpg')}
                            style={{ width: "100%", height: "100%"}}
                        />
                        <View style={styles.textStyle}>
                            <Text>אירועים</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                    <View style = {styles.observationsStyle}>
                        <Image 
                            source={require('../assets/img/obs.jpeg')}
                            style={{ width: "100%", height: "100%"}}
                        />
                        <View style={styles.textStyle}>
                            <Text>תצפיות</Text> 
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default HomePageUser;

const styles = {
    textStyle: {
        position: 'absolute',  
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: '#F0B27A', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'black'
    },
    dataStyle: {
        backgroundColor: "#FAE5D3"
    },
    infoStyle: {
        backgroundColor: "#F0B27A",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        height: "26%",
        alignSelf: "center",
        marginTop: 10
    },
    routesStyle: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: "90%",
        height: "18%",
        alignSelf: "center",
        marginTop: 10
    },
    routesStyleLeft: {
        backgroundColor: "#ff8c00",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "49%",
        height: "100%",
        alignSelf: "center",
        marginRight: 10
    },
    routesStyleRight: {
        backgroundColor: "#ff8c00",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "48%",
        height: "100%",
        alignSelf: "center",
    },
    observationsStyle: {
        backgroundColor: "#F0B27A",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        height: "10%",
        alignSelf: "center",
        marginTop: 10
    }
}
