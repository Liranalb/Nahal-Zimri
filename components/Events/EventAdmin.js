import React, { Component, useState, useEffect } from "react";
import {  View, TextInput, Text, ScrollView, TouchableOpacity, Alert, RefreshControl, TouchableWithoutFeedback } from "react-native"
import HeaderComp from "../explore/HeaderComp";
import { db, storage } from '../../config/Firebase'
import EventBoxAdmin from "./EventBoxAdmin";
import uploadImage from '../../assets/functions/uploadSingleImage'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentAdmin } from "../DrawerContentAdmin";
import Icon from 'react-native-vector-icons/Entypo';

let photoUploaded = false, replace = false;
let isLoading = false;
let keyID;

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

function EventAdminScreen( { navigation }) {

    async function pressPhoto(key) {

        // setting the paths
        let imageID = "img" + key + ".jpg";
        let dataPath = 'Events/eve' + key;
        let storagePath = "Images/Events/" + imageID;

        isLoading = true;
        let result = await uploadImage(storagePath);

        if (replace === true) {

            storage.ref().child("Images/Events/" + imageID).getDownloadURL().then((url) => {

                db.ref('Events/eve' + key + "/imageLink").set(url);
                setLoaded(false);

            }).catch((error) => console.log(error))
            replace = false;
        }

        isLoading = false;
        if (result === -1) {
            return -1;
        }
        else {
            photoUploaded = true;
        }
    }

    function sendData(name, date, day, hour, location, details) {
        if (photoUploaded === false) {
            if (isLoading === true)
                alert("Still uploading image");
            else
                alert("Upload image first");
            return -1;
        }
        else {
            let eveId = 'eve' + keyID;
            let dataPath = 'Events/eve' + keyID;
            let imageID = "img" + keyID + ".jpg";
            let storagePath = "Images/Events/" + imageID;
            storage.ref().child(storagePath).getDownloadURL().then((url) => {
                let newEve = {
                    name: name,
                    date: date,
                    weekday: day,
                    hour: hour,
                    location: location,
                    details: details,
                    link: link,
                    id: eveId,
                    imageLink: url
                }
                db.ref(dataPath).set(newEve);
            }).catch((error) => console.log(error))
        }

        return 0;
    }


    let deleteImageFromStorage = (deleteID) => {

        let imageID = "img" + deleteID + ".jpg";
        console.log(deleteID);
        var desertRef = storage.ref("Images").child('Events/' + imageID);
        //Delete the file
        desertRef.delete().then(function () {
            return 0;
        }).catch(function (error) {
            return -1;
        });
    }


    const [name, onChangeName] = useState('');
    const [date, onChangeDate] = useState('');
    const [day, onChangeDay] = useState('');
    const [hour, onChangeHour] = useState('');
    const [imageLink, onChangeImageLink] = useState('');
    const [location, onChangeLocation] = useState('');
    const [details, onChangeDetails] = useState('');
    const [link, onChangeLink] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    let eventsArray = [];

    function refreshPage() {
        onChangeName("");
        onChangeDate("");
        onChangeDay("");
        onChangeHour("");
        onChangeLocation("");
        onChangeImageLink("");
        onChangeDetails("");
        onChangeLink("");
        setLoaded({ loaded: false });
        keyID = newPostKey();
        photoUploaded = false;
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    }, [refreshing]);

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
        return db.ref().child('Events').push().key;
    }


    // on mount
    useEffect(() => {
        keyID = newPostKey();
        console.log("Produced key:  " + keyID);

    }, []);
    // on unmount
    useEffect(() => {
        return () => {
            if (photoUploaded === true)
                deleteImageFromStorage(keyID);
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
            <View style={{ height: "89%", width: "96%", alignSelf: 'center' }}>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {
                        console.log("second"),
                        eventsArray.map((item) => {
                            return (
                                <View key={item.id} style={{marginTop:'2%'}}>
                                    <EventBoxAdmin imageUri={{ uri: item.imageLink }}
                                        name={item.name}
                                        date={item.date}
                                        weekday={item.weekday}
                                        hour={item.hour}
                                        location={item.location}
                                        details={item.details}
                                        id={item.id}
                                        link={item.link}
                                        onReplaceImagePress={() => {
                                            replace = true;
                                            deleteImageFromStorage(item.id.slice(3));//??
                                            pressPhoto(item.id.slice(3)); //???
                                        }}
                                        onDelete={() => {
                                            Alert.alert(
                                                //title
                                                'Hello',
                                                //body
                                                'האם למחוק את פריט המידע הזה?',
                                                [
                                                    {
                                                        text: 'כן', onPress: () => {
                                                            db.ref('Events/').child(item.id).remove();
                                                            deleteImageFromStorage(item.id.slice(3)); //??
                                                            setLoaded({ loaded: false });
                                                        }
                                                    },
                                                    { text: 'לא', onPress: () => console.log('No Pressed'), style: 'cancel' },
                                                ],
                                                { cancelable: false }
                                                //clicking out side of alert will not cancel
                                            );
                                        }
                                        }
                                    />
                                </View>
                            )
                        })
                    }
                    <View style={{ width: "95%", alignSelf: 'center' }}>
                        <Text style={{ marginTop: "3%" ,fontSize: 25, fontWeight: "bold", alignSelf: "center", alignItems: "center" }} >הוספת אירוע:</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <  TextInput
                                placeholder={"שם האירוע"}
                                style={styles.textInput}
                                onChangeText={text => onChangeName(text)}
                                value={name}

                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2.5%' }}>
                            <  TextInput
                                placeholder={"תאריך"}
                                style={styles.textInput}
                                onChangeText={text => onChangeDate(text)}
                                value={date}
                            />
                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '2.5%' }}>

                            <  TextInput
                                placeholder={"יום"}
                                style={styles.textInput}
                                onChangeText={text => onChangeDay(text)}
                                value={day}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2.5%' }}>
                            <  TextInput
                                placeholder={"שעה"}
                                style={styles.textInput}
                                onChangeText={text => onChangeHour(text)}
                                value={hour}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2.5%' }}>

                            <  TextInput
                                placeholder={"מיקום"}
                                style={styles.textInput}
                                onChangeText={text => onChangeLocation(text)}
                                value={location}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2.5%' }}>

                            <  TextInput
                                placeholder={"קישור להרשמה"}
                                style={styles.textInput}
                                onChangeText={text => onChangeLink(text)}
                                value={link}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2.5%' }}>

                            <  TextInput
                                placeholder={"פרטי האירוע"}
                                multiline={true}
                                style={styles.textInput}
                                onChangeText={text => onChangeDetails(text)}
                                value={details}
                            />
                        </View>



                        <View style={{ flexDirection: 'row', marginTop: '2.5%', alignSelf: 'center' }}>
                            <Text style={styles.textAddStyle}>הוספת תמונה:  </Text>
                            <TouchableWithoutFeedback

                                onPress={() => pressPhoto(keyID)}
                            >
                                <Icon name="images" size={40} color="green" />

                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            let result = sendData(name, date, day, hour, location, details, link);
                            console.log("result is: " + result);
                            if (result === 0)
                                refreshPage();
                        }}
                    >
                        <View style={styles.buttonStyle}>
                            <Text
                                style={{ alignSelf: 'center', fontSize: 20, color: 'white' }}
                            >הוסף</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View >


    )

}

const DrawerRep = createDrawerNavigator();

function EventAdmin() {
    return (
        <DrawerRep.Navigator initialRouteName="reports" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContentAdmin {...props} />}>
            <DrawerRep.Screen name="eventPage" component={EventAdminScreen} />

        </DrawerRep.Navigator>

    );
}

export default EventAdmin;

const styles = {


    textInput: {
        backgroundColor: "#FFF4E3",
        borderColor: "green",
        paddingHorizontal: 10,
        paddingVertical: 2,
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        alignSelf: "center",
        textAlignVertical: 'center',
    },

    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        width: "75%",
        height: "15%",
        alignSelf: "center",
        marginTop: "5%",
        marginBottom: "10%",
        borderRadius: 20,
        overflow: 'hidden'
    },

    editBar: {
        flexDirection: "row",
        alignSelf: "center",
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
    },
    textAddStyle: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: '3%'
    }
}


