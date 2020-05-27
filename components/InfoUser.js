import React, { Component } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import ReportBox from "./ReportBox"

class RoutesUser extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            username: "",
            catagory: "",
            loading: false
        }
    }
    
    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <HeaderComp />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='כתבות'
                                checked={this.state.checked}
                            />
                        </View>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='עדכונים'
                                checked={this.state.checked}
                            />
                        </View>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='חידות'
                                checked={this.state.checked}
                            />
                        </View>
                    </View>

                </View>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routeStyle}>
                            <View style={styles.imageStyle}>
                                <Image
                                    source={require('../assets/img/im5.jpeg')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>כתבות</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>החיים בלילה בנחל</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>תיאור מעניין על בעלי החיים</Text> 
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>והתנהגותם באתר בשעות הלילה.</Text>
                            </View> 
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>תאריך העלאה | 2.2.20</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routeStyle}>
                            <View style={styles.imageStyle}>
                                <Image
                                    source={require('../assets/img/im1.jpeg')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>עדכונים</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>פעילות בתי הספר</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>בתי הספר של פסגת זאב השתתפו השבוע</Text> 
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>בפעילות ניקיון הנחל. יישר כוח!</Text>
                            </View> 
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>תאריך העלאה | 3.1.20</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routeStyle}>
                            <View style={styles.imageStyle}>
                                <Image
                                    source={require('../assets/img/im4.jpeg')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>חידות</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>חידת הציפור</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>ילדים יקרים, לפניכם חידה מעניינת.</Text> 
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>מצאו מה חסר לציפור בתמונה.</Text>
                            </View> 
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>תאריך העלאה | 31.12.20</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routeStyle}>
                            <View style={styles.imageStyle}>
                                <Image
                                    source={require('../assets/img/im2.jpeg')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>כתבות</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>חנוכת הנחל</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>הטקס הרשמי התקיים ב12.12.19</Text> 
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>בהשתתפות ראש העיר וסגניו.</Text>
                            </View> 
                            <View style={styles.textStyle}>
                                <Text style={styles.textDetailStyle}>תאריך העלאה | 13.12.20</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        )
    }
}

export default RoutesUser;

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
        backgroundColor: "#F6D365",
        borderWidth: 2,
        borderColor: "#FFAF50",
        width: "30%",
        flex: 1,
        marginTop: 10
    }
}