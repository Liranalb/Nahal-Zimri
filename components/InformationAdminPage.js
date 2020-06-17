import React, { useState , useEffect} from "react"
import { TextInput, Alert, ScrollView, Text, TouchableWithoutFeedback } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox, Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import InfoBox from './explore/InfoBox'
import EditInfoBox from './explore/EditInfoBox'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InfoComp from "./InfoComp"
import { db,storage } from '../config/Firebase'
import uploadImage from '../assets/functions/uploadSingleImage'
import sayCheese from '../assets/functions/takePhoto'
//import ImagePicker from 'react-native-image-picker';


function pressPhoto (keyID,photoUploaded) {
    // setting the paths
    let imageID = "img"+keyID+".jpg";       
    let dataPath = 'Information/info'+keyID;
    let storagePath = "Images/Information/"+imageID;

    console.log("imageID is : " + imageID + "\n dataPath is:  "+ dataPath + "/n storagePath"+ storagePath);

    if (sayCheese(storagePath,dataPath)===0)
        photoUploaded=true;

}

function sendData ( photoUploaded,body,title) {
    alert(body);
    if(photoUploaded===false)
        alert("Upload image first");
}
function InformationAdminScreen(props, { navigation }) {
    const [body, onChangeBody] = useState('');
    const [title, onChangeTitle] = useState('');

    let keyID;
    let photoUploaded=false; 
    let dataUploaded=false; 

    let infoArray = [];
    let currentType = props.dataType;
    const [loaded, setLoaded] = useState(false);
    let data = null;
    db.ref('Information').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded");
            if( loaded === false) {
                setLoaded( true );
            }
        }
    });
    
    let newPostKey = () => {
        return db.ref().child('Inforamtion').push().key;
    }
    
    // on mount
    useEffect(() =>  {
        keyID = newPostKey();
        console.log("keyID" + keyID);

    },[]);
    // on unmount
    useEffect( () => {
        return () => {
            
        }
    },[]);
    
    let convertDataToArray = (data, infoArray) => {
        console.log("in convert");
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
                                    <View key={item}>
                                        <TouchableWithoutFeedback
                                            onPress={() => navigation.navigate('infoAdminComp')}
                                        >
                                            <View>
                                                <EditInfoBox imageUri={{ uri: item.Images }}
                                                    headline={item.Title}
                                                    body={item.Content}
                                                />
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                )
                            })}

                            


                        </ScrollView>
                    </View>

                    <View style={styles.editBoxStyle}>
                        <View style={{ flex: 1 }}>
                            <View style={{ marginLeft: 12, marginTop: 20 }}>
                                <TouchableWithoutFeedback
                                    onPress={() => pressPhoto(keyID,photoUploaded)}
                                >
                                    <View style={{ marginLeft: 12 }}>
                                        <Icon name="camera" size={30} color="white" />
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => pressPhoto(keyID)}
                                >
                                    <View style={{ marginTop: 20, marginLeft: 12 }}>
                                        <Icon name="images" size={30} color="white" />
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => sendData(photoUploaded,body,title)}
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
                                value= {title}
                                onChangeText= {text => onChangeTitle(text)}
                            />

                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="הכנס תוכן"
                                multiline={true}
                                numberOfLines={4}
                                onChangeText= {text => onChangeBody(text)}
                                value= {body}
                            />

                        </View>

                    </View>

                </View>


            </View>

        </View>
    )
}






const InfoCompStack = createStackNavigator();



function InfoAdminComponent() {

    return <InfoComp />;
}


function InformationAdminPage(props) {

    function InfoAdminScreenFunction() {
        return <InformationAdminScreen dataType={props.dataType}/>
    }

    return (
            <InfoCompStack.Navigator initialRouteName="infoAdminScreen">
                <InfoCompStack.Screen options={{ headerShown: false }} name="InfoAdminScreen" component={InfoAdminScreenFunction} />
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