import React, { Component } from "react"
import { Button, Header, ListItem } from "react-native-elements"
/*import { createStackNavigator } from 'react-navigation-stack';*/
import {
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ImageBackground
} from "react-native"




export function PathCatagoriesScreen({ navigation }) {
        return (
            <View style={{ width: "100%", height: "100%"}}>
                <ImageBackground source = {require('../assets/img/homePageAdmin_background.jpg') }
                                style= {{flex:1, resizeMode: 'cover'}}>
                    
                
                <View style={styles.rowStyle1}>
                    <View style={styles.infoStyle}>
                        <Image
                            source={require('../assets/img/hike.jpg')}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                        <View style={styles.textStyle}>
                            <Text>מסלולי טבע</Text>
                        </View>
                    </View>

                    <View style={styles.infoStyle}>
                        <Image
                            source={require('../assets/img/blossomPath.jpg')}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                        <View style={styles.textStyle}>
                            <Text>מסלולי פריחה</Text>
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
                            <Text>מסלולי ארכיאולוגיה</Text>
                        </View>
                    </View>
                    


                </View>







                </ImageBackground>
            </View>
        )
    }


    const PathStack = createStackNavigator();

    function PathCatagoriesAdmin() { 
        return(
            <PathStack.Navigator initialRouteName="InfoCatScreen">
                <PathStack.Screen options={{ headerShown: false }} name="InfoCatScreen" component={PathCatagoriesScreen} />
                 {/* <PathStack.Screen options={{ headerShown: false }} name="InfoAdminScreen" component={InfoAdmin} /> */}
    
            </PathStack.Navigator>
            );
    }
    
    export default PathCatagoriesAdmin;

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