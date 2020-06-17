import React, { Component, useState } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { View } from "native-base"
import { Image, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp"
import NewOpenRoute from "./NewOpenRoute"
import ReportBox from "./explore/ReportBox"
import { db } from '../config/Firebase'
import UnitRoutes from "./UnitRoutes"

var currItem;
var currImg;

function RoutesUserScreen(props, { navigation }) {
    let currentType = props.dataType;
    let routesArray = [];
    const [loaded, setLoaded] = useState(false);

    //load data
    let data = null;
    db.ref('Routes').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded: " + loaded);
            if (loaded === false)
                setLoaded(true);

        }
    });




    let convertDataToArray = (data, routesArray) => {
        if (data === null)
            return null;
        for (var route in data) {
            if (data.hasOwnProperty(route)) {
                if (data[route].PathType === currentType) {
                    routesArray.push(data[route]);
 
                }
            }
        }

    }

    convertDataToArray(data, routesArray);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <View>
                <HeaderComp />
            </View>
            <ScrollView>
                {
                    console.log("second"),
                    routesArray.map((item) => {
                        return (
                            <View>
                                <TouchableWithoutFeedback onPress={() => {navigation.navigate('newOpRo'); currItem = item;  currImg={ uri: item.imageLink }}}>
                                    <View>
                                        <UnitRoutes imageUri={{ uri: item.imageLink }}
                                            name={item.name}
                                            level={item.level}
                                            km={item.km}
                                            duration={item.duration}
                                            type={item.type}
                                            details={item.details}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

function NewOpenRouteScreen() {
    return (
        <NewOpenRoute item={currItem} img={currImg}/>
    );
}

const logStack = createStackNavigator();

function RoutesUser( props ) { 
    console.log(props.dataType);
    function RoutesUserScreenFunc () { 
        return <RoutesUserScreen dataType={props.dataType}/>
    }
    return (
        <logStack.Navigator initialRouteName="routesU">
            <logStack.Screen options={{ headerShown: false }} name="routesU" component={RoutesUserScreenFunc} />

            <logStack.Screen name="newOpRo" options={{ headerShown: false }}
                component={NewOpenRouteScreen}/>

        </logStack.Navigator>
    );
}

export default RoutesUser;

const styles = {
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