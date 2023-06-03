import React, { Component, useState, useEffect } from "react";
import { View, TextInput, Text, ScrollView, TouchableOpacity, Alert, RefreshControl, TouchableWithoutFeedback } from "react-native"
import HeaderComp from "../explore/HeaderComp";
import { db, storage } from '../../config/Firebase'
import MapBoxAdmin from './MapsBoxAdmin';
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

function MapAdminScreen({ navigation }) {

    async function pressPhoto(key) {

        // setting the paths
        let imageID = "img" + key + ".jpg";
        let dataPath = 'Maps/mapa' + key;
        let storagePath = "Images/Maps/" + imageID;

        isLoading = true;
        let result = await uploadImage(storagePath);

        if (replace === true) {

            storage.ref().child("Images/Maps/" + imageID).getDownloadURL().then((url) => {

                db.ref('Maps/mapa' + key + "/imageLink").set(url);
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

    function sendData(name, location, details) {
        if (photoUploaded === false) {
            if (isLoading === true)
                alert("Still uploading image");
            else
                alert("Upload image first");
            return -1;
        }
        else {
            let mapId = 'mapa' + keyID;
            let dataPath = 'Maps/mapa' + keyID;
            let imageID = "img" + keyID + ".jpg";
            let storagePath = "Images/Maps/" + imageID;
            storage.ref().child(storagePath).getDownloadURL().then((url) => {
                let newMap = {
                    name: name,
                    location: location,
                    details: details,
                    link: link,
                    id: mapId,
                    imageLink: url
                }
                db.ref(dataPath).set(newMap);
            }).catch((error) => console.log(error))
        }

        return 0;
    }

    let deleteImageFromStorage = (deleteID) => {

        let imageID = "img" + deleteID + ".jpg";
        console.log(deleteID);
        var desertRef = storage.ref("Images").child('Maps/' + imageID);
        //Delete the file
        desertRef.delete().then(function () {
            return 0;
        }).catch(function (error) {
            return -1;
        });
    }

    const [name, onChangeName] = useState('');
    const [imageLink, onChangeImageLink] = useState('');
    const [location, onChangeLocation] = useState('');
    const [details, onChangeDetails] = useState('');
    const [link, onChangeLink] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    let mapsArray = [];

    function refreshPage() {
        onChangeName("");
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
    db.ref('Maps').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded: " + loaded);
            if (loaded === false)
                setLoaded(true);

        }
    });

    let newPostKey = () => {
        return db.ref().child('Maps').push().key;
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
            <View style={{ height: "89%", width: "96%", alignSelf: 'center' }}>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {
                        console.log("second"),
                        mapsArray.map((item) => {
                            return (
                                <View key={item.id} style={{ marginTop: '2%' }}>
                                    <MapBoxAdmin imageUri={{ uri: item.imageLink }}
                                        name={item.name}
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
                                                            db.ref('Maps/').child(item.id).remove();
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
                        <Text style={{ marginTop: "3%", fontSize: 25, fontWeight: "bold", alignSelf: "center", alignItems: "center" }} >הוספת מפה:</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <  TextInput
                                placeholder={"שם המפה"}
                                style={styles.textInput}
                                onChangeText={text => onChangeName(text)}
                                value={name}

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
                                placeholder={"קישור למפה"}
                                style={styles.textInput}
                                onChangeText={text => onChangeLink(text)}
                                value={link}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2.5%' }}>

                            <  TextInput
                                placeholder={"פרטי המפה"}
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
                            let result = sendData(name, location, details, link);
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

function MapAdminPage() {
    return (
        <DrawerRep.Navigator initialRouteName="reports" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContentAdmin {...props} />}>
            <DrawerRep.Screen name="eventPage" component={MapAdminScreen} />

        </DrawerRep.Navigator>

    );
}

export default MapAdminPage;

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
        height: "25%",
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

