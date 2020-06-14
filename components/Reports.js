import React, { useState,useEffect,useLayoutEffect } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Header, ListItem, CheckBox, Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import EditReports from "./explore/EditReports"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
//import firebase from "../config/Firebase"
import ImagePicker from 'react-native-image-crop-picker';

import { db,storage } from '../config/Firebase'

import ReportForm from "./ReportForm";



function ReportsScreen({ navigation }) {
    let reportsArray = [];
    const [loaded, setLoaded] = useState(false);


    //load data
    let data = null;
    db.ref('Reports').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded: " + loaded);
            if( loaded === false)
                setLoaded( true );

        }
    });

    
    

    let convertDataToArray = (data,reportsArray) => { 
        if (data === null)
            return null;
        for (var report in data) {
            if (data.hasOwnProperty(report)) {
                if (data[report].Approved === 'true')
                    reportsArray.push(data[report]);
            }
        }
        
    }

    convertDataToArray(data,reportsArray);




    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
            <HeaderComp />
            <View style={{ width: "100%", height: "97%" }}>
                <View style={{ flexDirection: 'row', width:"100%",height:"9%" }}>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox

                            center
                            title='פריחה'
                            //checked={this.state.checked}
                            containerStyle={{ backgroundColor: '#F4D5A7' }}

                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='בע"ח'
                            //checked={this.state.checked}
                            containerStyle={{ backgroundColor: '#F4D5A7' }}
                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='אחר'
                            //checked={this.state.checked}
                            containerStyle={{ backgroundColor: '#F4D5A7' }}
                        />
                    </View>
            

                </View>


                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ width:"100%",flex:1}}>



                        <View style={{ height: "100%", flex: 1 }}>

                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{ flex: 1 }}
                            >
                                {
                                console.log("second"),
                                reportsArray.map((item) => { 
                                    return (
                                        <ReportBox imageUri={{ uri: item.imageLink }}
                                            name={item.Description}
                                            date={item.Date}
                                            catagory={item.Catagory}
                                        />
                                    )
                                })
                                }


                            </ScrollView>
                        </View>



                    </View>
                </ScrollView>


                <View style={{ width:"100%",height:"14%"}}>

                    
                    {/* optional map */}




                </View>

                <View style={{ width:"100%",height:"24%" }}>
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



function ReportFormScreen() {
    return (
        <ReportForm />
    );
}

const logStack = createStackNavigator();

function Reports() {
    return (
        <NavigationContainer>
            <logStack.Navigator initialRouteName="rep">
                <logStack.Screen options={{ headerShown: false }} name="rep" component={ReportsScreen} />

                <logStack.Screen name="repFo" options={{ headerShown: false }}
                    component={ReportFormScreen} />

            </logStack.Navigator>
        </NavigationContainer>
    );
}

export default Reports;

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
        width: "30%",
        flex: 1,
        marginTop: "0.4%",
        backgroundColor: "#FAE5D3"

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
        backgroundColor: "#424242"


    }

}
