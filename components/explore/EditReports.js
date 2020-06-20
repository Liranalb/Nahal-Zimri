import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    ScrollView
} from "react-native";
import {  CheckBox } from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome';
import { db, storage } from '../../config/Firebase'
class EditReports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bodyText: this.props.body,
            catagoryText: this.props.catagory,
            genre: this.props.type,
            changed: false,
            approvedState: this.props.approved

        };
    }
    
    editText() {

    }

    render() {
        return (

            <View style={{ height: 320, width: 150, marginLeft: 10, borderWidth: 0.8, borderColor: '#dddddd', backgroundColor: 'white' }}>
                <View style={{ flex: 4 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 4 }}>

                    <View style={{ flex: 4 }}>
                        {/* <Text>קטגוריה: {this.props.catagory}</Text> */}
                        <TextInput

                            defaultValue={this.props.catagory}
                            numberOfLines={1}
                            onChangeText={(catagoryText) => this.setState({ catagoryText: catagoryText, changed: true })}
                        />
                    </View>

                    <View style={{ flex: 4 }}>
                        <ScrollView>
                            <TextInput

                                defaultValue={this.props.body}
                                multiline
                                onChangeText={(bodyText) => this.setState({ bodyText: bodyText, changed: true })}
                            />
                        </ScrollView>
                    </View>

                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>

                        <Text> {this.props.date}</Text>
                    </View>

                    <View style={{ flex: 4, paddingLeft: 10, paddingTop: 10 }}>
                        <Text
                            numberOfLines= {1}
                            >מדווח: :{this.props.reporter}</Text>
                        <Text> {this.props.approvedText}</Text>
                    </View> 
                </View>
                
                <View style={{ width: "100%", flex: 1, paddingLeft: 3, paddingTop: 3, flexDirection: 'row', backgroundColor: 'pink' }}>
                    <View style={styles.editButtons}>
                        <Button
                            title="ערוך "
                            color="green"
                            onPress={() => {
                                if (this.state.changed) {
                                    let dataPath = 'Reports/' + this.props.id;
                                    let updates = {};
                                    updates[dataPath + "/Description"] = this.state.bodyText;
                                    updates[dataPath + '/Catagory'] = this.state.catagoryText;
                                    db.ref().update(updates);
                                    this.setState({ changed: false });
                                    console.log("Data updated successfully to : " + dataPath);
                                }
                            }
                            }
                        />
                    </View>

                    <View style={styles.editButtons}>
                        <Button
                            title="מחק "
                            color="green"
                            onPress={this.props.onDelete}
                        />
                    </View>

                    <View style={styles.editButtons}>
                        <Button
                            title="אשר "
                            color="green"
                            onPress={() => {
                                // if()
                            }}
                        />
                       
                        
                    </View>
                </View>
                
            </View>

        );
    }
}
export default EditReports;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    editButtons: {
        paddingRight: 1,
        flex:1

    }

});

