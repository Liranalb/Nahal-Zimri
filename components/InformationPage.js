import React, { useState, useEffect } from "react"
import { TextInput, Button, Alert, ScrollView, Text, TouchableWithoutFeedback } from "react-native"
import { View } from "native-base"
import HeaderComp from "./HeaderComp"
import InfoBox from './explore/InfoBox'
import { createStackNavigator } from '@react-navigation/stack';
import InfoComp from "./InfoComp"
import { db } from '../config/Firebase'
import Reports from './Reports'

let keyID,dataType,currItem;




function InformationUserScreen({ navigation }) {

    const [loaded, setLoaded] = useState(false);
    let infoArray = [];
    let currentType = dataType;


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

                        <View style={{ height: "100%", width: "100%" }}>
                            <ScrollView>

                                {infoArray.map((item) => {
                                return (
                                    <View>
                                        <TouchableWithoutFeedback
                                            onPress={() => {
                                                currItem = item;
                                                navigation.navigate('infoAdminComp');
                                            }}
                                        >
                                       
                                            <View>
                                                <InfoBox imageUri={{ uri: item.ImageLink }}
                                                    headline={item.Title}
                                                    body={item.Body}
                                                />
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                )
                            })}


                            </ScrollView>
                        </View>

                    </View>


                </View>

            </View>
        )
    }


const InfoCompStack = createStackNavigator();


function InfoUserComponent( {navigation}) {
    console.log("cureItem is : " + currItem.ImageLink);
    return (<InfoComp 
                headline={currItem.Title}
                body={currItem.Body}
                onCrossPress= { () => navigation.goBack()}
                imageUri={{ uri: currItem.ImageLink }}
                /> );

}


function InformationPage(props) {

    dataType= props.dataType;

    return (
            <InfoCompStack.Navigator initialRouteName="infoAdminScreen">
                <InfoCompStack.Screen options={{ headerShown: false }} name="InfoAdminScreen" component={InformationUserScreen} />
                <InfoCompStack.Screen options={{ headerShown: false }} name="infoAdminComp" component={InfoUserComponent} />
            </InfoCompStack.Navigator>
    );
}



export default InformationPage;

const styles = {
    containerStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAE5D3",
        borderWidth: 1,
        borderColor: 'gray'

    }
}