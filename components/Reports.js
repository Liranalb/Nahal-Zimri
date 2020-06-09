import React, { Component } from "react"
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
import ReportForm from "./ReportForm";

// const db=firebase.firestore();

function ReportsScreen ({ navigation }) {

    /*constructor() {
        // db.collection('Reports').get().then((snapshot)=>{

        //  })

        super();
        this.state = {
            text: "",
            username: "",
            catagory: "",
            loading: false
        }
    }*/


    //   backgroundColor="#FAE5D3" ,  width: "100%", height: "10%"  , width: "100%", height: "50%",
        return (
            <View style={{ width:"100%",height:"100%", backgroundColor: '#FAE5D3' }}>
                <HeaderComp />
                <View style={{ width: "100%", height: "97%"}}>
                    <View style={{ flexDirection: 'row',flex:1}}> 
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
                    <View style={{ flex:6 }}>
                    
                    
                    
                        <View style={{ height: "100%" ,flex:1}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style = {{flex:1}}
                                
                            >
                                
                                <ReportBox imageUri={require('../assets/img/flower.jpg')}
                                    name="purple flower"
                                    date="23.01.2020"
                                    catagory="פריחה"
                                />
                                <ReportBox imageUri={require('../assets/img/Shafan.jpg')}
                                    name="Shafan"
                                    date="23.01.2020"
                                />
                                <ReportBox imageUri={require('../assets/img/im3.jpeg')}
                                    name="Sunflower"
                                    date="23.01.2020"
                                />
                                <ReportBox imageUri={require('../assets/img/flower.jpg')}
                                    name="purple flower"
                                    date="23.01.2020"
                                />
                                <ReportBox imageUri={require('../assets/img/Shafan.jpg')}
                                    name="Shafan"
                                    date="23.01.2020"
                                />
                                
                                <ReportBox imageUri={require('../assets/img/im3.jpeg')}
                                    name="Sunflower"
                                    date="23.01.2020"
                                />
                                
                            </ScrollView>
                        </View>

                        
                        
                    </View>
                    </ScrollView>
                    

                    <View style={{ flex: 2}}>




                        {/* optional map */}




                    </View>

                    <View style={{flex:3}}>
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
            <ReportForm/>
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
        // height: "40%",
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