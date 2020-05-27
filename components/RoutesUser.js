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
                                title='מסלולי טיול'
                                checked={this.state.checked}
                            />
                        </View>
                        <View style={styles.CheckBoxStyle}>
                            <CheckBox
                                center
                                title='מסלולי פריחה'
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
                                    source={require('../assets/img/map.png')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>מסלול</Text>
                                <Text style={styles.textTitleStyle}>פריחה\טיול</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>שם המסלול</Text>
                                <Text style={styles.textDetailStyle}>גל-קראוס שביל ימין</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>רמת קושי</Text>
                                <Text style={styles.textDetailStyle}>בינוני</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>ק"מ</Text>
                                <Text style={styles.textDetailStyle}>2.5</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}> פרטים</Text>
                                <Text style={styles.textDetailStyle}>כל הציבור מוזמן</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routeStyle}>
                            <View style={styles.imageStyle}>
                                <Image
                                    source={require('../assets/img/map.png')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>מסלול</Text>
                                <Text style={styles.textTitleStyle}>פריחה\טיול</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>שם המסלול</Text>
                                <Text style={styles.textDetailStyle}>שביל לאורך הפריחה</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>רמת קושי</Text>
                                <Text style={styles.textDetailStyle}>קשה</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>ק"מ</Text>
                                <Text style={styles.textDetailStyle}>4</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>פרטים</Text>
                                <Text style={styles.textDetailStyle}>מסלול למיטיבי לכת</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routeStyle}>
                            <View style={styles.imageStyle}>
                                <Image
                                    source={require('../assets/img/map.png')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>מסלול</Text>
                                <Text style={styles.textTitleStyle}>פריחה\טיול</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>שם המסלול</Text>
                                <Text style={styles.textDetailStyle}>ביקור בבית הצבאים</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>רמת קושי</Text>
                                <Text style={styles.textDetailStyle}>קל</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>ק"מ</Text>
                                <Text style={styles.textDetailStyle}>2</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}> פרטים</Text>
                                <Text style={styles.textDetailStyle}>טיול מהנה</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routeStyle}>
                            <View style={styles.imageStyle}>
                                <Image
                                    source={require('../assets/img/map.png')}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>מסלול</Text>
                                <Text style={styles.textTitleStyle}>פריחה\טיול</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>שם המסלול</Text>
                                <Text style={styles.textDetailStyle}>גל-קראוס שביל שמאל</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>רמת קושי</Text>
                                <Text style={styles.textDetailStyle}>בינוני</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}>ק"מ</Text>
                                <Text style={styles.textDetailStyle}>3.5</Text>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textTitleStyle}> פרטים</Text>
                                <Text style={styles.textDetailStyle}>כל הציבור מוזמן</Text>
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
        borderColor: "#FFAF50",
        borderWidth: 2,
        width: "30%",
        flex: 1,
        marginTop: 10
    }
}