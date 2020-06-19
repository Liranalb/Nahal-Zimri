import React, { Component } from "react"
import { Button, Header, ListItem } from "react-native-elements"
import { Image, SafeAreaView, Dimensions, View, TouchableWithoutFeedback, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import InfoUser from "./InfoUser";
import EventUser from "./EventUser";
import RoutesUser from "./RoutesUser";
import InfoCatagoriesUser from "./InfoCatagoriesUser";
import Reports from "./Reports";
import { DrawerContent } from "./DrawerContent";
import About from "./About";
import HeaderComp from "./HeaderComp";
import { createDrawerNavigator,
    DrawerItem,
    DefaultTheme} 
    from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import CurrentUser from "./CorrentUser"


import LogoHeaderComponent from "./LogoHeaderComponent"

const MyTheme = {
    dark: false,
    colors: {
      primary: '#FF8C37',
      background: '#FF8C37',
      card: '#FAE5D3',
      text: 'black',
      border: '#FF8C37',
    },
    
  };

const CustomDrawer = (props) => (
    <SafeAreaView style={{ flex: 1}}>
        <ScrollView>
            <DrawerItem {...props}/>
        </ScrollView>
    </SafeAreaView>
)

function HomePageUserScreen({ navigation }) {
    return (


         <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
             <View>
                 <View>

                     <Header
                 backgroundColor='#FAE5D3'

                         leftComponent={<TouchableOpacity
                            onPress={() => navigation.navigate('Current')}>
                            <Icon name="user" size={30} color="black" />
                        </TouchableOpacity>}

                        centerComponent={<LogoHeaderComponent imageUri={require('../assets/img/logo.png')} />}


                        rightComponent={<TouchableOpacity
                            onPress={() => navigation.dangerouslyGetParent().openDrawer()}>
                            <Icon name="menu" size={30} color="black" />
                        </TouchableOpacity>}
                    />
                </View>
            </View>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('InfUs')}>
                <View style={styles.infoStyle}>
                    <Image
                        source={require('../assets/img/article.jpg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={styles.textStyle}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>כתבות</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.routesStyle}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('RouUs')}>
                    <View style={styles.routesStyleLeft}>
                        <Image
                            source={require('../assets/img/travel.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>מסלולים</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('InfCaUs')}>
                    <View style={styles.routesStyleRight}>
                        <Image
                            source={require('../assets/img/flower.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={styles.textStyle}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>מידע</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('EveUs')}>
                <View style={styles.infoStyle}>
                    <Image
                        source={require('../assets/img/fox.jpg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={styles.textStyle}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>אירועים</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Rep')}>
                <View style={styles.observationsStyle}>
                    <Image
                        source={require('../assets/img/obs.jpeg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={styles.textStyle}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>תצפיות</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        </View>
        
        
        


    )
    
}

function CorrentUserScreen(){
    return(
        <CurrentUser/>
    );
}

function InfoUserScreen() {
    return (
        <InfoUser />
    );
}

function EventUserScreen() {
    return (
        <EventUser />
    );
}

function RoutesUserScreen() {
    return (
        <RoutesUser />
    );
}

function InfoCatagoriesUserScreen() {
    return (
        <InfoCatagoriesUser />
    );
}

function ReportsScreen() {
    return (
        <Reports />
    );
}

function AboutScreen() {
    return (
        <About />
    );
}

const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
  };


const logStack = createStackNavigator();
const DrawerR = createDrawerNavigator();



function HomePageUserStack() { //for navigation. not in use yet
    return (
        
        
            <logStack.Navigator initialRouteName="homeP">
                <logStack.Screen options={{ headerShown: false }} name="homeP" component={HomePageUserScreen} />

                <logStack.Screen name="InfUs" options={{ headerShown: false }}
                    component={InfoUserScreen} />

                <logStack.Screen name="EveUs" options={{ headerShown: false }}
                    component={EventUserScreen} />

                <logStack.Screen name="RouUs" options={{ headerShown: false }}
                    component={RoutesUserScreen} />

                <logStack.Screen name="InfCaUs" options={{ headerShown: false }}
                    component={InfoCatagoriesUserScreen} />

                <logStack.Screen name="Rep" options={{ headerShown: false }}
                    component={ReportsScreen} />
                <logStack.Screen name="Abo" options={{ headerShown: false }}
                    component={AboutScreen} />  
                <logStack.Screen name="Current" options={{ headerShown: false }}
                    component={CorrentUserScreen} />  
            </logStack.Navigator> 
    );
}


export default function HomePageUser(){
    return(
        <NavigationContainer theme={MyTheme}>
        <DrawerR.Navigator initialRouteName="home" drawerPosition="right"
         drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContent {...props} />}>         
        <DrawerR.Screen name="מסך הבית" component={HomePageUserStack} />
 
      </DrawerR.Navigator>

   
      </NavigationContainer>

    );
}

const styles = {
    textStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FF8C37',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    dataStyle: {
        backgroundColor: "#FAE5D3"
    },

    infoStyle: {
        backgroundColor: "#F0B27A",
        borderColor: "#FF8C37",
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
        backgroundColor: "#FF8C37",
        borderColor: "#FF8C37",
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
        backgroundColor: "#FF8C37",
        borderColor: "#FF8C37",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "48%",
        height: "100%",
        alignSelf: "center",
    },
    observationsStyle: {
        backgroundColor: "#FF8C37",
        borderColor: "#FF8C37",
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        height: "10%",
        alignSelf: "center",
        marginTop: 10
    },
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      }

    
}
