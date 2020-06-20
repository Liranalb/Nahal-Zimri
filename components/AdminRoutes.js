import React, { useState } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import UnitRoutes from "./UnitRoutes";
import AdminButton from "./AdminButton";
import AdminUnitRoutes from './AdminUnitRoutes'
import NewOpenRoute from "./NewOpenRoute";
import { Icon } from 'react-native-elements'
import { db } from '../config/Firebase'

var currItem;
var currImg;
var dataType;

function AdminRoutesScreen({ navigation }) {
  
    let currentType = dataType;
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
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('newOpRo')}>
                    <View>
                        <AdminUnitRoutes
                            imageUri={require('../assets/img/map.png')}
                            nameOfRoutes="גל-קראוס שביל ימין"
                            diff="בינוני"
                            km="2.5"
                            time="40 דקות"
                            kind="מעגלי"
                            detail="כל הציבור מוזמן"
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('newOpRo')}>
                    <View>
                        <AdminUnitRoutes
                            imageUri={require('../assets/img/map.png')}
                            nameOfRoutes="שביל לאורך הפריחה"
                            diff="קשה"
                            km="4"
                            time="70 דקות"
                            kind="הלוך חזור"
                            detail="מסלול למיטיבי לכת"
                        />
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('newOpRo')}>
                    <View>
                        <AdminUnitRoutes
                            imageUri={require('../assets/img/map.png')}
                            nameOfRoutes="ביקור בבית הצבאים"
                            diff="קל"
                            km="2"
                            time="35 דקות"
                            kind="קו"
                            detail="טיול מהנה"
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('newOpRo')}>
                    <View>
                        <AdminUnitRoutes
                            imageUri={require('../assets/img/map.png')}
                            nameOfRoutes="גל-קראוס שביל שמאל"
                            diff="בינוני"
                            km="3.5"
                            time="60 דקות"
                            kind="הלוך-חזור"
                            detail="כל הציבור מוזמן"
                        />
                    </View>
                </TouchableWithoutFeedback> */}
                {
                    console.log("second"),
                    routesArray.map((item) => {
                        return (
                            <View>
                                <TouchableWithoutFeedback onPress={() => {navigation.navigate('newOpRo'); currItem = item;  currImg={ uri: item.imageLink }}}>
                                    <View>
                                        <AdminUnitRoutes imageUri={{ uri: item.imageLink }}
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



                <TouchableWithoutFeedback onPress={() => alert("alert!")}>
                    <Text style={{ fontWeight: "bold" }} > טען יותר...</Text>
                </TouchableWithoutFeedback>
                <Text>הוספת מסלול</Text>
                <View>
                    <Text>שם המסלול :</Text>
                    <TextInput style={styles.textInput}> </TextInput>
                    <Text>רמת הקושי:</Text>
                    <TextInput style={styles.textInput}> </TextInput>
                    <Text>ק"מ:</Text>
                    <TextInput style={styles.textInput}> </TextInput>
                    <Text>משך זמן ההליכה:</Text>
                    <TextInput style={styles.textInput}> </TextInput>
                    <Text>סוג המסלול:</Text>
                    <TextInput style={styles.textInput}> </TextInput>
                    <Text>פרטים:</Text>
                    <TextInput style={styles.textInput}> </TextInput>
                </View>
                
                 <TouchableWithoutFeedback
                    onPress={() => {
                        /*let result = sendData(name, date, day, hour, location, link, details);
                        console.log("result is: " + result);
                        if (result === 0)
                            refreshPage();*/
                    }}
                >
                    <View style={styles.buttonStyle}>
                        <Text
                            style={{ alignSelf: 'center', marginTop: "5%", fontSize: 18 }}
                        >הוסף</Text>
                    </View>
                </TouchableWithoutFeedback>
                
            </ScrollView>
        </View>
    )
}

/*
<Icon name="camera" size={30}
                    color="black" />
<Button style={styles.buttonStyle}
                    onPress={() => alert('Pressed!')}
                    title="עדכן"


                />
*/
function NewOpenRouteScreen() {
    return (
        <NewOpenRoute item={currItem} img={currImg}/>
    );
}

const logStack = createStackNavigator();

function AdminRoutes(props) { //for navigation. not in use yet
    dataType= props.dataType;

    return (
        
        <logStack.Navigator initialRouteName="routesA">
            <logStack.Screen options={{ headerShown: false }} name="routesA" component={AdminRoutesScreen} />

            <logStack.Screen name="newOpRo" options={{ headerShown: false }}
                component={NewOpenRouteScreen} />

        </logStack.Navigator>
        
    );
}


export default AdminRoutes;

const styles = {
    
    /*textInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 15,
    },*/
    textInput: {
        backgroundColor: "#FFF4E3",
        borderColor: "green",
        width: "90%",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 5
        /*height: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white'*/
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
        fontSize: 10,
        width: "30%",
        height: "7%",
        alignSelf: "center",
        marginTop: "5%",
        marginBottom: "10%",
        overflow: 'hidden'
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