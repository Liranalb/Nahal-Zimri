import React, { Component } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox, Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"

//import ImagePicker from 'react-native-image-picker';



class ReportForm extends Component {

    

    //   backgroundColor="#FAE5D3"
    render() {
        return (
            <View style={{ backgroundColor: '#FAE5D3' }}>
                <ScrollView>


                    <View style={styles.blockStyle}>

                    </View>
                    <View style={styles.blockStyle}>

                    </View>
                    <View style={styles.blockStyle}>

                    </View>
                </ScrollView>

            </View>
        )
    }



}

export default ReportForm;

const styles = {
    blockStyle: {
        width: "100%",
        height: "28%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: 'green'
    }

}