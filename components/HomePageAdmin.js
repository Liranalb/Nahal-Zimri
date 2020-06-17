import React, { Component } from "react"
import { Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TouchableWithoutFeedback, TextInput, Text, Button, ScrollView, TouchableOpacity, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container } from "native-base"
import LogoHeaderComponent from "./explore/LogoHeaderComponent";
import Icon from 'react-native-vector-icons/Entypo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReportsAdmin from './ReportsAdmin'
import EventAdmin from './EventAdmin'
import AdminRoutes from './AdminRoutes'
import InfoAdmin from './InfoAdmin'

//  import {Test} from './InfoCatagories';
import InfoCatagoriesAdmin from './InfoCatagoriesAdmin'
import PathCatagoriesAdmin from './PathCatagoriesAdmin';
// import {Test} from './InfoCatagories';



function HomeAdminScreen({ navigation }) {

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <View>
                <Header style={{ width: "100%", height: "100%" }}
                    backgroundColor='#FAE5D3'
                    leftComponent={<Icon name="user" size={30} color='black' />}
                    centerComponent={<LogoHeaderComponent imageUri={require('../assets/img/logo.png')} />}
                    rightComponent={{ icon: 'menu', color: 'black' }}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('InfAd')}>
                <View style={styles.infoStyle}>
                    <Image
                        source={require('../assets/img/article.jpg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={styles.textStyle}>
                        <Text>כתבות</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.routesStyle}>
                 <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('InfoCat')}>

                    <View style={styles.routesStyleLeft}>
                        <Image
                            source={require('../assets/img/flower.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>מידע</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('RouAd')}>
                    <View style={styles.routesStyleRight}>
                        <Image
                            source={require('../assets/img/travel.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>מסלולים</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('EventsAdmin')}>
                <View style={styles.infoStyle}>
                    <Image
                        source={require('../assets/img/fox.jpg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={styles.textStyle}>
                        <Text>אירועים</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Reports')}>
                <View style={styles.observationsStyle}>
                    <Image
                        source={require('../assets/img/obs.jpeg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={styles.textStyle}>
                        <Text>תצפיות</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )

}

function ReportsAdminScreen() {
    return (
        <ReportsAdmin />
    );
}

function InfoAdminScreen() {
    return (
        <InfoAdmin />
    );
}

function AdminRoutesScreen() {
    return (
        <PathCatagoriesAdmin />
    );
}

function InfoCatagoriesScreen() {
    return (
        <InfoCatagoriesAdmin />
    );
}

function EventAdminScreen() {
    return (
        <EventAdmin />
    );
}


const Stack = createStackNavigator();

function HomePageAdmin() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeAdmin"  >

                <Stack.Screen options={{ headerShown: false }} name="HomeAdmin" component={HomeAdminScreen} />
                <Stack.Screen name="InfAd" options={{ headerShown: false }}
                    component={InfoAdminScreen} />
                <Stack.Screen options={{ headerShown: false }} name="RouAd" component={AdminRoutesScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Reports" component={ReportsAdminScreen} />
                <Stack.Screen options={{ headerShown: false }} name="EventsAdmin" component={EventAdminScreen} />
                <Stack.Screen options={{ headerShown: false }} name="InfoCat" component={InfoCatagoriesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default HomePageAdmin;

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