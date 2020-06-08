import React, { Component } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox,Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';
import firebase from "../config/Firebase"
//import ImagePicker from 'react-native-image-picker';

=======
import firebase from "../config/Firebase"

//import ImagePicker from 'react-native-image-picker';

>>>>>>> bb3ed748dd46bb73a4d0b66ecc0ce43e8b6d6541
const db=firebase.firestore();

class Reports extends Component {

    constructor() {
        db.collection('Reports').get().then((snapshot)=>{
<<<<<<< HEAD
            alert(snapshot.docs);
         })
       
        super();
        

        
=======
           
         })

        super(); 
>>>>>>> bb3ed748dd46bb73a4d0b66ecc0ce43e8b6d6541
        this.state = {
            text: "",
            username: "",
            catagory: "",
            loading: false
        }
    }
    

             //   backgroundColor="#FAE5D3"
    render() {
        return (
            <View style = {{backgroundColor: '#FAE5D3'}}>
                <HeaderComp />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox

                            center
                            title='פריחה'
                            checked={this.state.checked}
                            containerStyle={{backgroundColor:'#F4D5A7'}}
                          
                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='בע"ח'
                            checked={this.state.checked}
                        />
                    </View>
                    <View style={styles.CheckBoxStyle}>
                        <CheckBox
                            center
                            title='אחר'
                            checked={this.state.checked}
                        />
                    </View>

                </View>

                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: '#FAE5D3', paddingTop: 20 }}>

                        <View style={{ height: "100%" }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
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


                <View style={{ flexDirection: 'row' }}>

                    <View style={{ marginLeft: 12, marginTop: 20 }}>
                        <TouchableOpacity
                            onPress={() => this.onCamera()}
                        >
                            <View><Icon name="camera" size={30} color="#505050" /></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onImages()}
                        >
                        <View style={{ marginTop: 20 }}><Icon name="images" size={30} color="#505050" /></View>
                        </TouchableOpacity>
                    </View>




                    <View style={{ width: "90%" }}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="הכנס פרטים"
                            multiline={true}
                            numberOfLines={4}
                        //  onChangeText = {(text)}
                        />
                    </View>


                </View>

                <View style={styles.buttonStyle}>
                    <Button
                        color="#505050"
                        title="שלח דיווח"
                        buttonStyle = {{}}
                        
                    //   onPress= {() => this.onButtonPress()}
                    >
                    </Button>
                </View>



            </View>
        )
    }



}

export default  Reports;

const styles = {
    buttonStyle: {
        borderColor: "#004577",
        borderRadius: 25,
        borderWidth: 4,
        fontSize: 20,
        width: "80%",
        alignSelf: "center",
        marginTop: 20,
        overflow: 'hidden'

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
    CheckBoxStyle: {
        width: "30%",
        flex: 1,
        marginTop: 10,
        backgroundColor: "#FAE5D3"
    }

}