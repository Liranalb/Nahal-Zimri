import React, {  useState, useEffect } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity, Button } from "react-native"
import { View } from "native-base"
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Header, ListItem, CheckBox } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import { NavigationContainer } from '@react-navigation/native';
import EditReports from "./explore/EditReports"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import HeaderComp from "./HeaderComp"
import firebase from "../config/Firebase"
import ImagePicker from 'react-native-image-crop-picker';
import { db } from '../config/Firebase'
import EventBoxUser from "./EventBoxUser";

// function adminCheck() { 
//     db.ref('Users/'+uid+'/Admin').once('value', function (snapshot) {
//          const exist = (snapshot.val() !== null);

//          if (exist) {
//             Admin = snapshot.val();
//             alert(Admin);
//             console.log("user data loaded");

//          }
//      });
//     }

 var uid = global.uid;
 console.log(global.uid);
// var Username = "";


// function getUser() {
//     //let uid = firebase.auth().currentUser.uid
    
//     db.ref('Users/' + global.uid + '/Username').once('value', function (snapshot) {
//         const exist = (snapshot.val() !== null);
//         if (exist) {
//             Username = snapshot.val();
//             //alert(Username);
//             console.log("user data loaded");
//         }
//     });
// }



// var Username = getUser();
//var Admin = adminCheck();
    function CurrentUser({ navigation }) {
        const [loaded, setLoaded] = useState(false);

        console.log("start load with: "+uid);
        let Username;
        db.ref('Users/' + global.uid + '/Username').once('value', function (snapshot) {
            const exist = (snapshot.val() !== null);
            if (exist) {
                Username = snapshot.val();
                //alert(Username);
                console.log("user data loaded"+Username.email);
                if (loaded === false) {
                    setLoaded(true);
                }
            }
        });


    
        return (
            
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <HeaderComp />
                </View>
                
                <View>
                    <Text style={styles.textTitleStyle}>שם משתמש        
                        </Text>
    
                    <Text style={styles.textDetailStyle}>{Username}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    </Text>
    
    
    
                </View>
    
                <View style={styles.buttonStyle}>
                    <Button
                        title="התנתק"
                        color="#FF8C37"
                        onPress={() => firebase.auth().signOut()}
                    >
                    </Button>
                </View>
    
            </View>
        );
    
}





// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });
export default CurrentUser;

const styles = {

    buttonStyle: {
        backgroundColor: '#FF8C37',
        borderColor: "#FF8C37",
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "70%",
        alignSelf: "center",
        marginTop: 5,
        overflow: 'hidden'
    },

    textStyle: {
        flexDirection: 'row-reverse'
    },
    textTitleStyle: {
        textAlign: 'center',
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 50,
        marginTop: "10%",
        textDecorationLine: 'underline'
        

    },
    textDetailStyle: {
        textAlign: 'center',
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 40,
    }
    
}


