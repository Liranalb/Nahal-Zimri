import React, { Component } from "react" //import react library
import { Keyboard, Image, TextInput, Button, Alert, Switch, Text } from "react-native"
import {View } from "native-base"
import firebase, { auth } from "../../config/Firebase"
import { DotIndicator } from "react-native-indicators"
import { color } from "react-native-reanimated"


let mailValidationExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phoneValidationExp = /^0?([5]{1}\d{8})$/; // check if landline is needed /^0?(([23489]{1}\d{7})|[5]{1}\d{8})$/

class RegForm extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      surname: '',
      email: '',
      password: '',
      phone: '',
      regToUpdates: false,
      loading: false,
      show: true,
      verificationState: false,
      currentUserState: {}
    }
  }
  

  addUserToFire() {
    if (this.state.email === '' ||
         this.state.password === '' ||
         this.state.displayName === '' ||
         this.state.surname === '')       Alert.alert('יש למלא את כל הפרטים')

    else if (phoneValidationExp.test(this.state.phone) === false) 
        alert('מספר הטלפון שהוכנס אינו תקין')

    else if (mailValidationExp.test(this.state.email) === false)
      Alert.alert('כתובת המייל שהוזנה אינה תקינה')

    else if (this.state.password.length < 6)
      Alert.alert('על הסיסמא להיות באורך של לפחות 6 תווים')

    else {

      this.setState({ loading: true })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log("res is: " + res)

          var user = auth.currentUser;
          user.sendEmailVerification();

          firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
            Uid: firebase.auth().currentUser.uid,
            email: this.state.email,
            Username: this.state.displayName,
            Surname: this.state.surname,
            Phone: this.state.phone,
            Admin: false,
            RegToUpdates: this.state.regToUpdates
          }).then(() => {
            Alert.alert('נרשמת בהצלחה, נותר לאמת את האימייל שלך');

            console.log("test email is: " + auth.currentUser.emailVerified);
            auth.signOut();
          })

          this.setState({
            loading: false,
            displayName: '',
            email: '',
            password: '',
            surname: '',
            phone: '',
            
            verificationState: true,
            currentUserState: auth.currentUser
          })

        })
        .catch ( (error) => {
          var errorCode = error.code;
          console.log("The error is: "+ errorCode);
          if (errorCode == "auth/email-already-in-use")
              Alert.alert("האימייל שהזנת בשימוש, נא בחר אימייל אחר");
        })
    }
    this.setState({
      loading: false
    })

  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false
    })
    Alert.alert(
      "נרשמת בהצלחה",
      "הודעת אימות נשלחה לאימייל שלך",
      [{ text: "OK" }],
      { cancelable: false }
    )


  }

  onLoginFail() {

    Alert.alert(
      "Error",
      "Email or password are incorrect",
      [{ text: "OK" }],
      { cancelable: false }
    )
  }



  renderButton() {
    if (this.state.loading) {
      return <DotIndicator color="#FF8C37" />
    }

    return (

      <View style={styles.buttonStyle}>

        <View>
          <Button
            title="הרשמה"
            onPress={() => this.addUserToFire()}
            color="#FF8C37"
          >
          </Button>
        </View>
      </View>
    )
  }

  
  ShowComponent = () => this.setState({ show: false });
  HideComponent = () => this.setState({ show: true });

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.ShowComponent,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.HideComponent,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }



  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  onChangeFunction(newState) {
    this.setState(newState, () => Alert.alert("Changed", "==> " + this.state.regToUpdates));
}

  render() {
    return (

      <View style={styles.background}>
        <View style={styles.logoView}>
          {this.state.show ? (
            <Image source={require('../../assets/img/logo.png')}

              style={styles.logo} />
          ) : null}
        </View>

        <View style={styles.inputView}>

          <TextInput
            style={styles.TextInputStyle}
            placeholder={"שם פרטי"}
            placeholderTextColor="#FF8C37"        
            autoCorrect={false}
            onPress={this.ShowHideComponent}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
            value={this.state.displayName}
          />
        </View>

        <View style={styles.inputView}>

          <TextInput
            style={styles.TextInputStyle}  
            placeholder={"שם משפחה"}
            placeholderTextColor="#FF8C37"
            autoCorrect={false}
            onPress={this.ShowHideComponent}
            onChangeText={(val) => this.updateInputVal(val, 'surname')}
            value={this.state.surname}
          />
        </View>

        <View style={styles.inputView}>

          <TextInput
            keyboardType={'phone-pad'}
            style={styles.TextInputStyle}
            placeholder={"מס' טלפון"}
            placeholderTextColor="#FF8C37"
            autoCorrect={false}
            onPress={this.ShowHideComponent}
            onChangeText={(val) => this.updateInputVal(val, 'phone')}
            value={this.state.phone}
          />
        </View>

        <View style={styles.inputView}>


          <TextInput
            style={styles.TextInputStyle}
            placeholder={"כתובת מייל"}
            placeholderTextColor="#FF8C37"
            autoCorrect={false}
            onPress={this.ShowHideComponent}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
            value={this.state.email}

          />

        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInputStyle}
            placeholder={"סיסמה"}
            placeholderTextColor="#FF8C37"
            secureTextEntry={true}
            autoCorrect={false}
            onPress={this.ShowHideComponent}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            value={this.state.password}

          />
        </View>
        
        <View style={styles.container}>

        
            <View style={{flexDirection:"row"}}>
              <Switch
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                trackColor={{ false: "#dark-gray", true: "#FF8C37" }}
                thumbColor={this.state.regToUpdates ? 'white' : "#f4f3f4"}
               
                onValueChange={(value) => this.onChangeFunction({regToUpdates: value})}
                    value={this.state.regToUpdates}
              />
            <Text style={{color:'#FF8C37', fontSize: 15, fontWeight: 'bold'}}>      הרשמה לעדכונים(לא ישלח ספאם)
            </Text>
            </View>


        </View>

        <View>{this.renderButton()}</View>



      </View>
    )

  }

}

export default RegForm;

const styles = {
  inputView: {
    paddingTop: 7,
    paddingBottom: 7,

  },

  TextInputStyle: {
    borderColor: "#FF8C37",
    borderRadius: 25,
    borderWidth: 2,
    fontSize: 18,
    width: "70%",
    height: 40,
    alignSelf: "center",
    textAlign: "center"

  },
  
  buttonStyle: {
    backgroundColor: "#FF8C37",
    borderColor: "#FF8C37",
    borderRadius: 25,
    borderWidth: 2,
    fontSize: 20,
    width: "60%",
    alignSelf: "center",
    marginTop: "5%",
    overflow: 'hidden',
  },

  background: {
    backgroundColor: '#FCDBC3',
    flex: 1
  },

  logo: {
    width: 180,
    height: 240

  },

  logoView: {
    alignItems: 'center'
  },

  container: {
    
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  }

}