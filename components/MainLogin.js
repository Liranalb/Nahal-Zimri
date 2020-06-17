import React, { Component } from "react" //import react library
import { Text, Image, ImageBackground, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native"
import { View } from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";




    function MainLoginScreen( {navigation}) {
        return (
            
                <View style={styles.background}>
                    <View style={styles.logoView}>
                        <Image source={require('../assets/img/logo.png')}
                            style={styles.logo} />

                    </View>


                    <View style={styles.buttonStyle}>
                        <TouchableOpacity >
                            <Text style={styles.text}>המשך עם גוגל</Text>
                        </TouchableOpacity >
                    </View>


                    <View style={styles.buttonStyle}>
                        <TouchableOpacity color="#FF8C37" onPress={ () => navigation.navigate('RegForm')}>
                            <Text style={styles.text}>הרשמה באמצעות מייל</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    
                    <TouchableOpacity onPress={ () => navigation.navigate('LoginForm')}>
                        <View style={{ justifyContent: 'center', alignItems: "center", paddingTop: 20 }}><Text style={styles.login}>נרשמת בעבר? הכנס...</Text></View>
                    </TouchableOpacity>
                </View>

            
        )

    }



function LoginFormScreen() {
    return (
      <LoginForm/>
    );
  }

  function RegFormScreen() {
    return (
      <RegForm/>
    );
  }

const logStack = createStackNavigator();

function MainLogin() { //for navigation. not in use yet
    return (
        <NavigationContainer>
            <logStack.Navigator initialRouteName="MainLog">
                <logStack.Screen options={{headerShown: false}} name="MainLog" component={MainLoginScreen} />
                <logStack.Screen  name="LoginForm" options={{headerShown: false}} 
                //options={{title: "", headerStyle:{backgroundColor:"#FAE5D3"}}}
                component={LoginFormScreen} />

                <logStack.Screen name="RegForm" options={{headerShown: false}} 
                //options={{title: "", headerStyle:{backgroundColor:"#FAE5D3"}}}
                //options={{title: "", headerStyle:{backgroundColor:"#FAE5D3"}}}
                component={RegFormScreen} />
                
            </logStack.Navigator>
        </NavigationContainer>
    );
}



export default MainLogin;

const styles = {

    header: {
        backgroundColor: '#FCDBC3'
        
    },

    login: {
        justifyContent: 'center',
        color: 'gray',
        fontSize: 20
    },

    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingTop: 20
    },

    text: {
        fontSize: 20,
        color: '#FCDBC3'

    },

    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#FF8C37",
        borderColor: "#FF8C37",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        width: "80%",
        height: "10%",
        alignSelf: "center",
        marginTop: 20,
        overflow: 'hidden'


    },


    background: {
        backgroundColor: '#FCDBC3',
        flex: 1
    },

    logo: {

        width: 200,
        height: 250

    },

    logoView: {
        paddingTop: 30,
        paddingBottom: 350,
        height: 300,
        alignItems: 'center'

    }


}