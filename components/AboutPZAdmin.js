import React, { Component, useState, useEffect, useLayoutEffect } from "react"
import { TextInput, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { db } from '../config/Firebase'
import HeaderComp from "./explore/HeaderComp"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentAdmin } from "./DrawerContentAdmin";
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

function AboutAdminScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [dataPZ, setData] = useState({ Title: '', Body: '', SubTitle: '', ExtraBody: '' });
    db.ref('AboutPZ').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            let dataAPZ = snapshot.val();
            console.log("data loaded: " + loaded);
            if (loaded === false) {
                setLoaded(true);
                setData({ Title: dataAPZ.Title, Body: dataAPZ.Body, SubTitle: dataAPZ.SubTitle, ExtraBody: dataAPZ.ExtraBody })
            }
        }
    });

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <HeaderComp
                openUserProfile={() => navigation.navigate('Current')}
                openUserMenu={() => navigation.dangerouslyGetParent().openDrawer()}
            />
            <View style={{ width: "96%", height: '95%', alignSelf: 'center' }}>
                <View style={{ width: "90%", alignSelf: 'center' }}>

                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: '8%', color: '#404040' }}>
                        {dataPZ.Title}
                    </Text>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#404040' }}>
                        {dataPZ.SubTitle}
                    </Text>

                </View>
                <View style={styles.bodyStyle}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <TextInput
                            style={{ fontSize: 20, padding: 0, textAlign: 'right', marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 5 }}
                            multiline
                            defaultValue={dataPZ.ExtraBody}
                            onChangeText={(text) => setData({ ExtraBody: text })}
                        />

                    </ScrollView>
                </View>

                <TouchableWithoutFeedback
                    onPress={() => {
                        let updatesPZ = {};

                        //updatesPZ["AboutPZ/BodyPZ"] = dataPZ.Body;
                        updatesPZ["AboutPZ/ExtraBodyPZ"] = dataPZ.ExtraBody;
                        db.ref().update(updatesPZ);
                        alert("המידע עודכן");
                    }
                    }
                >
                    <View style={{ borderRadius: 6, width: "80%", height: '38%', backgroundColor: 'green', alignSelf: 'center', marginTop: '2%' }}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 16, marginTop: "3%" }}>
                            ערוך טקסט
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    )
}

const DrawerAbout = createDrawerNavigator();

function AboutAdmin() {
    return (
        <DrawerAbout.Navigator initialRouteName="About" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContentAdmin {...props} />}>
            <DrawerAbout.Screen name="About" component={AboutAdminScreen} />
        </DrawerAbout.Navigator>
    );
}

export default AboutAdmin;

const styles = {
    eventStyle: {
        backgroundColor: "#F6D365",
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 20,
        marginTop: 10,

    },
    imageStyle: {
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "85%",
        width: "30%",

    },
    textStyle: {
        flexDirection: 'row-reverse'
    },
    textTitleStyle: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,

    },
    textDetailStyle: {
        fontWeight: "normal",
        fontSize: 16,
        alignSelf: "center",

    },
    bodyStyle: {
        width: "95%",
        height: '70%',
        alignSelf: 'center'
    }
}

