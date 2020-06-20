import React, { Component, useState } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base";
import HeaderComp from "./HeaderComp";
import ReportBox from "./explore/ReportBox";
import NewOpenArt from "./NewOpenArt";
import UnitInfoUser from "./UnitInfoUser";
import { db } from '../config/Firebase';

var currItem;
var currImg;

function InfoUserScreen({ navigation }) {
    /*constructor() {
        super();
        this.state = {
            text: "",
            username: "",
            catagory: "",
            loading: false
        }
    }*/
    
    let articlesArray = [];
    const [loaded, setLoaded] = useState(false);

    //load data
    let data = null;
    db.ref('Articles').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded: " + loaded);
            if (loaded === false)
                setLoaded(true);

        }
    });


    let convertDataToArray = (data, articlesArray) => {
        if (data === null)
            return null;
        for (var article in data) {
            if (data.hasOwnProperty(article)) {
                articlesArray.push(data[article]);
            }
        }

    }

    convertDataToArray(data, articlesArray);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <View>
                <HeaderComp />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='כתבות'
                            containerStyle={styles.CheckBoxContainerStyle} 
                        //checked={this.state.checked} //Use Hooking!
                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='עדכונים'
                            containerStyle={styles.CheckBoxContainerStyle} 
                        //checked={this.state.checked} //Use Hooking!
                        />
                    </View>
                </View>

            </View>
            <ScrollView>
                {
                    console.log("second"),
                    articlesArray.map((item) => {
                        return (
                            <View>
                                <TouchableWithoutFeedback onPress={() => {navigation.navigate('newOpAr'); currItem = item;  currImg={ uri: item.imageLink }}}>
                                    <View>
                                        <UnitInfoUser imageUri={{ uri: item.imageLink }}
                                            catagory={item.Catagory}
                                            title={item.Title}
                                            subTitle={item.SubTitle}
                                            date={item.Date}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


function NewOpenArtScreen() {
    return (
        <NewOpenArt item={currItem} img={currImg}/>
    );
}

const logStack = createStackNavigator();

function InfoUser() { //for navigation. not in use yet
    return (
        <logStack.Navigator initialRouteName="infoU">
            <logStack.Screen options={{ headerShown: false }} name="infoU" component={InfoUserScreen} />

            <logStack.Screen name="newOpAr" options={{ headerShown: false }}
                component={NewOpenArtScreen} />

        </logStack.Navigator>
    );
}

export default InfoUser;

const styles = {
    routeStyle: {
        backgroundColor: "#F6D365",
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 20,
        marginTop: 10
    },
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "85%",
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
    CheckBoxStyle: {
        // backgroundColor: "#F6D365",
        // borderWidth: 2,
        // borderColor: "#FFAF50",
        // width: "30%",
        // flex: 1,
        width: "30%",
        flex: 1,
        marginTop: "0.4%",
        backgroundColor: "#FAE5D3",
        
    },
    CheckBoxContainerStyle: {
        borderColor: "#FFAF50",
        borderWidth: 1,
        backgroundColor: '#F4D5A7'
    }
}
