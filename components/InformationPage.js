import React, { Component } from "react"
import { TextInput, Button, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import InfoBox from './explore/InfoBox'
//import ImagePicker from 'react-native-image-picker';



class InformationPage extends Component {

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

                        <View style={{ height: "100%", width: "100%" }}>
                            <ScrollView
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}
                            >
                                <InfoBox imageUri={require('../assets/img/purple.jpg')}
                                    headline="הדרדר הכחול"
                                    body="דַּרְדַּר כָּחֹל הוא צמח חד-שנתי ממשפחת המורכבים. לפרחי הסוג דַּרְדַּר שפע צבעים, המשותף לאבקנים ולעלי הכותרת מצבעים בהירים כמו: לבן, צהוב, כתום, קרם עד לצבעים כהים יותר כמו: ורוד, לילך, כחול, סגול ואפילו אדום. "
                                />

                                <InfoBox imageUri={require('../assets/img/blossom.jpg')}
                                    headline=" flower"
                                    body="ב"
                                />

                                <InfoBox imageUri={require('../assets/img/Sunflower.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <InfoBox imageUri={require('../assets/img/bird.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <InfoBox imageUri={require('../assets/img/Pisga.jpg')}
                                    headline="flower"
                                    body="בלה בלה בלה"
                                />

                                <InfoBox imageUri={require('../assets/img/Shafan.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <InfoBox imageUri={require('../assets/img/purple.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <InfoBox imageUri={require('../assets/img/mammal.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />

                                <InfoBox imageUri={require('../assets/img/arch.jpg')}
                                    headline=" flower"
                                    body="בלה בלה בלה"
                                />


                            </ScrollView>
                        </View>

                    </View>


                </View>















            </View>
        )
    }



}

export default InformationPage;

const styles = {
    containerStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAE5D3",
        borderWidth: 1,
        borderColor: 'gray'

    }
}