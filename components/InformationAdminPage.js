import React, { Component } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox, Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import InfoBox from './explore/InfoBox'
import EditInfoBox from './explore/EditInfoBox'
//import ImagePicker from 'react-native-image-picker';



class InformationAdminPage extends Component {

    constructor() {
        super();
        this.state = {
            headline: "",
            body: "",
            loading: false
        }
    }
    //   backgroundColor="#FAE5D3"
    render() {
        return (
            <View>
                <HeaderComp />

                <View style={styles.containerStyle}>

                    <View style={{ height: "100%", width: "100%", backgroundColor: '#E9DFD1' }}>

                        <View style={{ height: "50%", width: "100%" }}>
                            <ScrollView
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}
                            >
                                <EditInfoBox imageUri={require('../assets/img/purple.jpg')}
                                    headline="הדרדר הכחול"
                                    body="דַּרְדַּר כָּחֹל הוא צמח חד-שנתי ממשפחת המורכבים. לפרחי הסוג דַּרְדַּר שפע צבעים, המשותף לאבקנים ולעלי הכותרת מצבעים בהירים כמו: לבן, צהוב, כתום, קרם עד לצבעים כהים יותר כמו: ורוד, לילך, כחול, סגול ואפילו אדום. "
                                />

                                <EditInfoBox imageUri={require('../assets/img/blossom.jpg')}
                                    headline=" flower"
                                    body="ב"
                                />

                                <EditInfoBox imageUri={require('../assets/img/Sunflower.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <EditInfoBox imageUri={require('../assets/img/bird.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <EditInfoBox imageUri={require('../assets/img/Pisga.jpg')}
                                    headline="flower"
                                    body="בלה בלה בלה"
                                />

                                <EditInfoBox imageUri={require('../assets/img/Shafan.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <EditInfoBox imageUri={require('../assets/img/purple.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <EditInfoBox imageUri={require('../assets/img/mammal.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <EditInfoBox imageUri={require('../assets/img/arch.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />


                            </ScrollView>
                        </View>

                        <View style={styles.editBoxStyle}>
                            <View style={{ flex: 1 }}>
                                <View style={{ marginLeft: 12, marginTop: 20 }}>
                                    <TouchableOpacity
                                        onPress={() => this.onCamera()}
                                    >
                                        <View style={{marginLeft:12 }}>
                                            <Icon name="camera" size={30} color="white" />
                                            </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.onImages()}
                                    >
                                        <View style={{ marginTop: 20,marginLeft:12 }}>
                                            <Icon name="images" size={30} color="white" />
                                            </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.onImages()}
                                    >
                                        <View style={styles.buttonStyle}>
                                            <Text
                                               style= {{alignSelf: 'center',marginTop: 20,fontSize:18}}
                                                >הוסף</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 5 }}>
                                <TextInput
                                    style={styles.headlineInputStyle}
                                    placeholder="הכנס כותרת"
                                />

                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder="הכנס תוכן"
                                    multiline={true}
                                    numberOfLines={4}
                                //  onChangeText = {(text)}
                                />

                            </View>







                        </View>

                    </View>


                </View>















            </View>
        )
    }



}

export default InformationAdminPage;

const styles = {
    containerStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAE5D3",
        borderWidth: 1,
        borderColor: 'gray'

    },
    editBoxStyle: {
        width: "100%",
        height: "29%",
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#545454',
        borderRadius: 7,
        backgroundColor: '#4C4C4B'
    },
    textInputStyle: {
        backgroundColor: "#FFF4E3",
        borderColor: "#004577",
        width: "90%",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 5
    },
    headlineInputStyle: {
        backgroundColor: "#FFF4E3",
        borderColor: "#004577",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 10

    },
    buttonStyle: {
        width: "100%",
        height: "60%",
        backgroundColor: '#FFF4E3',
        borderRadius:20,
        marginTop:10,
        borderWidth:2,
        borderColor: 'black'

    }
}