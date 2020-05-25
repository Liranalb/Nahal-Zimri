import React, { Component } from "react" //import react library
import { Image, ImageBackground, StyleSheet ,TextInput, Button } from "react-native"
import { View } from "native-base"





class RegForm extends Component {
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
               
                <View style={styles.inputView}> 
                
                    <TextInput
                            style = { styles.TextInputStyle }
                            textAlign = "center"
                            placeholder = {"שם מלא"}
                            placeholderTextColor = "#FF8C37"
                            height = {45}
                            autoCorrect = {false}
                            onChangeText = { username => this.setState({ username})}
                            value = {this.state.username}
                        />
                </View>

                    
                    
                <View style={styles.inputView }>
                    <TextInput
                            style = { styles.TextInputStyle}
                            textAlign = "center"
                            placeholder = {"מייל"}
                            placeholderTextColor = "#FF8C37"
                            height = {45}
                            autoCorrect = {false}
                            onChangeText = { email => this.setState({ email })}
                            value = {this.state.email}
                        />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                            style = { styles.TextInputStyle}
                            textAlign = "center"
                            placeholder = {"סיסמה"}
                            placeholderTextColor = "#FF8C37"
                            secureTextEntry = {true}
                            height = {45}
                            autoCorrect = {false}
                            onChangeText = { password => this.setState({ password })}
                            value = {this.state.password}
                        />
                </View>
                    
                <View style = { styles.buttonStyle }>
                        <Button 
                            title = "הרשמה"
                            
                            color = "#FF8C37"           
                        >
                        </Button>   
                </View>
                    
            </View>
               
                
                
               
               
                
        )
        
    }
    
}

export default RegForm;

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
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "60%",
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
        height: 240

    },

    logoView:{
        paddingTop: 30,
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