import React, { Component,useState, useEffect } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableWithoutFeedback,ImageBackground } from "react-native"
import { View, Thumbnail, List, ListItem } from "native-base"
import { CheckBox } from "react-native-elements"

import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';

import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import ReportFormComp from "./ReportFormComp"
//import ImagePicker from 'react-native-image-picker';





class ReportForm extends Component {

    //   backgroundColor="#FAE5D3"
    render() {
        

        return (
            <View style={{ height: "100%", width: "100%" }}>
                <ImageBackground source={require('../assets/img/homePageAdmin_background.jpg')}
                    style={{ flex: 1, resizeMode: 'cover' }}>
                <View style={{ backgroundColor: '#FAE5D3', height: "100%", width: "90%", alignSelf: 'center' }}>


                    <View style={{ width: "100%", height: "70%" }}>
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

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ marginLeft: 12, marginTop: 20 }}>
                            <TouchableWithoutFeedback
                                onPress={() => this.onCamera()}
                            >
                                <View><Icon name="camera" size={30} color="#505050" /></View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={() => this.onImages()}
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
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.textStyleHeaders}>שלח דיווח</Text>

                        </View>
                    </TouchableWithoutFeedback>


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
        marginTop: "4%"
    },

    checkBoxStyle: {

    },
    buttonStyle: {
        flex: 1,
        borderColor: "#004577",
        borderWidth: 1,
        fontSize: 20,
        width: "100%",
        height: 20,
        alignSelf: "center",
        marginTop: 20,
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