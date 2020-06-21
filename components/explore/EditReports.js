import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import { Divider } from 'react-native-paper';
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

            <View style={{ height: 390, width: 175, marginLeft: 10, borderWidth: 0.8, borderColor: '#FFAF50', backgroundColor: '#F4D5A7' }}>

                <View style={{height:'40%' }}>
                    <TouchableWithoutFeedback onPress={this.props.onExpand}>
                       
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                      
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ height:'50%' }}>

                    <View style={{ height:"19%" }}>
                        <TextInput
                            defaultValue={this.props.catagory}
                            numberOfLines={1}
                            onChangeText={(catagoryText) => this.setState({ catagoryText: catagoryText, changed: true })}
                            style = {{fontSize:17}}
                        />
                         
                    </View>
                    <Divider/>
                    <View style={{ height:"60%"}}>
                        <ScrollView>
                            <TextInput

                                defaultValue={this.props.body}
                                multiline
                                onChangeText={(bodyText) => this.setState({ bodyText: bodyText, changed: true })}
                            />
                        </ScrollView>
                    </View>
                    <Divider/>
                    

                    <View style={{ height:"10%" }}>
                        <Text
                            numberOfLines={1}
                        >מדווח: {this.props.reporter}</Text>
                        
                    </View>
                    <Divider/>
                    <View style={{ height:"10%" ,flexDirection:'row'}}>

                        <Text> {this.props.date}</Text>
                        <Text> {this.props.approvedText}</Text>
                    </View>
                </View>

                <View style={{ width: "100%", height:"10%", paddingLeft: 3, paddingTop: 3, flexDirection: 'row' }}>
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
        flex: 1

    }

});

