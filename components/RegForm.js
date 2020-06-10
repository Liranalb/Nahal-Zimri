import React, { Component } from "react" //import react library
import {Keyboard, TouchableOpacity, Image, StyleSheet ,TextInput, Button, ActivityIndicator, Alety  } from "react-native"
import { View } from "native-base"
import firebase from "../config/Firebase"
import MainLogin from "./MainLogin";


const database = firebase.database();
const auth = firebase.auth();


// registerUser = (name, email, password) => {
//     console.log(name, email, password);
//     auth.createUserWithEmailAndPassword;
// }





class RegForm extends Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false,
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

    // This  method is handling the user registration; we are signing up using 
    //createUserWithEmailAndPassword(email, password) method via Firebase API.
    registerUser = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('מלא את הפרטים הדרושים לצורך הרשמה')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            res.user.updateProfile({
              displayName: this.state.displayName
            })
            console.log('User registered successfully!')
            this.setState({
              isLoading: false,
              displayName: '',
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Login')
          })
          .catch(error => this.setState({ errorMessage: error.message }))      
        }
      }

    //   {this.state.show ? (

    //   ) : null}

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
               
                <View style={styles.inputView}> 
                
                    <TextInput
                            style = { styles.TextInputStyle }
                            textAlign = "center"
                            placeholder = {"שם מלא"}
                            placeholderTextColor = "#FF8C37"
                            height = {45}
                            autoCorrect = {false}
                            onPress={this.ShowHideComponent}
                            onChangeText = {(val) => this.updateInputVal(val, 'displayName')}
                            value = {this.state.displayName}
                            //onTouchStart={()=> this.ShowHideComponent()}
                        />
                </View>

                
                    
                <View style={styles.inputView }>
                {/* <TouchableOpacity onPress={this.ShowHideComponent}> */}

                    <TextInput
                            style = { styles.TextInputStyle}
                            textAlign = "center"
                            placeholder = {"כתובת מייל"}
                            placeholderTextColor = "#FF8C37"
                            height = {45}
                            autoCorrect = {false}
                            onPress={this.ShowHideComponent}
                            onChangeText={(val) => this.updateInputVal(val, 'email')}
                            value = {this.state.email}
                            //onTouchStart={()=> this.ShowHideComponent()}
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
                            onPress={this.ShowHideComponent}
                            onChangeText={(val) => this.updateInputVal(val, 'password')}
                            value = {this.state.password}
                            //onTouchStart={()=> this.ShowHideComponent()}
                        />
                </View>
                    
                <View style = { styles.buttonStyle }>
                        <Button 
                            title = "הרשמה"
                            onPress={() => this.registerUser()}
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