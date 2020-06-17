import React, { useState } from "react"
import { TextInput, Button, Alert, ScrollView, Text, TouchableWithoutFeedback } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import InfoBox from './explore/InfoBox'
import { createStackNavigator } from '@react-navigation/stack';
import InfoComp from "./InfoComp"
import { db } from '../config/Firebase'

let typeName = {
    type: "none"
};

function InformationUserScreen(props, { navigation }) {

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




    let convertDataToArray = (data, infoArray) => {
        console.log("in convert");
        if (data === null)
            return null;

        for (var info in data) {
            if (data.hasOwnProperty(info)) {
                console.log("checking type: "+ data[info].Type);
                if (data[info].Type === currentType) {
                    infoArray.push(data[info]);
                    console.log("Added to array: "+info);
                }
                else
                    console.log("not fit");
                   
            }
        }
    }

    
    convertDataToArray(data, infoArray);
    console.log(infoArray.length);

        return (
            <View>
                <HeaderComp />

                <View style={styles.containerStyle}>







                    <View style={{ height: "100%", width: "100%", backgroundColor: '#E9DFD1' }}>

                        <View style={{ height: "100%", width: "100%" }}>
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
                                                <InfoBox imageUri={{ uri: item.Images }}
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

                    </View>


                </View>















            </View>
        )
    }


const InfoCompStack = createStackNavigator();


function InfoUserComponent() {

    return <InfoComp />;
}


function InformationPage(props) {

    function InfoUserScreenFunction() {
        return <InformationUserScreen dataType={props.dataType}/>
    }

    return (
            <InfoCompStack.Navigator initialRouteName="infoAdminScreen">
                <InfoCompStack.Screen options={{ headerShown: false }} name="InfoAdminScreen" component={InfoUserScreenFunction} />
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