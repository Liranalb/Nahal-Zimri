import React, { Component } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import { db, storage } from '../config/Firebase';
import ReportBox from "./explore/ReportBox";

class NewOpenRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText: this.props.item.name,
            levelText: this.props.item.level,
            kmText: this.props.item.km,
            durationText: this.props.item.duration,
            animalsText: this.props.item.animals,
            markText: this.props.item.mark,
            typeText: this.props.item.type,
            detailsText: this.props.item.details,
            changed: false
        };
    }
    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <HeaderComp />
                </View>
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.img}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View>
                    <ScrollView>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>שם המסלול</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                defaultValue={this.props.item.name}
                                style={styles.textDetailStyle}
                                onChangeText={(nameText) => this.setState({ nameText: nameText, changed: true })}
                            />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>רמת קושי</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                defaultValue={this.props.item.level}
                                style={styles.textDetailStyle}
                                onChangeText={(levelText) => this.setState({ levelText: levelText, changed: true })}
                            />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>ק"מ</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                defaultValue={this.props.item.km}
                                style={styles.textDetailStyle}
                                onChangeText={(kmText) => this.setState({ kmText: kmText, changed: true })}
                            />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>משך זמן</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                defaultValue={this.props.item.duration}
                                style={styles.textDetailStyle}
                                onChangeText={(durationText) => this.setState({ durationText: durationText, changed: true })}
                            />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>בעלי החיים במסלול</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                defaultValue={this.props.item.animals}
                                style={styles.textDetailStyle}
                                onChangeText={(animalsText) => this.setState({ animalsText: animalsText, changed: true })}
                            />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>סימון</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                defaultValue={this.props.item.mark}
                                style={styles.textDetailStyle}
                                onChangeText={(markText) => this.setState({ markText: markText, changed: true })}
                            />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>סוג המסלול</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                defaultValue={this.props.item.type}
                                style={styles.textDetailStyle}
                                onChangeText={(typeText) => this.setState({ typeText: typeText, changed: true })}
                            />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTitleStyle}>פרטים</Text>
                            <TextInput
                                selectTextOnFocus={true}
                                multiline
                                defaultValue={this.props.item.details}
                                style={styles.textDetailStyle}
                                onChangeText={(detailsText) => this.setState({ detailsText: detailsText, changed: true })}
                            />
                        </View>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                if (this.state.changed) {
                                    let dataPath = 'Routes/' + this.props.id;
                                    let updates = {};
                                    updates[dataPath + "/name"] = this.state.nameText;
                                    updates[dataPath + "/level"] = this.state.levelText;
                                    updates[dataPath + "/km"] = this.state.kmText;
                                    updates[dataPath + "/duration"] = this.state.durationText;
                                    updates[dataPath + "/animals"] = this.state.animalsText;
                                    updates[dataPath + "/mark"] = this.state.markText;
                                    updates[dataPath + "/type"] = this.state.typeText;
                                    updates[dataPath + "/details"] = this.state.detailsText;
                                    db.ref().update(updates);
                                    this.setState({ changed: false });
                                    console.log("Data updated successfully to : " + dataPath);
                                }
                            }
                            }
                                    >
                            <View style={styles.buttonStyle}>
                                <Text
                                    style={{ alignSelf: 'center', marginTop: "5%", fontSize: 18 }}
                                >סיום עריכה</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

/*
<UnitRoutes imageUri={{ uri: item.imageLink }}
                                            name={item.name}
                                            level={item.level}
                                            km={item.km}
                                            duration={item.duration}
                                            type={item.type}
                                            details={item.details}
*/
export default NewOpenRoute;

const styles = {
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        borderColor: "#FFAF50",
        position: 'relative',
        borderWidth: 3,
        height: "50%",
        width: "95%"
    },
    textStyle: {
        flexDirection: 'row-reverse'
    },
    textTitleStyle: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
        fontSize: 10,
        width: "30%",
        height: "13%",
        alignSelf: "center",
        marginTop: "2%",
        marginBottom: "23%",
        overflow: 'hidden'
    },
    textDetailStyle: {
        fontWeight: "normal",
        paddingVertical: 0,
        fontSize: 16,
        alignSelf: "center"
    },
    CheckBoxStyle: {
        backgroundColor: "#F6D365",
        borderColor: "#FFAF50",
        borderWidth: 2,
        width: "30%",
        flex: 1,
        marginTop: 10
    }
}
