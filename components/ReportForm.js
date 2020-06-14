import React, { Component } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableWithoutFeedback, ImageBackground, Button } from "react-native"
import { View, Thumbnail, List, ListItem } from "native-base"
import { CheckBox } from "react-native-elements"

import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import { storage, db,auth } from '../config/Firebase'

import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import ReportFormComp from "./ReportFormComp"

import ImagePicker from 'react-native-image-crop-picker';
import sayCheese from '../assets/functions/takePhoto'
import uploadImage from '../assets/functions/uploadSingleImage'


class ReportForm extends Component {

    
    render() {

        return (
            <View style={{ height: "100%", width: "100%" }}>
                <ImageBackground source={require('../assets/img/homePageAdmin_background.jpg')}
                    style={{ flex: 1, resizeMode: 'cover' }} >
                <View style={{ backgroundColor: '#FAE5D3', height: "100%", width: "90%", alignSelf: 'center' }}>


                    <View style={{ width: "100%", height: "69%" }}>
                        <ScrollView>
                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>

                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>ציפורים</Text>
                                    </View>

                                </CollapseHeader>
                                <CollapseBody>

                                    <ReportFormComp
                                        imageUri={require('../assets/img/flower.jpg')}
                                    />
                                    <ReportFormComp
                                        imageUri={require('../assets/img/fox.jpg')}
                                    />


                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>
                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>יונקים</Text>
                                    </View>


                                </CollapseHeader>
                                <CollapseBody>
                                    <ListItem >
                                        <Text>Aaron Bennet</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Claire Barclay</Text>
                                    </ListItem>
                                    <ListItem last>
                                        <Text>Kelso Brittany</Text>
                                    </ListItem>
                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>

                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>מפגעים</Text>
                                    </View>


                                </CollapseHeader>
                                <CollapseBody>
                                    <ListItem >
                                        <Text>Aaron Bennet</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Claire Barclay</Text>
                                    </ListItem>
                                    <ListItem last>
                                        <Text>Kelso Brittany</Text>
                                    </ListItem>
                                </CollapseBody>
                            </Collapse>


                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom:1 }}>

                        <View style={{ marginLeft: 12, marginTop: 20 }}>
                            <TouchableWithoutFeedback
                                onPress={() => sayCheese('uploads/myPhoto1.jpg','Reports/rep3')
                                
                                }
                            >
                                <View><Icon name="camera" size={30} color="#505050" /></View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={() => uploadImage('uploads/mydduse.jpg')
                                }
                            >
                                <View style={{ marginTop: 20 }}><Icon name="images" size={30} color="#505050" /></View>
                            </TouchableWithoutFeedback>
                            
                        </View>
                       




                        <View style={{ width: "90%" }}>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="הכנס פרטים"
                                multiline={true}
                                numberOfLines={3}
                            //  onChangeText = {(text)}
                            />
                        </View>


                    </View>
                    <View style= {{width:"100%",height:"20%",backgroundColor:'yellow'}}>
                        <TouchableWithoutFeedback onPress={() => alert("pressed")}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textStyleHeaders}>שלח דיווח</Text>

                            </View>
                        </TouchableWithoutFeedback>
                    </View>


                </View>
                </ImageBackground>
            </View>
        )
    }



}

export default ReportForm;

const styles = {
    typeStyle: {
        width: "100%",
        height: 80,
        borderWidth: 0.4,
        borderColor: 'black'
    },
    innerViewStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "green"
    },
    textStyleHeaders: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: "6%"
    },

    checkBoxStyle: {

    },
    buttonStyle: {
        flex: 1,
        borderColor: "#004577",
        borderWidth: 1,
        fontSize: 20,
        width: "100%",
        alignSelf: "center",
        overflow: 'hidden',
        backgroundColor: "#424242"

    },
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
    }




}