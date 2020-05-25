import React, { Component } from "react" //import react library
import { Image, ImageBackground, StyleSheet ,TextInput, Button, TouchableOpacity } from "react-native"
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
                            text = "המשך עם גוגל"
                                      
                        >

                        </TouchableOpacity >   
                </View>

                    
                <View style = { styles.buttonStyle }>
                        <TouchableOpacity  
                            title = "הרשם עם מייל"
                            color = "#FF8C37"           
                        >
                        </TouchableOpacity >   
                </View>
                    
                </View>
               

        )
        
    }
    
}

export default MainLogin;

const styles = {
     inputView: {
        paddingTop: 20,
        paddingBottom: 20,
        
        
    
     },
     
     TextInputStyle: {
         borderColor: "#FF8C37",
         borderRadius: 25,
         borderWidth: 2,
         fontSize: 20,
         width: "80%",
         alignSelf: "center",
         
          
      },
      buttonStyle: {
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

        width: 180,
        height: 230

    },

    logoView:{
        paddingTop: 30,
        paddingBottom: 355,
        height: 300,
        alignItems: 'center'
        
    }

    /*
    loginBackgorund: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
    */

    


}