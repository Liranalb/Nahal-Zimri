import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { db } from '../../config/Firebase'

class EditInfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyText: this.props.body,
            headText: this.props.headline,
            changed: false
        };
    }

    render() {
        return (

            <View style={styles.containerStyle}>

                <View style={{ flex: 1 }}>
                    <View style={{ width: '100%', height: '100%' }}>
                        <Image source={this.props.imageUri}
                            style={styles.imageStyle}

                        />
                    </View>

                </View>

                <View style={styles.textDetailStyle}>
                    <View >
                        <TextInput
                            selectTextOnFocus={true}
                            defaultValue={this.props.headline}
                            style={styles.headlineStyle}
                            onChangeText={(headText) => this.setState({ headText: headText, changed: true })}

                        />

                    </View>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <TextInput
                            selectTextOnFocus={true}
                            defaultValue={this.props.body}
                            multiline
                            onChangeText={(bodyText) => this.setState({ bodyText: bodyText, changed: true })}
                        />
                        {/* // this.props.onEditText */}
                    </ScrollView>

                    <View style={styles.buttonsContainer}>
                        <View style={styles.editButtons}>
                            <Button
                                title="ערוך "
                                color="green"
                                onPress={() => {
                                    if (this.state.changed) {
                                        let dataPath = 'Information/' + this.props.id;
                                        let updates = {};
                                        updates[dataPath + "/Body"] = this.state.bodyText;
                                        updates[dataPath + '/Title'] = this.state.headText;
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

                        <TouchableOpacity
                            onPress={this.props.onReplaceImagePress}
                        >
                            <View style={{ marginLeft: "12%" }}>
                                <Icon name="image" size={36} color="green" />
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        );
    }
}
export default EditInfoBox;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerStyle: {
        height: 200,
        width: "100%",
        alignSelf: 'center',
        borderWidth: 1.1,
        borderColor: 'orange',
        borderRadius: 10,
        flexDirection: 'row-reverse',
        backgroundColor: '#F4D5A7',
        overflow: 'hidden'

    },
    headlineStyle: {
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 1,
        paddingVertical: 0,
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "1%",
        marginRight: "1%"
    },

    textDetailStyle: {
        flex: 1,
        fontWeight: "normal",
        fontSize: 16,
        marginLeft: '3%'
    },

    imageStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        //   borderBottomLeftRadius: 10,   // cause some scrolling problems
        //   borderTopLeftRadius: 10
    },
    editButtons: {
        marginLeft: "2%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "green"
    },
    buttonsContainer: {
        width: "40%",
        height: "20%",
        flexDirection: 'row',
        marginTop: "3%",
        marginBottom: "5%",
        marginLeft: "5%"
    },

    buttonsContainer: {
        marginTop: "2%",
        width: "80%",
        flexDirection: 'row',
    }
}