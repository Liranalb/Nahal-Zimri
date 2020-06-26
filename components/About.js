import React, { Component, useState, useEffect, useLayoutEffect } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Header, ListItem, CheckBox, Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import { NavigationContainer } from '@react-navigation/native';
import EditReports from "./explore/EditReports"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
//import firebase from "../config/Firebase"
import ImagePicker from 'react-native-image-crop-picker';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "./DrawerContent";

function AboutScreen({ navigation }) {


    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <HeaderComp
                openUserProfile={() => navigation.navigate('Current')}
                openUserMenu={() => navigation.dangerouslyGetParent().openDrawer()}
            />
            <View style={{ width: "96%", height: '89%', alignSelf: 'center' }}>


                <View style={{ width: "90%", height: '20%', alignSelf: 'center' }}>
                    <Text style={{fontSize:35, fontWeight:'bold', textAlign:'center', marginTop:'10%', color:'#404040'}}>
                        איך זה התחיל
                    </Text>
                </View>
                <View style={styles.bodyStyle}>
                    <ScrollView>
                        <Text style={{fontSize:16, fontFamily:''}}>
                            נַחַל זִמְרִי הוא נחל אכזב בצפון ירושלים, המתחיל ברום של 750 מטרים מעל פני הים. הנחל עובר בתוך שכונת פסגת זאב שבבירה, תוך שהוא חוצץ בין פסגת זאב מרכז (מצפון) ובין פסגת זאב מזרח (מדרום), ומתחבר מזרחה לאפיק נחל פרת.

                            שמו המקורי של הנחל, ואדי זמרי, משמר לפי הסברה את שמו של ראש משפחה בשבט בנימין שנקרא "זמרי", אשר נזכר בספר דברי הימים לצד ראשי משפחות אחרים בשבט בנימין - כולם בעלי שמות המשמשים גם כשמות יישובים מקראיים בסביבת הנחל: "וִיהוֹעַדָּה הוֹלִיד אֶת עָלֶמֶת וְאֶת עַזְמָוֶת וְאֶת זִמְרִי"[1]. זאת, כאשר עלמת (היא "עלמון" באזכורים אחרים במקרא) מזוהה עם "ח'רבת עלמית" הסמוכה (ליד היישוב עלמון), וכאשר עזמות מזוהה עם הכפר הסמוך חיזמא[2].

                            באפיק הנחל שרידים ארכאולוגיים מתקופות שונות, המרוכזים בחורבה הקרויה ח'רבת זמרי, אשר נסקרה בידי רשות העתיקות. השרידים שאותרו הם מבנים, גתות ומאגרי מים המתוארכים החל מתקופת הברונזה ועד התקופה הביזנטית.[3].

                            בינואר 2019 חנכו החברה להגנת הטבע ועיריית ירושלים אתר טבע עירוני בנחל.
                    </Text>
                    </ScrollView>
                </View>






            </View>

        </View>
    )
}

const DrawerAbout = createDrawerNavigator();

function About() {

    return (
        <DrawerAbout.Navigator initialRouteName="reports" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContent {...props} />}>
            <DrawerAbout.Screen name="reports" component={AboutScreen} />

        </DrawerAbout.Navigator>

    );
}

export default About;

const styles = {
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
    bodyStyle: {
        width: "90%",
        height: '78%',
        alignSelf: 'center',

        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4A4A4A'
    }
}


