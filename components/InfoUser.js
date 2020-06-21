import React, { Component, useState } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Image, View, RefreshControl, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base";
import HeaderComp from "./HeaderComp";
import ReportBox from "./explore/ReportBox";
import NewOpenArt from "./NewOpenArt";
import UnitInfoUser from "./UnitInfoUser";
import { db } from '../config/Firebase';

var currItem;
var currImg;
let isCheckOn = false, dataType;

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

function InfoUserScreen({ navigation }) {
    
    let articlesArray = [];
    const [loaded, setLoaded] = useState(false);
    const [checkBoxState1, setChangeBox1] = useState(false);
    const [checkBoxState2, setChangeBox2] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

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
                if ((!isCheckOn) || data[article].Catagory === dataType)
                articlesArray.push(data[article]);
            }
        }

    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    
        wait(1000).then(() => setRefreshing(false));
      }, [refreshing]);

    let handlePress = (type) => {
        if (type === dataType) {
            dataType = ""
            isCheckOn = false
        }
        else {
            dataType = type
            isCheckOn = true
        }
        if (type === 'כתבות') {
            setChangeBox1(!checkBoxState1)
            if (checkBoxState2) {
                setChangeBox2(false)

            }
        }
        if (type == 'עדכונים') {
            setChangeBox2(!checkBoxState2)
            if (checkBoxState1) {
                setChangeBox1(false)
            }
        }
        

    }

    convertDataToArray(data, articlesArray);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <HeaderComp />
            <View style={{height:"89%", width:"100%"}}>
                <View style={{height:"8.5%", width:"100%"}}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='כתבות'
                                containerStyle={styles.CheckBoxContainerStyle}
                                checked={checkBoxState1}
                                onPress={() => handlePress('כתבות')}
                            />
                        </View>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='עדכונים'
                                containerStyle={styles.CheckBoxContainerStyle}
                                checked={checkBoxState2}
                                onPress={() => handlePress('עדכונים')}
                            />
                        </View>
                    </View>

                </View>

                <View style={{height:"91.5%", width:"96%", alignSelf:'center'}}>
                <ScrollView 
                     refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    >
                    {
                        console.log("second"),
                        articlesArray.map((item) => {
                            return (
                                <View>
                                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('newOpAr'); currItem = item; currImg = { uri: item.imageLink } }}>
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
            </View>
        </View>
    )
}


function NewOpenArtScreen() {
    return (
        <NewOpenArt item={currItem} img={currImg} />
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
