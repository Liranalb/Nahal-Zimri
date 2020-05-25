import React, { Component } from "react" //import react library
import { Text, Image, ImageBackground, StyleSheet ,TextInput, Button, TouchableOpacity } from "react-native"
import { View } from "native-base"




class MainLogin extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            username: ""
        }
    }


    render() {
        return(
            


            <View style={styles.background}>
                 <View style={styles.logoView}>
                 <Image source={require('../assets/img/logo.png')}
                 style={styles.logo}/>
                 
                 </View>
               

                 <View style = { styles.buttonStyle }>
                        <TouchableOpacity  
                        
                                      
                        >
                            <Text style = { styles.text }>המשך עם גוגל</Text>
                        </TouchableOpacity >   
                </View>

                    
                <View style = { styles.buttonStyle }>
                        <TouchableOpacity  
                           
                            color = "#FF8C37"           
                        >
                            <Text style = { styles.text }>הרשמה באמצעות מייל</Text>
                           
                        </TouchableOpacity >   
                </View>
                <View style={ styles.line }/>

                 <View style={{justifyContent: 'center', alignItems: "center", paddingTop: 20}}><Text style={ styles.login }>נרשמת בעבר? הכנס...</Text></View>   
                
                </View>
               
                
        )
        
    }
    
}

export default MainLogin;

const styles = {

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

    
    background:{
        backgroundColor: '#FCDBC3',
        flex: 1
    },

    logo:{

        width: 200,
        height: 250

    },

    logoView:{
        paddingTop: 30,
        paddingBottom: 350,
        height: 300,
        alignItems: 'center'
        
    }


}