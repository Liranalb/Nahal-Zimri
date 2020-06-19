import React, { useState, useEffect } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableWithoutFeedback } from "react-native"
import { View } from "native-base"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import EditInfoBox from './explore/EditInfoBox'
import { createStackNavigator } from '@react-navigation/stack';
import InfoComp from "./InfoComp"
import { db, storage } from '../config/Firebase'
import uploadImage from '../assets/functions/uploadSingleImage'
import sayCheese from '../assets/functions/takePhoto'

//import ImagePicker from 'react-native-image-picker';


let photoUploaded = false;
let keyID,dataType,currItem;

function getDate() {
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    let dateStr = date + "." + month + "." + year;
    return dateStr;
}
async function pressPhoto(source) {

    // setting the paths
    let imageID = "img" + keyID + ".jpg";
    let dataPath = 'Information/info' + keyID;
    let storagePath = "Images/Information/" + imageID;


    console.log("imageID is : " + imageID + "\n storagePath" + storagePath);
    let result;
    if (source === "camera")
        result = await sayCheese(storagePath);
    else
        result = await uploadImage(storagePath);
    console.log(" test \n" + result);
    if (result === -1) {

        console.log("\n\n ----------------failed ----------------\n\n");
        return -1;

    }
    photoUploaded = true;
    console.log("Out : " + photoUploaded);

    //     storage.ref().child(location).getDownloadURL().then( (url) => {
    //     db.ref(DB_Path+"/imageLink").set(url)
    //     return 0;
    //   })
}

function sendData(body, title, currentType) {

    if (photoUploaded === false) {
        alert("Upload image first");
        return -1;
    }

    else {

        let infoId = 'info' + keyID;
        let dataPath = 'Information/info' + keyID;
        let imageID = "img" + keyID + ".jpg";
        let storagePath = "Images/Information/" + imageID;
        storage.ref().child(storagePath).getDownloadURL().then((url) => {

            let date = getDate();
            let newInfo = {
                Date: date,
                Body: body,
                Title: title,
                Type: currentType,
                ImageLink: url,
                id: infoId
            }
            db.ref(dataPath).set(newInfo);
        })
    }

    return 0;


}

function InformationAdminScreen({ navigation }) {

    const [body, onChangeBody] = useState('');
    const [title, onChangeTitle] = useState('');
    // const [photoAdded, onPhotoAdded] = useState(false); 
    const [loaded, setLoaded] = useState(false);
    let infoArray = [];
    let currentType = dataType;   

    // refreshing the page after successfully adding data
    function refreshPage() {
        onChangeBody("");
        onChangeTitle("");
        setLoaded({ loaded: false });
        keyID = newPostKey();
        photoUploaded = false;
    }




    let data = null;
    db.ref('Information').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded");
            if (loaded === false) {
                setLoaded(true);
            }
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
            if (photoUploaded === true) {
                alert("photo should be deleted!");
                let imageID = "img" + keyID + ".jpg";
                var desertRef = storage.ref().child('Images/Inforamtion/' + imageID);
                //Delete the file
                desertRef.delete().then(function () {
                    console.log("deleted successfully")
                }).catch(function (error) {
                    console.log("delete failed:  " + error.val);

                });
            }

        }
    }, []);

    let convertDataToArray = (data, infoArray) => {
        if (data === null)
            return null;

        for (var info in data) {
            if (data.hasOwnProperty(info)) {
                if (data[info].Type === currentType) {
                    infoArray.push(data[info]);

                }


            }
        }
    }



    convertDataToArray(data, infoArray);



    return (
        <View>
            {console.log("rendered, key is :  " + keyID)}
            <HeaderComp />

            <View style={styles.containerStyle}>

                <View style={{ height: "100%", width: "100%", backgroundColor: '#E9DFD1' }}>

                    <View style={{ height: "50%", width: "100%" }}>
                        <ScrollView
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                        >

                            {infoArray.map((item) => {
                                return (
                                    <View key={item.id}>
                                       
                                        <View key>
                                            <EditInfoBox imageUri={{ uri: item.ImageLink }}
                                                headline={item.Title}
                                                body={item.Body}
                                                onDelete={() => {
                                                    Alert.alert(
                                                        //title
                                                        'Hello',
                                                        //body
                                                        'האם למחוק את פריט המידע הזה?',
                                                        [
                                                            {
                                                                text: 'כן', onPress: () => {
                                                                    db.ref('Information/').child(item.id).remove();
                                                                    setLoaded({ loaded: false });
                                                                }
                                                            },
                                                            { text: 'לא', onPress: () => console.log('No Pressed'), style: 'cancel' },
                                                        ],
                                                        { cancelable: false }
                                                        //clicking out side of alert will not cancel
                                                    );
                                                }}
                                                id={item.id}
                                                onExpandPress = { () => {
                                                    currItem= item;
                                                    navigation.navigate('infoAdminComp');
                                                }}
                                            />
                                        </View>
                                        
                                    </View>
                                )
                            })}




                        </ScrollView>
                    </View>

                    <View style={styles.editBoxStyle}>
                        <View style={{ flex: 1 }}>
                            <View style={{ marginLeft: 12, marginTop: 20 }}>
                                <TouchableWithoutFeedback
                                    onPress={() => { console.log("before func: " + keyID); pressPhoto("camera"); }}
                                >
                                    <View style={{ marginLeft: 12 }}>
                                        <Icon name="camera" size={30} color="white" />
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => pressPhoto("upload")}
                                >
                                    <View style={{ marginTop: 20, marginLeft: 12 }}>
                                        <Icon name="images" size={30} color="white" />
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        let result = sendData(body, title, currentType);
                                        console.log("result is: " + result);
                                        if (result === 0)
                                            refreshPage();
                                    }}
                                >
                                    <View style={styles.buttonStyle}>
                                        <Text
                                            style={{ alignSelf: 'center', marginTop: 20, fontSize: 18 }}
                                        >הוסף</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={{ flex: 5 }}>
                            <TextInput
                                style={styles.headlineInputStyle}
                                placeholder="הכנס כותרת"
                                value={title}
                                onChangeText={text => onChangeTitle(text)}
                            />

                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="הכנס תוכן"
                                multiline={true}
                                numberOfLines={4}
                                onChangeText={text => onChangeBody(text)}
                                value={body}
                            />
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    alert("photo should be deleted!");
                                    //Images/Inforamtion/img-MA2ccI8hczWJSg_91_K.jpg
                                    var desertRef = storage.ref().child('gs://nahal-zimri.appspot.com/Images/Information/img-MA2ccI8hczWJSg_91_K.jpg');
                                    //Delete the file
                                    desertRef.delete().then(function () {
                                        console.log("deleted successfully")
                                    }).catch(function (error) {
                                        console.log("delete failed:  " + error);

                                    });
                                }}>
                                <Text>JJJJJ</Text>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                </View>


            </View>

        </View>
    )
}






const InfoCompStack = createStackNavigator();



function InfoAdminComponent( {navigation}) {

    return (<InfoComp 
        headline={currItem.Title}
        body={currItem.Body}
        onCrossPress= { () => navigation.goBack()}
        imageUri={{ uri: currItem.ImageLink }}
        /> );
}


function InformationAdminPage(props) {

    dataType = props.dataType;
    

    return (
        <InfoCompStack.Navigator initialRouteName="infoAdminScreen">
            <InfoCompStack.Screen options={{ headerShown: false }} name="InfoAdminScreen" component={InformationAdminScreen} />
            <InfoCompStack.Screen options={{ headerShown: false }} name="infoAdminComp" component={InfoAdminComponent} />
        </InfoCompStack.Navigator>
    );
}

export default InformationAdminPage;

const styles = {
    containerStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAE5D3",
        borderWidth: 1,
        borderColor: 'gray'

    },
    editBoxStyle: {
        width: "100%",
        height: "29%",
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#545454',
        borderRadius: 7,
        backgroundColor: '#4C4C4B'
    },
    textInputStyle: {
        backgroundColor: "#FFF4E3",
        borderColor: "#004577",
        width: "90%",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 5
    },
    headlineInputStyle: {
        backgroundColor: "#FFF4E3",
        borderColor: "#004577",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 10

    },
    buttonStyle: {
        width: "100%",
        height: "45%",
        backgroundColor: '#FFF4E3',
        borderRadius: 20,
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'black'

    }
}