import React, { Component, useState } from "react"
import { Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import AdminButton from "./AdminButton";
import { db } from '../config/Firebase'
import EventBoxAdmin from "./EventBoxAdmin";

function EventAdmin() {
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
            <View>
                <HeaderComp />
            </View>
            <ScrollView>
                {
                    console.log("second"),
                    eventsArray.map((item) => {
                        return (
                            <EventBoxAdmin imageUri={{ uri: item.imageLink }}
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
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('newOpAr')}>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }} > טען יותר...</Text>
                        </View>
                    </TouchableOpacity>

                    <Text>שם האירוע:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChange(text)}
                    //value={detail}
                    />
                    <Text>תאריך:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text1 => onChange1(text1)}
                    //value={detail1}
                    /><Text>יום:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text2 => onChange2(text2)}
                    //value={detail2}
                    />
                    <Text>שעה:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text2 => onChange2(text2)}
                    //value={detail2}
                    />
                    <Text>מיקום:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text2 => onChange2(text2)}
                    //value={detail2}
                    />
                    <Text>פרטים:</Text>
                    <  TextInput

                        style={{ height: 80, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
                        onChangeText={text2 => onChange2(text2)}
                    //value={detail2}
                    />


                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white' }}>הוסף</Text>
                    </TouchableOpacity >
                </View>
            </ScrollView>
        </View>
    )
}

export default EventAdmin;

const styles = {


    textInput: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white'
    },

    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
        fontSize: 10,
        width: "40%",
        height: "3%",
        alignSelf: "center",
        marginTop: 5,
        marginBottom: "10%",
        overflow: 'hidden'
    },

    editBar: {
        flexDirection: "row",
        alignSelf: "center",
        //width:"100%"



    },

    adminEdit: {
        backgroundColor: '#FFAF50',
        borderColor: "#FFAF50",
        alignSelf: "center",
        width: '54%',
        marginTop: 2,


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
        marginTop: 1,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "75%",
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