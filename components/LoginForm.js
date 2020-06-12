import React, { Component } from "react" //import react library
import { Keyboard, Image, ImageBackground, StyleSheet ,TextInput, Button } from "react-native"
import { View } from "native-base"
import firebase from "../config/Firebase"
import { DotIndicator } from "indicators";




class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            username: "",
            loading: false,
            show: true
        }
    }

    ShowHideComponent = () => {
        if (this.state.show == true) {
          this.setState({ show: false });
        } else {
          this.setState({ show: true });
        }
      };

    //This function is being called when the user starts typing in 
    //the input field and updates the user registration form values.
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

    onLoginSuccess() {
        Alert.alert(
            "החיבור הושלם",
            "התחחברת בהצלחה",
            [{ text: "אישור"}],
            { cancelable: false}
        )
        this.setState({
            email: "",
            password: "",
            loading: false
        })
    }

    onLoginFail() {
        this.setState({ loading: false})
        Alert.alert(
            "שגיאה",
            "מייל או סיסמא אינם נכונים",
            [{ text: "אישור"}],
            { cancelable: false}
        )
    }


    renderButton(){
        if(this.state.loading){
            return <DotIndicator color ="FF8C37"/>
        }
        
        return(
        <View style = { styles.buttonStyle }>
        <Button 
            title = "התחבר"
            color = "#FF8C37"      
            //onPress= {() => this.onButtonPress()}     
        >
        </Button>   
        </View>
        )
    }  

    onButtonPress() {
        const { email, password } = this.state
        this.setState({ loading: true })

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            this.onLoginSuccess.bind(this)
        )
        .catch(
            this.onLoginFail.bind(this)
        )
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this.ShowHideComponent,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this.ShowHideComponent,
        );
      }
    
      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }

    render() {
        return(
            

            <View style={styles.background}>
                 <View style={styles.logoView}>
                 {this.state.show ? (
                 <Image source={require('../assets/img/logo.png')}
                 style={styles.logo}/>
                 ) : null}
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
                <View>{ this.renderButton()}</View>   
                {/* <View style = { styles.buttonStyle }>
                        <Button 
                            title = "התחבר"
                            color = "#FF8C37"           
                        >
                        </Button>   
                </View> */}
                    
            </View>
               

        )
        
    }
    
}

export default LoginForm;

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
        height: 230

    },

    logoView:{
        paddingBottom: 40,
        //paddingTop: 320,
        //height: 300,
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