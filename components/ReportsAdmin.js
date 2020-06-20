import React, { useState } from "react"
import { TextInput, Button, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox } from "react-native-elements"
import EditReports from "./explore/EditReports"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HeaderComp from "./HeaderComp"
import ReportForm from "./ReportForm"
//import ImagePicker from 'react-native-image-picker';
import { db } from '../config/Firebase'




export function ReportsAdminScreen({ navigation }) {
    let reportsArray = [], approvedText = "";
    const [loaded, setLoaded] = useState(false);

    let data = null;
    db.ref('Reports').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded");
            if (loaded === false) {
                setLoaded(true);
            }
        }
    });




    let convertDataToArray = (data, reportsArray) => {

        if (data === null)
            return null;
        for (var report in data) {
            if (data.hasOwnProperty(report)) {
                if (data[report].Approved === true) {
                    reportsArray.push(data[report]);

                }

            }
        }

    }


    convertDataToArray(data, reportsArray);


    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>

            <HeaderComp />


            <View style={{ width: "100%", height: "97%" }}>
                <View style={{ flexDirection: 'row', width: "100%", height: "9%" }}>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox

                            center
                            title='פריחה'
                            containerStyle={styles.CheckBoxContainerStyle} 
                        // checked={this.state.checked}
                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='בע"ח'
                            containerStyle={styles.CheckBoxContainerStyle} 
                        // checked={this.state.checked}
                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='אחר'
                            containerStyle={styles.CheckBoxContainerStyle} 
                        //  checked={this.state.checked}
                        />
                    </View>

                </View>

                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ width: "100%" }}>

                        <View style={{ height: "100%", flex: 1 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {reportsArray.map((item) => {


                                    if (item.Approved)
                                        approvedText = "מאושר"
                                    else
                                        approvedText = "לא מאושר"

                                    return (
                                        <EditReports imageUri={{ uri: item.ImageLink }}
                                            id={item.id}
                                            body={item.Description}
                                            date={item.Date}
                                            type={item.Type}
                                            catagory={item.Catagory}
                                            approved={item.Approved}
                                            approvedText={approvedText}
                                            reporter={item.ReporterName}
                                            onDelete={() => {
                                                Alert.alert(
                                                    //title
                                                    'שלום',
                                                    //body
                                                    'האם למחוק דיווח הזה?',
                                                    [
                                                        {
                                                            text: 'כן', onPress: () => {
                                                                db.ref('Reports/').child(item.id).remove();
                                                                setLoaded({ loaded: false });
                                                                // delete image not working yet
                                                            }
                                                        },
                                                        { text: 'לא', onPress: () => console.log('No Pressed'), style: 'cancel' },
                                                    ],
                                                    { cancelable: false }
                                                    //clicking out side of alert will not cancel
                                                );
                                            }}
                                        />
                                    )
                                })}
                                {/* <EditReports imageUri={require('../assets/img/purple.jpg')}
                                name="purple flower"
                                date="23.01.2020"
                                catagory="פריחה"
                            />
                            <EditReports imageUri={require('../assets/img/Shafan.jpg')}
                                name="Shafan"
                                date="23.01.2020"
                            />
                            <EditReports imageUri={require('../assets/img/Sunflower.jpg')}
                                name="Sunflower"
                                date="23.01.2020"
                            />
                            <EditReports imageUri={require('../assets/img/purple.jpg')}
                                name="purple flower"
                                date="23.01.2020"
                            />
                            <EditReports imageUri={require('../assets/img/Shafan.jpg')}
                                name="Shafan"
                                date="23.01.2020"
                            />
                            <EditReports imageUri={require('../assets/img/Sunflower.jpg')}
                                name="Sunflower"
                                date="23.01.2020"
                            /> */}
                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>


                <View style={{ width: "100%", height: "5%" }}>



                    {/* optional map */}




                </View>
                <View style={{ width: "100%", height: "24%" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('repFo')}
                    >
                        <View style={styles.buttonStyle}>
                            <Text style={styles.textStyleHeaders}>שלח דיווח</Text>
                        </View>
                    </TouchableOpacity>

                </View>


            </View>

        </View>
    )
}

function goToReportForm() {
    return <ReportForm />

}
const repAdminStack = createStackNavigator();

function ReportsAdmin() {
    return (

        <repAdminStack.Navigator initialRouteName="reportsAdmin">
            <repAdminStack.Screen options={{ headerShown: false }} name="reportsAdmin" component={ReportsAdminScreen} />
            <repAdminStack.Screen options={{ headerShown: false }} name="repFo" component={goToReportForm} />

        </repAdminStack.Navigator>

    );

}




export default ReportsAdmin;

const styles = {

    textInputStyle: {
        backgroundColor: "#D7D8D7",
        borderColor: "#004577",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 10
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
    },
    textStyleHeaders: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: "6%"
    },

    buttonStyle: {
        width: "70%",
        height: "73%",
        borderColor: "black",
        borderWidth: 1,
        alignSelf: "center",
        marginTop: "1%",
        backgroundColor: "#424242",
        marginBottom: 30


    }


}
