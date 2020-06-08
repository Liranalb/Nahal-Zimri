import React, { Component } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import UnitInfoUser from "./UnitInfoUser";


class InfoUser extends Component {
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
                                onIconPress={() => alert('Pressed!')}

                            />
                        </View>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='עדכונים'
                                checked={this.state.checked}
                                onIconPress={() => alert('Pressed!')}

                            />
                        </View>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='חידות'
                                checked={this.state.checked}
                                onIconPress={() => alert('Pressed!')}

                            />
                        </View>
                    </View>

                </View>

                <ScrollView>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <UnitInfoUser catagory="כתבות"
                            title="החיים בלילה בנחל"
                            detail="תיאור מעניין על בעלי החיים
                            והתנהגותם באתר בשעות הלילה."
                            imageUri={require('../assets/img/im5.jpeg')}
                            date="2.2.20" />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <UnitInfoUser catagory="עדכונים"
                            title="פעילות בתי הספר"
                            detail="בתי הספר של פסגת זאב השתתפו השבוע
                            בפעילות ניקיון הנחל. יישר כוח!"
                            imageUri={require('../assets/img/im1.jpeg')}
                            date="3.1.20" />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <UnitInfoUser catagory="חידות"
                            title="חידת הציפור"
                            detail="ילדים יקרים, לפניכם חידה מעניינת מצאו מה חסר לציפור בתמונה"
                            imageUri={require('../assets/img/im4.jpeg')}
                            date="31.12.20" />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <UnitInfoUser catagory="כתבות"
                            title="חנוכת הנחל"
                            detail="הטקס הרשמי התקיים ב12.12.19 בהשתתפות ראש העיר וסגניו"
                            imageUri={require('../assets/img/im2.jpeg')}
                            date="13.12.20" />
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        )
    }
}

export default InfoUser;

const styles = {
    CheckBoxStyle: {
        backgroundColor: "#F6D365",
        borderWidth: 2,
        borderColor: "#FFAF50",
        width: "30%",
        flex: 1,
        marginTop: 10
    }
}
