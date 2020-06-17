import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    ScrollView
} from "react-native";


class EditInfoBox extends Component {

  

    render() {
        return (


                <View style={styles.containerStyle}>
                    <View style={{ flex: 1 }}>
                        <Image source={this.props.imageUri}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View>
                            <Text
                                style={styles.headlineStyle}
                            >{this.props.headline}</Text>
                        </View>
                        <ScrollView>
                            <Text
                                numberOfLines={4}
                                style={styles.bodyTextStyle}
                            >{this.props.body}</Text>
                        </ScrollView>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.editButtons}>
                                <Button
                                    title="ערוך "
                                    color="green"
                                    onPress={() => this.editText()}
                                />
                            </View>

                            <View style={styles.editButtons}>
                                <Button
                                    title="מחק "
                                    color="green"
                                    onPress={() => this.editText()}
                                />
                            </View>

                        
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
        height: 150,
        width: 380,
        alignSelf: 'center',
        borderWidth: 1.1,
        borderColor: '#A3A3A3',
        borderRadius: 10,
        flexDirection: 'row-reverse',
        backgroundColor: '#F4D5A7',
        marginBottom: 5

    },
    headlineStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textShadowColor: "gray",
        textShadowRadius: 12
    },

    bodyTextStyle: {

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
        marginLeft: "2%"
    },
    buttonsContainer: {
         width: "40%",
         height:"20%",
         flexDirection: 'row',
        marginBottom:"5%" ,
        marginLeft: "5%"
    }
}