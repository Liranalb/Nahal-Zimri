import React, { Component } from "react" //import react library
import { TextInput, Button } from "react-native"
import { View } from "native-base"
class LoginForm extends Component {
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
            <View>
                <View style={styles.inputView}> 
                    
                    <TextInput
                            style = { styles.TextInputStyle }
                            textAlign = "center"
                            placeholder = {"User name"}
                            placeholderTextColor = "#BCBCBC"
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
                            placeholder = {"Email"}
                            placeholderTextColor = "#BCBCBC"
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
                            placeholder = {"Password"}
                            placeholderTextColor = "#BCBCBC"
                            secureTextEntry = {true}
                            height = {45}
                            autoCorrect = {false}
                            onChangeText = { password => this.setState({ password })}
                            value = {this.state.password}
                        />
                    </View>
                    
                    <View style = { styles.buttonStyle }>
                        <Button 
                            title = "Log in"
                            
                        >
                        

                        </Button>
                    </View>
                
                </View>
        )
    }
}

export default LoginForm;

const styles = {
     inputView: {
        paddingTop: 20,
        paddingBottom: 20
    
     },
     
     TextInputStyle: {
         borderColor: "#004577",
         borderRadius: 25,
         borderWidth: 2,
         fontSize: 20,
         width: "80%",
         alignSelf: "center"
          
      },
      buttonStyle: {
        backgroundColor: "#004577",
        borderColor: "#004577",
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 20,
        width: "60%",
        alignSelf: "center",
        marginTop: 20
    }


}