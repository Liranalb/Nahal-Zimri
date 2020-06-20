import React, { Component, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    ScrollView

} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { photoUploaded, keyID, dataType } from './InfoAdmin'
import { db } from '../config/Firebase'

class InfoUnitAdmin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            catagory: this.props.catagory,
            title: this.props.title,
            detail: this.props.detail,
            changed: false
        }

    }


    render() {

        return (
            <View style={{
                flexDirection: 'row',
              
            }} >
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View style={{
                    flex: 1,
                }} >
                    
                    <View style={
                        styles.textStyle
                    }>
                        
                        <TextInput style={{
                            fontWeight: "bold",
                            fontSize: 18,
                        }} multiline
                            onChangeText={(catagory) => this.setState({ catagory, changed: true })}
                            maxHeight={40}>
                                
                            {this.props.catagory}</TextInput>
                            
                    </View>
                    <View style={
                        styles.textStyle
                    }> 
                        <TextInput style={{
                            fontWeight: "bold",
                            fontSize: 18,
                        }} multiline
                            onChangeText={(title) => this.setState({ title, changed: true })}
                            maxHeight={90}
                        >{this.props.title} </TextInput>
                      
                    </View>

                    <View style={
                        styles.textStyle} >
                        <TextInput style={{
                            fontWeight: "normal",
                            fontSize: 16,
                        }} multiline
                            onChangeText={(detail) => this.setState({ detail, changed: true })}
                            maxHeight={70}
                        > {this.props.detail} </TextInput>
                    </View>

                    <View >
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: 16,
                        }}> תאריך העלאה | {this.props.date}  </Text>
                    </View>



                    <View style={{ width: "40%", flex: 2, paddingLeft: 3, paddingTop: 10, flexDirection: 'row' }}>

                        <View style={{
                            paddingRight: 1
                        }}>

                            <Button
                                title="ערוך"
                                color="green"
                                onPress={() => {

                                    if (this.state.changed) {


                                        let dataPath = 'Articles1/' + this.props.idFromParent;
                                        let updates = {};
                                        updates[dataPath + "/Catagory"] = this.state.catagory;
                                        updates[dataPath + '/Title'] = this.state.title;
                                        updates[dataPath + '/Description'] = this.state.detail;
                                        db.ref().update(updates);
                                        this.setState({ changed: false });
                                        console.log("Data updated successfully to : " + dataPath);
                                    }
                                }
                                }
                            />
                        </View>

                        <View style={{
                            paddingRight: 1
                        }}>
                            <Button
                                title="מחק"
                                color="green"
                                onPress={this.props.removeItem}



                            />
                        </View>
                        <View style={{
                            alignSelf: "flex-start",
                            paddingLeft: 20
                        }} >
                            <TouchableWithoutFeedback
                                onPress={this.props.upLoadPhoto}
                            >
                                <View >
                                    <Icon name="images" size={30} color="white" />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={{
                            paddingLeft: 20,


                        }}>
                            <Button
                                title="הוספת תמונה"
                                color="green"
                                onPress={this.props.addPhoto}
                            />
                        </View>

                    </View>
                </View>

            </View>
        );
    }
}
export default InfoUnitAdmin;

const styles = StyleSheet.create({
    textStyle: {
        margin:1,
        borderRadius: 4,
        borderColor:"gray",
        borderWidth:1,
        width: "56%",
        flexDirection: 'row-reverse',
        alignSelf: "flex-end",
       

    },
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "50%",
        width: "40%"
    },
});