import React, { Component } from "react"
import { TextInput, Alert, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { Header, ListItem, CheckBox, Button } from "react-native-elements"
import ReportBox from "./explore/ReportBox"
import LogoHeaderComponent from "./explore/LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComp from "./HeaderComp"
import Accordion from "react-native-accordion"
//import ImagePicker from 'react-native-image-picker';
// let Accordion = require('react-native-accordion');


class ReportForm extends Component {


    //   backgroundColor="#FAE5D3"
    render() {
        return (
            <View style={{ backgroundColor: '#FAE5D3' }}>
                <View>
                    
                </View>
                <View>
                    
                </View>
                <View>
                    
                </View>
                <Accordion
                    header={header}
                    content={content}
                    easing="easeOutCubic"
                />
                
            </View>
        )
    }



}

export default ReportForm;

const styles = {


}