import React, { Component } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
/*import ReportBox from "./ReportBox"*/
import InfoUnitAdmin from "./InfoUnitAdmin"
import NewOpenArt from "./NewOpenArt";
import { db } from '../config/Firebase'

function InfoAdminScreen({ navigation }) {
    const [detail, onChange] = useState('');
    const [detail1, onChange1] = useState('');
    const [detail2, onChange2] = useState('');
    let data = null;
    db.ref('InfoUser').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {

            data = snapshot.val();
            console.log("data loaded");

        }
    });
    let convertDataToArray = (data, infoArray) => {
        if (data === null)
            return null;
        for (var info in data) {
            if (data.hasOwnProperty(info)) {
                infoArray.push(data[info]);
            }
        }
    }
    let infoArray = [];
    convertDataToArray(data, infoArray);

    function onSubmit(type, title, content) {
        if (type != "" && title != "" && content != "") {
            var date = new Date().getDate(); //To get the Current Date
            var month = new Date().getMonth() + 1; //To get the Current Month
            var year = new Date().getFullYear(); //To get the Current Year
            var newData = {
                Title: title,
                Date: date + "." + month + "." + year,
                Content: content,
                Description: " ",
                Catagory: type,
            }
            var myRef = db.ref('InfoUser/').push(newData);

        }
    }
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <View>
                <HeaderComp />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='כתבות'
                            //checked={this.state.checked}
                            onIconPress={() => alert('Pressed!')}

                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='עדכונים'
                            //checked={this.state.checked}
                            onIconPress={() => alert('Pressed!')}

                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='חידות'
                            //checked={this.state.checked}
                            onIconPress={() => alert('Pressed!')}

                        />
                    </View>
                </View>
            
            </View>

            <ScrollView scrollEventThrottle={16}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('newOpAr')}>
                    <View style={{ width: "100%", flex: 1 }}>



                        <View style={{ height: "100%", flex: 1 }}>

                            <ScrollView
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}

                            >

                                {infoArray.map((item) => {
                                    return (
                                        <View style={styles.routeStyle}>
                                            <InfoUnitAdmin imageUri={{ uri: item.ImageLink }}
                                                title={item.Title}
                                                date={item.Date}
                                                catagory={item.Catagory}
                                                detail={item.Description}
                                            />
                                            <View style={{ width: "40%", flex: 2, paddingLeft: 3, paddingTop: 10, flexDirection: 'row' }}>
                                                <View style={{
                                                    paddingRight: 1
                                                }}>
                                                    <Button
                                                        title="ערוך "
                                                        color="green"
                                                        onPress={(event) => { alert(event.val()) }}
                                                    />
                                                </View>

                                                <View style={{
                                                    paddingRight: 1
                                                }}>
                                                    <Button
                                                        title="מחק "
                                                        color="green"
                                                        onPress={() => {
                                                            alert(Button.title)

                                                        }}
                                                    />
                                                </View>

                                            </View>
                                        </View>
                                    )
                                })}


                            </ScrollView>
                        </View>



                    </View>

                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('newOpAr')}>
                    <Text style={{ fontWeight: "bold" }} > טען יותר...</Text>
                </TouchableWithoutFeedback>
                <Text>הוספת תוכן</Text>
                <View>

                    <Text>סוג מידע:</Text>
                    <  TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChange(text)}
                        value={detail}
                    />
                    <Text>כותרת:</Text>
                    <  TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text1 => onChange1(text1)}
                        value={detail1}
                    /><Text>תוכן המידע:</Text>
                    <  TextInput

                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text2 => onChange2(text2)}
                        value={detail2}
                    />

                </View>
                <Button

                    onPress={() => onSubmit(detail, detail1, detail2)}
                    title="עדכן"


                />
            </ScrollView>


        </View>
    )
}

function NewOpenArtScreen() {
    return (
        <NewOpenArt />
    );
}

const logStack = createStackNavigator();

function InfoAdmin() { //for navigation. not in use yet
    return (
        <logStack.Navigator initialRouteName="infoA">
            <logStack.Screen options={{ headerShown: false }} name="infoA" component={InfoAdminScreen} />

            <logStack.Screen name="newOpAr" options={{ headerShown: false }}
                component={NewOpenArtScreen} />

        </logStack.Navigator>
    );
}


export default InfoAdmin;

const styles = {
    textInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 15,
    },
    CheckBoxStyle: {
        backgroundColor: "#F6D365",
        borderWidth: 2,
        borderColor: "#FFAF50",
        width: "30%",
        flex: 1,
        marginTop: 10
    },
    routeStyle: {
        backgroundColor: "#F6D365",
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 20,
        marginTop: 10
    }
}
