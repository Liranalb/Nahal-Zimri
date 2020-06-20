import React, { Component } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableWithoutFeedback, ImageBackground, Button, Image } from "react-native"
import { View, Thumbnail, List, ListItem } from "native-base"
import { CheckBox } from "react-native-elements"

import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/FontAwesome';
import HeaderComp from "./HeaderComp"
import { storage, db, auth } from '../config/Firebase'

import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import ReportFormComp from "./ReportFormComp"

import ImagePicker from 'react-native-image-crop-picker';
import sayCheese from '../assets/functions/takePhoto'
import uploadImage from '../assets/functions/uploadSingleImage'


let keyID, photoUploaded = false;

function getDate() {
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    let dateStr = date + "." + month + "." + year;
    return dateStr;
}

async function pressPhoto(source) {

    // setting the paths
    let imageID = "img" + keyID + ".jpg";
    let dataPath = 'Reports/red' + keyID;
    let storagePath = "Images/Reports/" + imageID;


    console.log("imageID is : " + imageID + "\n storagePath" + storagePath);
    let result;
    if (source === "camera")
        result = await sayCheese(storagePath);
    else
        result = await uploadImage(storagePath);
    console.log(" test \n" + result);
    if (result === -1) {

        console.log("\n\n ----------------failed ----------------\n\n");
        return -1;

    }
    photoUploaded = true;
    console.log("Out : " + photoUploaded);
}

function sendData(body, type, genre) {

    if (photoUploaded === false) {
        alert("Upload image first");
        return -1;
    }

    else {

        let repId = 'rep' + keyID;
        let dataPath = 'Reports/rep' + keyID;
        let imageID = "img" + keyID + ".jpg";
        let storagePath = "Images/Reports/" + imageID;
        storage.ref().child(storagePath).getDownloadURL().then((url) => {

            let date = getDate();
            let newInfo = {
                Approved: true,
                Date: date,
                Description: body,
                Catagory: type,
                Type: genre,
                ImageLink: url,
                id: repId,
                ReporterName: "reportter name"
            }
            db.ref(dataPath).set(newInfo);
        })
    }

    return 0;
}
const ITEMS = ["One", "Two", "Three", "Four", "Five"];




class ReportForm extends Component {

    constructor() {
        super()
        this.state = {
            checkItems: ITEMS.reduce(
                (items, item) => ({
                    ...items,
                    [item]: false
                }),
                {}
            ),
            body: "",
            reportType: "",
            type:"",
            genre:""

        }
    }

    handlePress = (checkNumber,value, genre) => {
        let checkItems= {...this.state.checkItems} , val=value; 
        Object.keys(this.state.checkItems).forEach(checkbox => {
            if(!Object.is(checkNumber,checkbox))
                checkItems[checkbox]=false;
            else {
                if (checkItems[checkbox]===false)
                    checkItems[checkbox]=true;
                else {
                    checkItems[checkbox]=false;
                    val=""
                }
            }
        });
        this.setState({ checkItems, type: val, genre: genre })
    };

    

    componentDidMount() {
        keyID = db.ref().child('Reports').push().key;
    }



    render() {


        let refreshPage = () => {
            this.setState({ body: "" });
            keyID = db.ref().child('Reports').push().key;
            photoUploaded = false;
        }




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


    

                                        <View style={styles.container}>
                                            <View style={{ flex: 1}}>
                                                <Image source={require('../assets/img/bird.jpg')}
                                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                                />
                                            </View>
                                            <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <CheckBox
                                                        checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                        uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                        checked={this.state.checkItems['One']}
                                                        onPress={() =>  this.handlePress('One', 'דרור','Birds')}
                                                    />
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.textStyle}>דרור</Text>
                                                </View>
                                            </View>
                                        </View>

                                        
                                        <View style={styles.container}>
                                            <View style={{ flex: 1 }}>
                                                <Image source={require('../assets/img/BigHankan.jpg')}
                                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                                />
                                            </View>
                                            <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <CheckBox
                                                        checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                        uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                        checked={this.state.checkItems['Two']}
                                                        onPress={() =>  this.handlePress('Two', 'חנקן גדול','Birds')}
                                                    />
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.textStyle}>חנקן גדול</Text>
                                                </View>
                                            </View>
                                        </View>
                                        



                                    </CollapseBody>
                                
                                </Collapse>

                                <Collapse>
                                    <CollapseHeader style={styles.typeStyle}>
                                        <View style={styles.innerViewStyle}>
                                            <Text style={styles.textStyleHeaders}>יונקים</Text>
                                        </View>


                                    </CollapseHeader>
                                    <CollapseBody>

                                    <View style={styles.container}>
                                            <View style={{ flex: 1}}>
                                                <Image source={require('../assets/img/fox.jpg')}
                                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                                />
                                            </View>
                                            <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <CheckBox
                                                        checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                        uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                        checked={this.state.checkItems['Three']}
                                                        onPress={() =>  this.handlePress('Three', 'שועל מצוי','Mammals')}
                                                    />
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.textStyle}>שועל מצוי</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.container}>
                                            <View style={{ flex: 1 }}>
                                                <Image source={require('../assets/img/Shafan.jpg')}
                                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                                />
                                            </View>
                                            <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <CheckBox
                                                        checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                        uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                        checked={this.state.checkItems['Four']}
                                                        onPress={() =>  this.handlePress('Four', 'שפן סלע','Mammals')}
                                                    />
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.textStyle}>שפן סלע</Text>
                                                </View>
                                            </View>
                                        </View>


                                    </CollapseBody>
                                
                                </Collapse>
                                
                                <Collapse>
                                    <CollapseHeader style={styles.typeStyle}>

                                        <View style={styles.innerViewStyle}>
                                            <Text style={styles.textStyleHeaders}>מפגעים</Text>
                                        </View>


                                    </CollapseHeader>
                                    <CollapseBody>

                                    <View style={styles.container}>
                                            <View style={{ flex: 1}}>
                                                <Image source={require('../assets/img/garbage.jpg')}
                                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                                />
                                            </View>
                                            <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <CheckBox
                                                        checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                        uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                        checked={this.state.checkItems['Five']}
                                                        onPress={() =>  this.handlePress('Five', 'פסולת','Other')}
                                                    />
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.textStyle}>פסולת</Text>
                                                </View>
                                            </View>
                                        </View>

                                      

                                    </CollapseBody>
                                </Collapse>


                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 1 }}>

                            <View style={{ marginLeft: 12, marginTop: 20 }}>
                                <TouchableWithoutFeedback
                                    // onPress={() => sayCheese('uploads/myPhoto1.jpg','Reports/rep3')}
                                    onPress={() => pressPhoto("camera")}

                                >
                                    <View><Icon name="camera" size={30} color="#505050" /></View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    // onPress={() => uploadImage('uploads/mydduse.jpg')}
                                    onPress={() => pressPhoto("upload")}
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
                                    onChangeText={text => this.setState({ body: text })}
                                    value={this.state.body}
                                />
                            </View>


                        </View>
                        <View style={{ width: "100%", height: "20%", backgroundColor: 'yellow' }}>
                            <TouchableWithoutFeedback onPress={() => {
                                let result = sendData(this.state.body,this.state.type, this.state.genre);
                                console.log("result is: " + result);
                                // if (result === 0)
                                //     refreshPage();
                            }}>
                                <View style={styles.buttonStyle}>
                                    <Text style={styles.textStyleHeaders}>שלח דיווח</Text>

                                </View>
                            </TouchableWithoutFeedback>
                        </View>


                    </View>
                </ImageBackground>
                {console.log("render")}
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
    },
    container: {
        height: 110,
        width: "100%",
        borderWidth: 0.8,
        borderColor: '#dddddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {

        fontSize: 24,
        marginTop: 17

    }




}