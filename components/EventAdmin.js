import React, { Component } from "react"
import { Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import AdminButton from "./AdminButton";

class EventAdmin extends Component {
    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <HeaderComp />
                </View>
                <ScrollView>
                    <View style={styles.eventStyle}>
                        <View style={styles.imageStyle}>
                            <Image
                                source={require('../assets/img/ev1.jpeg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <AdminButton />
                            </View>
                        </View>

                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שם האירוע</Text>
                            <Text style={styles.textDetailStyle}>תצפית על ציפורים</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> תאריך</Text>
                            <Text style={styles.textDetailStyle}>2.2.20</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> יום</Text>
                            <Text style={styles.textDetailStyle}>שישי</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שעה</Text>
                            <Text style={styles.textDetailStyle}>11:00</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> מיקום</Text>
                            <Text style={styles.textDetailStyle}>רחוב קראוס</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> פרטים</Text>
                            <Text style={styles.textDetailStyle}>כל הציבור מוזמן</Text>
                        </View>

                    </View>

                    <View style={styles.eventStyle}>
                        <View style={styles.imageStyle}>
                            <Image
                                source={require('../assets/img/ev2.jpeg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <AdminButton />
                            </View>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שם האירוע</Text>
                            <Text style={styles.textDetailStyle}>הרצאה בנושא הסתיו</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> תאריך</Text>
                            <Text style={styles.textDetailStyle}>1.1.20</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> יום</Text>
                            <Text style={styles.textDetailStyle}>חמישי</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שעה</Text>
                            <Text style={styles.textDetailStyle}>14:00</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> מיקום</Text>
                            <Text style={styles.textDetailStyle}>ספריית פסגת זאב</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> פרטים</Text>
                            <Text style={styles.textDetailStyle}>עלות : 20 שח לאדם</Text>
                        </View>
                    </View>
                    <View style={styles.eventStyle}>
                        <View style={styles.imageStyle}>
                            <Image
                                source={require('../assets/img/ev3.jpeg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <AdminButton />
                            </View>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שם האירוע</Text>
                            <Text style={styles.textDetailStyle}>הרצאה בנושא החי בנחל</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> תאריך</Text>
                            <Text style={styles.textDetailStyle}>11.12.19</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> יום</Text>
                            <Text style={styles.textDetailStyle}>שלישי</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שעה</Text>
                            <Text style={styles.textDetailStyle}>20:00</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> מיקום</Text>
                            <Text style={styles.textDetailStyle}>מינהל קהילתי פסגת זאב</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> פרטים</Text>
                            <Text style={styles.textDetailStyle}>הרצאה מעניינת, מומלץ להגיע!</Text>
                        </View>
                    </View>
                    <View style={styles.eventStyle}>
                        <View style={styles.imageStyle}>
                            <Image
                                source={require('../assets/img/ev4.jpeg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <AdminButton />
                            </View>

                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שם האירוע</Text>
                            <Text style={styles.textDetailStyle}>סיור בעקבות הצבאים</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> תאריך</Text>
                            <Text style={styles.textDetailStyle}>10.10.19</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> יום</Text>
                            <Text style={styles.textDetailStyle}>שני</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> שעה</Text>
                            <Text style={styles.textDetailStyle}>9:30</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> מיקום</Text>
                            <Text style={styles.textDetailStyle}>רחוב קראוס</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}> פרטים</Text>
                            <Text style={styles.textDetailStyle}>כל הציבור מוזמן</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('newOpAr')}>

                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontWeight: "bold" }} > טען יותר...</Text>
                            </View>
                        </TouchableOpacity>

                        <Text>שם האירוע:</Text>
                        <  TextInput
                            style={styles.textInput}
                            onChangeText={text => onChange(text)}
                        //value={detail}
                        />
                        <Text>תאריך:</Text>
                        <  TextInput
                            style={styles.textInput}
                            onChangeText={text1 => onChange1(text1)}
                        //value={detail1}
                        /><Text>יום:</Text>
                        <  TextInput

                            style={styles.textInput}
                            onChangeText={text2 => onChange2(text2)}
                        //value={detail2}
                        />
                        <Text>שעה:</Text>
                        <  TextInput

                            style={styles.textInput}
                            onChangeText={text2 => onChange2(text2)}
                        //value={detail2}
                        />
                        <Text>מיקום:</Text>
                        <  TextInput

                            style={styles.textInput}
                            onChangeText={text2 => onChange2(text2)}
                        //value={detail2}
                        />
                        <Text>פרטים:</Text>
                        <  TextInput

                            style={{ height: 80, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
                            onChangeText={text2 => onChange2(text2)}
                        //value={detail2}
                        />


                    </View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity>
                            <Text style={{ color: 'white' }}>הוסף</Text>
                        </TouchableOpacity >
                    </View>
                </ScrollView>
            </View>


        )
    }
}

export default EventAdmin;

const styles = {


    textInput: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white'
    },

    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
        fontSize: 10,
        width: "40%",
        height: "3%",
        alignSelf: "center",
        marginTop: 5,
        marginBottom: "10%",
        overflow: 'hidden'
    },

    editBar: {
        flexDirection: "row",
        alignSelf: "center",
        //width:"100%"



    },

    adminEdit: {
        backgroundColor: '#FFAF50',
        borderColor: "#FFAF50",
        alignSelf: "center",
        width: '54%',
        marginTop: 2,


    },

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
        marginTop: 1,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "75%",
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
    }
}