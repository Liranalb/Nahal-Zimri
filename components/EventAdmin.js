import React, { Component, useState , useEffect} from "react";
import { Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Alert, unstable_enableLogBox, TouchableWithoutFeedback } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import AdminButton from "./AdminButton";
import { db } from '../config/Firebase'
import EventBoxAdmin from "./EventBoxAdmin";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "./DrawerContent";

//let photoUploaded = false;
let keyID;

function sendData(name, date, day, hour, location, link, details) {
    let eveId = 'eve' + keyID;
    let dataPath = 'Events/eve' + keyID;
    let newEve = {
        name:name,
        date:date,
        weekday:day,
        hour:hour,
        location:location,
        imageLink:link,
        details:details,
        id: eveId
    }
    db.ref(dataPath).set(newEve);
    return 0;
}

function EventAdminScreen( { navigation } ) {
    let eventsArray = [];
    const [name, onChangeName] = useState('');
    const [date, onChangeDate] = useState('');
    const [day, onChangeDay] = useState('');
    const [hour, onChangeHour] = useState('');
    const [location, onChangeLocation] = useState('');
    const [link, onChangeLink] = useState('');
    const [details, onChangeDetails] = useState('');
    const [loaded, setLoaded] = useState(false);


    function refreshPage() {
        onChangeName("");
        onChangeDate("");
        onChangeDay("");
        onChangeHour("");
        onChangeLocation("");
        onChangeLink("");
        onChangeDetails("");
        setLoaded({ loaded: false });
        keyID = newPostKey();
        //photoUploaded = false;
    }

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

    let newPostKey = () => {
        return db.ref().child('Inforamtion').push().key;
    }


    // on mount
    useEffect(() => {
        keyID = newPostKey();
        console.log("Produced key:  " + keyID);

    }, []);
    // on unmount
    useEffect(() => {
        return () => {

        }
    }, []);

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
                            <EventBoxAdmin imageUri={{ uri: item.imageLink }}
                                name={item.name}
                                date={item.date}
                                weekday={item.weekday}
                                hour={item.hour}
                                location={item.location}
                                details={item.details}
                                item={item}
                                onDelete= { () => {
                                    Alert.alert(
                                        //title
                                        'Hello',
                                        //body
                                        'האם למחוק את פריט המידע הזה?',
                                        [
                                          {text: 'כן', onPress: () => {
                                              db.ref('Events/').child(item.id).remove();
                                              setLoaded({loaded: false});
                                          }},
                                          {text: 'לא', onPress: () => console.log('No Pressed'), style: 'cancel'},
                                        ],
                                        { cancelable: false }
                                        //clicking out side of alert will not cancel
                                      );
                                    }
                                }
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
                        onChangeText={text => onChangeName(text)}
                        value={name}
                    />
                    <Text>תאריך:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeDate(text)}
                        value={date}
                    /><Text>יום:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text => onChangeDay(text)}
                        value={day}
                    />
                    <Text>שעה:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text => onChangeHour(text)}
                        value={hour}
                    />
                    <Text>מיקום:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text => onChangeLocation(text)}
                        value={location}
                    />
                    <Text>לינק:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text => onChangeLink(text)}
                        value={link}
                    />
                    <Text>פרטים:</Text>
                    <  TextInput

                        style={styles.textInput}
                        onChangeText={text => onChangeDetails(text)}
                        value={details}
                    />


                </View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        let result = sendData(name, date, day, hour, location, link, details);
                        console.log("result is: " + result);
                        if (result === 0)
                            refreshPage();
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

const DrawerRep = createDrawerNavigator();

function EventAdmin() {
    return (
        <DrawerRep.Navigator initialRouteName="reports" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContent {...props} />}>
            <DrawerRep.Screen name="eventPage" component={EventAdminScreen} />

        </DrawerRep.Navigator>

    );
}

export default EventAdmin;

const styles = {


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
        height: "5%",
        alignSelf: "center",
        marginTop: "5%",
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