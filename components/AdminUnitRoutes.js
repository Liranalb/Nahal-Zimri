import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback 
} from "react-native";
import AdminButton from "./AdminButton";
import Icon from 'react-native-vector-icons/Entypo';


class AdminUnitRoutes extends React.Component {
    render() {
        return (
            <View style={styles.routeStyle}>
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />   
                </View >
                <View >
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>שם המסלול:</Text>
                        <View style={styles.textTitleStyle}>
                            <Text >{this.props.name} </Text>
                        </View>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>רמת הקושי:</Text>
                        <Text >{this.props.level} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}> ק"מ: </Text>
                        <Text >{this.props.km}</Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>משך זמן ההליכה:</Text>
                        <Text >{this.props.duration} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>סוג המסלול:</Text>
                        <Text >{this.props.type} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}> פרטים:</Text>
                        <Text  >{this.props.details} </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textTitleStyle}>החלפת תמונה:</Text>
                        <TouchableWithoutFeedback 
                            onPress={this.props.onReplaceImagePress}
                        >
                            <View style={{width:"10%",marginLeft:"83%" ,borderColor: "#FFAF50", borderRadius: 10,borderWidth: 2,}}><Icon name="images" size={30} color="#505050" /></View>
                        
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:"2%", width:"25%",marginBottom:"2%" }}>
                        <View style={{backgroundColor: "green" ,borderColor: "green", borderWidth: 2,marginLeft:"5%"}}>
                            <TouchableWithoutFeedback
                                onPress={this.props.onDelete}
                            >
                                <View >
                                    <Text
                                        style={{ alignSelf: 'center', marginTop: "5%", fontSize: 18 }}
                                    >  מחק  </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{backgroundColor: "green", borderColor: "green", borderWidth: 2,marginLeft:"13%"}}>
                            <TouchableWithoutFeedback
                                
                            >
                                <View >
                                    <Text
                                        style={{ alignSelf: 'center', marginTop: "5%", fontSize: 18 }}
                                    >  ערוך  </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
                
                

            </View>

        );
    }
}
export default AdminUnitRoutes;

const styles = StyleSheet.create({

    routeStyle: {
        backgroundColor: "#F4D5A7",   //F6D365
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 20,
        marginTop: 10,
        width:'97%',
        alignSelf: 'center'
    },
    imageStyle: {
        marginTop: 1,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "75%",
        width: "30%"
    },
    textStyle: {
        flexDirection: 'row-reverse'


    },
    ButtonStyle: {
        width: "69%",
        // marginLeft:100,



    },
    detailStyle: {
        height: 50,
        width: "69%",
        marginLeft: 111,
        height: "75%",

    },
    dateStyle: {
        height: 30,
        width: "50%",
        marginLeft: 180,
        marginTop: 10

    },
    textTitleStyle: {
        // alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 2
    },
    textDetailStyle: {
        //fontWeight: "normal",
        fontSize: 16,



        //alignSelf: "center"
    }


});
