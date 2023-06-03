import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import { RefreshControl, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "native-base";
import HeaderComp from "../explore/HeaderComp";
//import firebase from "../config/Firebase";
import { db } from '../../config/Firebase';
import MapBoxUser from './MapsBoxUser';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "../DrawerContent";

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

function MapUserScreen({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    let mapsArray = [];
    const [loaded, setLoaded] = useState(false);

    //load data
    let data = null;
    db.ref('Maps').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded: " + loaded);
            if (loaded === false)
                setLoaded(true);

        }
    });

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    }, [refreshing]);

    let convertDataToArray = (data, mapsArray) => {
        if (data === null)
            return null;
        for (var map in data) {
            if (data.hasOwnProperty(map)) {
                mapsArray.push(data[map]);
            }
        }

    }

    convertDataToArray(data, mapsArray);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <HeaderComp
                openUserProfile={() => navigation.navigate('Current')}
                openUserMenu={() => navigation.dangerouslyGetParent().openDrawer()}
            />
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {
                    console.log("second"),
                    mapsArray.map((item) => {
                        return (
                            <View key={item.id} style={{ width: "96%", alignSelf: 'center', marginTop: "1%" }}>
                                <MapBoxUser imageUri={{ uri: item.imageLink }}
                                    name={item.name}
                                    location={item.location}
                                    details={item.details}
                                    link={item.link}
                                />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const DrawerMap = createDrawerNavigator();

function MapUserPage() {
    return (
        <DrawerMap.Navigator initialRouteName="reports" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContent {...props} />}>
            <DrawerMap.Screen name="mapPage" component={MapUserScreen} />

        </DrawerMap.Navigator>

    );
}

export default MapUserPage;

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

