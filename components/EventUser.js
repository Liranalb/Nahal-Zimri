import React, { Component , useState, useEffect, useLayoutEffect } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Header, ListItem, CheckBox, Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import { NavigationContainer } from '@react-navigation/native';
import EditReports from "./explore/EditReports"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
//import firebase from "../config/Firebase"
import ImagePicker from 'react-native-image-crop-picker';
import { db } from '../config/Firebase'
import EventBoxUser from "./EventBoxUser";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "./DrawerContent";

function EventUserScreen( {navigation }) {

        let eventsArray = [];
        const [loaded, setLoaded] = useState(false); 


        //load data
        let data = null;
        db.ref('Events').on('value', function (snapshot) {
            const exist = (snapshot.val() !== null);
            if (exist) {
                data = snapshot.val();
                console.log("data loaded: " + loaded);
                if (loaded === false)
                    setLoaded(true);

            }
        });




        let convertDataToArray = (data, eventsArray) => {
            if (data === null)
                return null;
            for (var event in data) {
                if (data.hasOwnProperty(event)) {
                    eventsArray.push(data[event]);
                }
            }

        }

        convertDataToArray(data, eventsArray);

        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <HeaderComp
                openUserProfile={() => navigation.navigate('Current')}
                openUserMenu={() => navigation.dangerouslyGetParent().openDrawer()}
            />
                <ScrollView>
                    {
                        console.log("second"),
                        eventsArray.map((item) => {
                            return (
                                <EventBoxUser imageUri={{ uri: item.imageLink }}
                                    name={item.name}
                                    date={item.date}
                                    weekday={item.weekday}
                                    hour={item.hour}
                                    location={item.location}
                                    details={item.details}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }

const DrawerEvent = createDrawerNavigator();

function EventUser() {
    return (
        <DrawerEvent.Navigator initialRouteName="reports" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContent {...props} />}>
            <DrawerEvent.Screen name="eventPage" component={EventUserScreen} />

        </DrawerEvent.Navigator>

    );
}


export default EventUser;

const styles = {
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
    }
}


