import React, { Component, useState, useEffect } from "react"
import { Header, ListItem } from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, CheckBox, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
/*import ReportBox from "./ReportBox"*/
import InfoUnitAdmin from "./InfoUnitAdmin"
import AdminNewOpenArt from "./AdminNewOpenArt";
import { db, storage } from '../config/Firebase'
import uploadImage from '../assets/functions/uploadSingleImage'
import sayCheese from '../assets/functions/takePhoto'
import Icon from 'react-native-vector-icons/Entypo';

var isCheckOn = false
export let dataType = ""
export let photoUploaded = false;
export let keyID
let currItem
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
    let dataPath = 'Articles1/info' + keyID;
    let storagePath = "Images/Articles1/" + imageID;


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


}

function sendData(id) {

    if (photoUploaded === false) {
        alert("Upload image first");
        return -1;
    }

    else {

        let infoId = 'info' + keyID;
        let dataPath = 'Articles1/info' + keyID;
        let imageID = "img" + keyID + ".jpg";
        let storagePath = "Images/Articles1/" + imageID;
        storage.ref().child(storagePath).getDownloadURL().then((url) => {
            db.ref('Articles1/' + id).child('imageLink/').set(url)




        })
    }
    return 0;

}

function InfoAdminScreen({ navigation }) {
    const [detail, onChange] = useState('');
    const [detail1, onChange1] = useState('');
    const [detail2, onChange2] = useState('');
    const [detail3, onChange3] = useState('');
    const [checkBoxState1, setChangeBox1] = useState(false);
    const [checkBoxState2, setChangeBox2] = useState(false);
  
    const [loaded, setLoaded] = useState(false);


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
                var desertRef = storage.ref().child('Images/Articles1/' + imageID);
                //Delete the file
                desertRef.delete().then(function () {
                    console.log("deleted successfully")
                }).catch(function (error) {
                    console.log("delete failed:  " + error.val);

                });
            }

        }
    }, []);
    let newPostKey = () => {
        return db.ref().child('Inforamtion').push().key;
    }
    let data = null;
    console.log("data loaded");
    function refreshPage() {
        setLoaded({ loaded: false });
        keyID = newPostKey();
        photoUploaded = false;
    }

    db.ref('Articles1').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded");
        }
        if (loaded === false) {
            setLoaded(true);
        }
    });
    function removeItem(id) {
        db.ref('Articles1/').child(id).remove()

    }
    function onSubmit(type, title, content, description) {
        if (photoUploaded === false) {
            alert("Upload image first");
            return -1;
        }
      
       
            if ((type != "כתבות" && type!="חידות")) {
                alert('סוג מידע לא נתמך')
                return -1
            }
            if( title=="" || content=="" || description=="")
            {
                alert('אנא מלא\י את כל שדות הטקסט')
                return -1
            }
                let infoId = 'info' + keyID;
                let dataPath = 'Articles1/info' + keyID;
                let imageID = "img" + keyID + ".jpg";
                let storagePath = "Images/Articles1/" + imageID;
                let date=getDate()
                storage.ref().child(storagePath).getDownloadURL().then((url)=>{
                var newData = {
                    Id: keyID ,
                    Title: title,
                    Date:date,
                    Content: content,
                    Description: description,
                    Catagory: type,
                    imageLink: url
                }
                db.ref('Articles1/' + keyID).set(newData, function (error) {

                    if (error) {
                        console.log('The write failed...')
                    } else {
                        console.log('Data saved successfully!')
                    }
                });
               })
               return 0;
           
        }

  
    let convertDataToArray = (data, infoArray) => {
        if (data === null)
            return null;

        if (!isCheckOn) {
            for (var info in data) {
                if (data.hasOwnProperty(info)) {
                    infoArray.push(data[info]);
                }
            }
        }
        else {

            for (var info in data) {
                if (data.hasOwnProperty(info)) {
                    if (data[info].Catagory == dataType)
                        infoArray.push(data[info]);
                }
            }
        }
    }
    let infoArray = [];
    convertDataToArray(data, infoArray);
    function filter(type) {

        if (type == dataType) {
            dataType = ""
            isCheckOn = false
        }
        else {
            dataType = type
            isCheckOn = true
        }
        if (type == 'כתבות') {
            setChangeBox1(!checkBoxState1)
            if (checkBoxState2 ) 
                setChangeBox2(false)
                
        }
        if (type == 'עדכונים') {
            setChangeBox2(!checkBoxState2)
            if (checkBoxState1 )
                setChangeBox1(false)
           
        }
       
      

    }
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <View>
                <HeaderComp />
                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.CheckBoxStyle} >
                        <View style={{ width: "50%" }}>
                            <CheckBox
                                value={checkBoxState1}
                                onChange={() => filter('כתבות')}

                            />
                        </View>
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: 18,
                        }}>כתבות</Text>
                    </View>
                    <View style={styles.CheckBoxStyle} >
                        <View style={{ width: "50%" }}>
                            <CheckBox
                                value={checkBoxState2}
                                onChange={() => filter('עדכונים')}

                            />
                        </View>
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: 18,
                        }}>עדכונים</Text>
                    </View>
                    

                </View>

            </View>

            <ScrollView scrollEventThrottle={16}>

                <View style={{ width: "100%", flex: 1 }}>



                    <View style={{ height: "100%", flex: 1 }}>

                        <ScrollView
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}

                        >

                            {infoArray.map((item) => {

                                return (


                                    <TouchableWithoutFeedback onPress={() => {
                                        currItem = item;
                                        navigation.navigate('newOpAr')
                                    }}>

                                        <View style={styles.routeStyle}>
                                            <InfoUnitAdmin imageUri={{ uri: item.imageLink }}
                                                title={item.Title}
                                                date={item.Date}
                                                catagory={item.Catagory}
                                                detail={item.Description}
                                                idFromParent={item.Id}
                                                addPhoto={() => sendData(item.Id)}
                                                upLoadPhoto={() => pressPhoto("upload")}
                                                removeItem={() => {
                                                    Alert.alert(
                                                        //title
                                                        'Hello',
                                                        //body
                                                        'האם למחוק את פריט המידע הזה?',
                                                        [
                                                            {
                                                                text: 'כן', onPress: () => {
                                                                    db.ref('Articles1/').child(item.Id).remove()
                                                                    setLoaded({ loaded: false });
                                                                }
                                                            },
                                                            { text: 'לא', onPress: () => console.log('No Pressed'), style: 'cancel' },
                                                        ],
                                                        { cancelable: false }
                                                        //clicking out side of alert will not cancel
                                                    );

                                                }}

                                            />
                                        </View>



                                    </TouchableWithoutFeedback>



                                )

                            })}



                        </ScrollView>

                    </View>


                </View>


                <TouchableWithoutFeedback onPress={() => navigation.navigate('newOpAr')}>
                    <Text style={{ fontWeight: "bold" }} > טען יותר...</Text>
                </TouchableWithoutFeedback>
                <Text>הוספת תוכן</Text>
                <View>

                    <Text>סוג מידע:</Text>
                    <  TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChange(text)}
                        value={detail}
                    />
                    <Text>כותרת:</Text>
                    <  TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text1 => onChange1(text1)}
                        value={detail1}
                    /><Text>תיאור:</Text>
                    <  TextInput

                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text2 => onChange2(text2)}
                        value={detail2}
                    />
                    <Text>תוכן המידע:</Text>
                    <  TextInput

                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text3 => onChange3(text3)}
                        value={detail3}
                    />

                </View>
                <View style={{
                    alignSelf: "flex-start",
                    paddingLeft: 20
                }} >
                    <TouchableWithoutFeedback
                        onPress={() => pressPhoto("upload")}
                    >
                        <View >
                            <Icon name="images" size={30} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <Button

                    onPress={() =>{ let result= onSubmit(detail, detail1, detail2, detail3, 'add', null)
                if(result===0)
                    refreshPage()
                }}
                    title="הוספה"


                />
                
            </ScrollView>


        </View>
    )
}

function AdminNewOpenArtScreen() {
    return (
        <AdminNewOpenArt
            title={currItem.Title}
            detail={currItem.Description}
            content={currItem.Content}
            imageUri={{ uri: currItem.imageLink }}


        />
    );
}

const logStack = createStackNavigator();

function InfoAdmin(props) { //for navigation. not in use yet
    return (
        <logStack.Navigator initialRouteName="infoA">
            <logStack.Screen options={{ headerShown: false }} name="infoA" component={InfoAdminScreen} />

            <logStack.Screen name="newOpAr" options={{ headerShown: false }} component={AdminNewOpenArtScreen} />

        </logStack.Navigator>
    );
}

export default InfoAdmin;

const styles = {
    textInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 15,
    },
    CheckBoxStyle: {
        flexDirection: 'row',
        backgroundColor: "#F4D5A7",
        borderWidth: 2,
        borderColor: "#FFAF50",
        width: "30%",
        flex: 1,
        marginTop: 10
    },
    routeStyle: {
        backgroundColor: "#F4D5A7",
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 20,
        marginTop: 10
    }
}
