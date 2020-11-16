import React, { Component } from "react"
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Entypo'
import { Divider } from 'react-native-paper'
class NewOpenArt extends Component {

    render() {
        return (

            <View style={{ width: "100%", height: "100%" }}>

                <View style={styles.imgStyle}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>

                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: "100%", height: "100%", resizeMode: 'cover' }}
                        />

                    </View>

                </View>

                <View style={{ width: "100%", height: "60%", backgroundColor: "#FAE5D3" }}>
                    <View style={styles.textVStyle}>
                        <Text
                            style={styles.textStyle}
                        >{this.props.title}</Text>
                    </View>

                    <View style={styles.mainStyle}>
                        <ScrollView>

                            <View style={{ width: "98%", alignSelf: 'center' }}>
                                <Text
                                    style={styles.substitleStyle}
                                >{this.props.subtitle}
                                </Text>
                            </View>

                            <Divider />

                            <View style={{ width: "98%", alignSelf: 'center' }}>
                                <Text
                                    style={styles.mainTextStyle}
                                >{this.props.description}

                                </Text>
                            </View>


                        </ScrollView>
                    </View>

                    <View style={{ width: "100%", height: "15%", alignSelf: 'center' }}>

                        <TouchableOpacity
                            onPress={this.props.onCrossPress}
                        >
                            <Icon name="cross" size={50} color='gray'
                                style={{ alignSelf: 'center' }}
                            />

                        </TouchableOpacity>

                    </View>
                </View>
            </View >
        )
    }
}

export default NewOpenArt;

const styles = {

    imgStyle: {
        width: "100%",
        height: "40%",
        // backgroundColor: '#FAE5D3',
        alignSelf: 'center',
        // backgroundColor: '#434343'
    },
    textStyle: { //text header
        alignItems: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        //textDecorationLine: 'underline',
        //textShadowColor: "gray",
        textShadowRadius: 15
    },
    textVStyle: {
        alignItems: 'center',
        marginTop: "3%",
        width: "100%",
        height: "10%"
    },
    mainStyle: { //textbox
        width: "92%",
        height: "72%",
        alignSelf: 'center',
        backgroundColor: "#FBF5E5",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#CECECE",
        marginTop: '2%'
    },
    mainTextStyle: { //single article text
        fontSize: 17,
        marginRight: '3%',
        marginLeft: '3%',
        marginTop: '3%'
    },
    substitleStyle: { //single article subtitle
        fontWeight: 'bold',
        fontSize: 17,
        marginRight: '3%',
        marginLeft: '3%',
        marginTop: '3%'
    }
}
