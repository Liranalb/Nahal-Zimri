import React, { Component } from "react"
import { Button, Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import {
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ImageBackground,
    ImageBackgroundBase
} from "react-native"




class InfoCatagories extends Component {
    render() {
        return (
            <View style={{ width: "100%", height: "100%"}}>
                <ImageBackground source = {require('../assets/img/homeScreen.jpg') }
                                style= {{flex:1, resizeMode: 'cover'}}>
                    
                
                <View style={styles.rowStyle1}>
                    <View style={styles.infoStyle}>
                        <Image
                            source={require('../assets/img/mammal.jpg')}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                        <View style={styles.textStyle}>
                            <Text>יונקים</Text>
                        </View>
                    </View>

                    <View style={styles.infoStyle}>
                        <Image
                            source={require('../assets/img/bird.jpg')}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                        <View style={styles.textStyle}>
                            <Text>ציפורים</Text>
                        </View>
                    </View>


                </View>
                <View style={styles.rowStyle2}>
                    <View style={styles.infoStyle} >
                        <Image
                            source={require('../assets/img/blossom.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>פריחה</Text>
                        </View>
                    </View>

                    <View style={styles.infoStyle}>
                        <Image
                            source={require('../assets/img/Pisga.jpg')}
                            //   style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>פסגת זאב</Text>
                        </View>
                    </View>


                </View>
                <View style={styles.rowStyle2}>

                    <View style={styles.infoStyle2}>
                        <Image
                            source={require('../assets/img/arch.jpg')}
                            //   style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text>ארכיאולוגיה</Text>
                        </View>
                    </View>


                </View>







                </ImageBackground>
            </View>
        )
    }
}

export default InfoCatagories;

const styles = {
    rowStyle1: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: "90%",
        height: "18%",
        alignSelf: "center",
        marginTop: "24%",
        backgroundColor: 'rgba(52, 52, 52, 0)'

    },
    rowStyle2: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: "90%",
        height: "18%",
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: 'rgba(52, 52, 52, 0)'

    },
    infoStyle: {
        backgroundColor: "#F0B27A",
        borderColor: "gray",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "45%",
        height: "100%",
        marginRight: 14,
        marginLeft: 8


    },
    infoStyle2: {
        backgroundColor: "#F0B27A",
        borderColor: "gray",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "45%",
        height: "100%",
        marginRight: 14,
        marginLeft: "28%"


    },
    textStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#F0B27A',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    }

}