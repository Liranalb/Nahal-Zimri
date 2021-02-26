import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity

} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { db } from '../../config/Firebase'
import { Divider } from 'react-native-paper';
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

            <View style={styles.containerStyle}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={this.props.onExpandPress}
                    >
                        <View style={styles.imageView}>
                            <Image source={this.props.imageUri}
                                style={styles.imageStyle}

                            />
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 2 }}>
                    <View style={{ width: '100%' }}>
                        <View>
                            <View style={{ flex: 2 }}>
                                <TextInput
                                    style={styles.contentsType}
                                    defaultValue={this.props.catagory}

                                    onChangeText={(catagory) => this.setState({ catagory, changed: true })}
                                />
                            </View>
                            <View style={{ flex: 2, marginRight: '4%' }}>
                                <Text style={{
                                    fontWeight: "normal",
                                    fontSize: 14
                                }}>{this.props.date}</Text>
                            </View>

                        </View>
                        <Divider />
                        <View>
                            <TextInput style={styles.title}

                                defaultValue={this.props.title}
                                multiline
                                onChangeText={(title) => this.setState({ title, changed: true })}
                            />
                        </View>
                        <Divider />
                        <View>
                            <View style={{ paddingBottom: "2%" }}>
                                <TextInput style={styles.textInputBox}

                                    defaultValue={this.props.detail}
                                    numberOfLines={2}
                                    multiline
                                    onChangeText={(detail) => this.setState({ detail, changed: true })}

                                />
                            </View>
                            <Divider />
                            <View>
                                <TextInput style={styles.textInputBox}

                                    defaultValue={this.props.body}
                                    multiline
                                    onChangeText={(detail) => this.setState({ detail, changed: true })}

                                />
                            </View>
                        </View>


                    </View>
                    <Divider />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.editButtons}>
                            <Button
                                title="ערוך"
                                color="green"
                                onPress={() => {

                                    if (this.state.changed) {
                                        let dataPath = 'Articles/' + this.props.idFromParent;
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

                        <View style={styles.editButtons}>
                            <Button
                                title="מחק"
                                color="green"
                                titleStyle={{
                                    fontSize: 44,
                                }}
                                onPress={this.props.removeItem}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={this.props.onReplaceImagePress}
                        >
                            <View style={{ marginLeft: "3%" }}>
                                <Icon name="image" size={36} color="green" />
                            </View>
                        </TouchableOpacity>





                    </View>

                </View>
            </View>
        );

    }
}
export default InfoUnitAdmin;



const styles = {
    title: {
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 1,
        paddingVertical: 0,
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "1%",
        marginRight: "1%"
    },

    contentsType: {
        fontWeight: "bold",
        fontSize: 16,
        paddingVertical: 0,
        marginLeft: "1%",
        marginRight: "1%"
    },


    textInputBox: {
        fontWeight: "normal",
        fontSize: 16,
        paddingVertical: 0,
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "1%",
        marginRight: "1%"
    },

    imageView: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        marginTop: "3%",
        marginRight: "5%",
        borderColor: "#FFAF50",
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
    },

    containerStyle: {
        alignSelf: 'flex-start',
        marginBottom: "1%",
        marginTop: "1%",
        borderRadius: 10,
        flexDirection: 'row-reverse',
        backgroundColor: '#F4D5A7',
        overflow: 'hidden',
        paddingBottom: "1%"
    },
    headlineStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textShadowColor: "gray",
        textShadowRadius: 10
    },

    imageStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    editButtons: {
        marginLeft: "2%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "green"

    },
    buttonsContainer: {
        marginTop: "2%",
        width: "80%",
        flexDirection: 'row',


    }
}