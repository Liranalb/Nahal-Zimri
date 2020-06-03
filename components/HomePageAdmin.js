import 'react-native-gesture-handler';
import React, { Component } from "react"
import { Button, Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import { Image, View, TouchableWithoutFeedback, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container } from "native-base"
import LogoHeaderComponent from "./explore/LogoHeaderComponent";
import Icon from 'react-native-vector-icons/Entypo';

/*<Image source={require('../assets/img/Logo.png')}/>*/
/*https://reactnative.dev/docs/images*/
/*https://reactnative.dev/docs/image*/
/*https://stackoverflow.com/questions/34180629/react-native-fit-image-in-containing-view-not-the-whole-screen-size*/
/*leftComponent={{ icon: require('../assets/img/menu-24px.svg')}}*/
/* <Image source={'../assets/img/menu-24px.svg'}/>8*/
/*title=''
                        color='no-color'
                        backgroundColor='#F0B27A'*/
/*centerComponent={{ text: 'נחל זמרי', style: { color: 'black', fontSize: 22, backgroundColor: '#FAE5D3'}}}*/
/*centerComponent={<LogoHeaderComponent imageUri={require('../assets/img/Logo.png')}/>}*/
class HomePageAdmin extends Component {
    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
                <View>
                    <Header style={{ width: "100%", height: "100%" }}
                        backgroundColor='#FAE5D3'
                        leftComponent={<Icon name="user" size={30} color='black' />}
                        centerComponent={<LogoHeaderComponent imageUri={require('../assets/img/Logo.png')} />}
                        rightComponent={{ icon: 'menu', color: 'black' }}
                    />
                </View>
                <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                    <View style={styles.infoStyle}>
                        <Image
                            source={require('../assets/img/article.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>כתבות</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.routesStyle}>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routesStyleLeft}>
                            <Image
                                source={require('../assets/img/travel.jpg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <Text>מסלולים</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={styles.routesStyleRight}>
                            <Image
                                source={require('../assets/img/flower.jpg')}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <View style={styles.textStyle}>
                                <Text>מידע</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                    <View style={styles.infoStyle}>
                        <Image
                            source={require('../assets/img/fox.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>אירועים</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                    <View style={styles.observationsStyle}>
                        <Image
                            source={require('../assets/img/obs.jpeg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>תצפיות</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default HomePageAdmin;

const styles = {
    textStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#F0B27A',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    dataStyle: {
        backgroundColor: "#FAE5D3"
    },
    infoStyle: {
        backgroundColor: "#F0B27A",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        height: "26%",
        alignSelf: "center",
        marginTop: 10
    },
    routesStyle: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: "90%",
        height: "18%",
        alignSelf: "center",
        marginTop: 10
    },
    routesStyleLeft: {
        backgroundColor: "#ff8c00",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "49%",
        height: "100%",
        alignSelf: "center",
        marginRight: 10
    },
    routesStyleRight: {
        backgroundColor: "#ff8c00",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "48%",
        height: "100%",
        alignSelf: "center",
    },
    observationsStyle: {
        backgroundColor: "#F0B27A",
        borderColor: "#F0B27A",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        height: "10%",
        alignSelf: "center",
        marginTop: 10
    }
}