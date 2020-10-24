import React, { Component } from "react"
import {
    TextInput,
    Alert,
    ScrollView,
    Text,
    TouchableWithoutFeedback, 
    Image
} from "react-native"
import { View } from "native-base"
import { CheckBox, Header } from "react-native-elements"

import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/FontAwesome';
import { storage, db } from "../../config/Firebase"

import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Divider } from 'react-native-paper';
import sayCheese from '../../assets/functions/takePhoto'
import uploadImage from "../../assets/functions/uploadSingleImage"
import LogoHeaderComponent from "../explore/LogoHeaderComponent"


let keyID, photoUploaded = false,username="";

function getDate() {
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    let dateStr = date + "." + month + "." + year;
    return dateStr;
}

async function pressPhoto(source) {

    let imageID = "img" + keyID + ".jpg";
    let storagePath = "Images/Reports/" + imageID;


    console.log("imageID is : " + imageID + "\n storagePath" + storagePath);
    let result;
    if (source === "camera")
        result = await sayCheese(storagePath);
    else
        result = await uploadImage(storagePath);
    console.log(" test \n" + result);
    if (result === -1) {

        console.log("\n\n ----------------failed ----------------\n\n");
        return -1;

    }
    else
        photoUploaded = true;

    console.log("Out : " + photoUploaded);
}

function sendData(body, type, genre) {

    if (photoUploaded === false) {
        Alert.alert(
            "שים לב",
            "יש להעלות תמונה תחילה."
        );
        return -1;
    }
    else if (type === "") {
        Alert.alert(
            ",שים לב",
            "יש  לבחור סוג דיווח תחילה."
        );
        return -1;
    }

    else {

        let repId = 'rep' + keyID;
        let dataPath = 'Reports/rep' + keyID;
        let imageID = "img" + keyID + ".jpg";
        let storagePath = "Images/Reports/" + imageID;
        storage.ref().child(storagePath).getDownloadURL().then((url) => {
            // db.ref('Users/'+uid).once
            let date = getDate();
            let newInfo = {
                Approved: false,
                Date: date,
                Description: body,
                Catagory: genre,
                Type: type,
                ImageLink: url,
                id: repId,
                ReporterName: username
            }
            db.ref(dataPath).set(newInfo);
        })
    }
    console.log("after sendData");
    return 0;
}
const ITEMS = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight","Nine","Ten","Eleven","Twelve", "Thirteen","Fourteen","Fifteen", "Seventeen", "Eightteen","Nineteen"];




class ReportForm extends Component {

    constructor() {
        super()
        this.state = {
            checkItems: ITEMS.reduce(
                (items, item) => ({
                    ...items,
                    [item]: false
                }),
                {}
            ),
            body: "",
            reportType: "",
            type: "",
            genre: ""

        }
        
    }





    componentWillUnmount() {
        if (photoUploaded === true) {
            let imageID = "img" + keyID + ".jpg";
            var desertRef = storage.ref("Images").child('Reports/' + imageID);

            //Delete the file
            desertRef.delete().then(function () {
                console.log("deleted successfully: " + imageID + "  from Images/Reports");
            }).catch(function (error) {
                console.log("delete failed:  " + error);
            });
        }
    }

    handlePress = (checkNumber, value, genre) => {
        let checkItems = { ...this.state.checkItems }, val = value;
        Object.keys(this.state.checkItems).forEach(checkbox => {
            if (!Object.is(checkNumber, checkbox))
                checkItems[checkbox] = false;
            else {
                if (checkItems[checkbox] === false)
                    checkItems[checkbox] = true;
                else {
                    checkItems[checkbox] = false;
                    val = ""
                }
            }
        });
        this.setState({ checkItems, type: val, genre: genre })
    };



    componentDidMount() {
        keyID = db.ref().child('Reports').push().key;

        let data;
        db.ref('Users/'+uid).once('value', function (snapshot) {
            const exist = (snapshot.val() !== null);
            if (exist) {
                data = snapshot.val();
                username= data.Username;
               
            }
        });

        
        
    }



    render() {


        let refreshPage = () => {
            this.setState({ body: "", type: "", genre: "" });
            keyID = db.ref().child('Reports').push().key;
            photoUploaded = false;
            this.handlePress("None", "", "");
        }




        return (
            <View style={{ height: "100%", width: "100%", backgroundColor: '#FAE5D3' }}>
                <View style={{ width: "100%", height: "11%" }}>

                    <Header
                        backgroundColor='#FAE5D3'
                        centerComponent={<LogoHeaderComponent imageUri={require('../../assets/img/logo.png')} />}
                    />
                </View>
                <View style={{ backgroundColor: '#FAE5D3', height: "89%", width: "90%", alignSelf: 'center' }}>


                    <View style={{ width: "100%", height: "69%" }}>
                        <ScrollView>

                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>
                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>יונקים</Text>
                                    </View>


                                </CollapseHeader>
                                <CollapseBody>

                                <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/girit.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['One']}
                                                    onPress={() => this.handlePress('One', 'בעלי חיים', 'גירית מצויה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>גירית מצויה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/dorban.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Two']}
                                                    onPress={() => this.handlePress('Two', 'בעלי חיים', 'דורבן הודי מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דורבן הודי מצוי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/hadaf.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'חדף מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דחף מצוי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/holed.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Four']}
                                                    onPress={() => this.handlePress('Four', 'בעלי חיים', 'חולד')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חולד</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/pig.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Five']}
                                                    onPress={() => this.handlePress('Five', 'בעלי חיים', 'חזיר בר')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חזיר בר</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/nemiya.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Six']}
                                                    onPress={() => this.handlePress('Six', 'בעלי חיים', 'נמיה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נמיה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/bat.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Seven']}
                                                    onPress={() => this.handlePress('Seven', 'בעלי חיים', 'עטלפון לבן שוליים')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עטלפון לבן שוליים</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/deer.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'בעלי חיים', 'צבי ישראלי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>צבי ישראלי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/kipod.jpeg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Nine']}
                                                    onPress={() => this.handlePress('Nine', 'בעלי חיים', 'קיפוד מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>קיפוד מצוי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/fox.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Ten']}
                                                    onPress={() => this.handlePress('Ten', 'בעלי חיים', 'שועל מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>שועל מצוי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/Shafan.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eleven']}
                                                    onPress={() => this.handlePress('Eleven', 'בעלי חיים', 'שפן סלע')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>שפן סלע</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/taz.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twelve']}
                                                    onPress={() => this.handlePress('Twelve', 'בעלי חיים', 'תז זהוב')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>תז זהוב</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/hamor.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirteen']}
                                                    onPress={() => this.handlePress('Thirteen', 'בעלי חיים', 'חמור')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חמור</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/cat.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourteen']}
                                                    onPress={() => this.handlePress('Fourteen', 'בעלי חיים', 'חתול')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חתול</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/sheep.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fifteen']}
                                                    onPress={() => this.handlePress('Fifteen', 'בעלי חיים', 'כבש')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כבש</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/dog.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Sixteen']}
                                                    onPress={() => this.handlePress('Sixteen', 'בעלי חיים', 'כלב משוטט')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כלב משוטט</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/horse.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Seventeen']}
                                                    onPress={() => this.handlePress('Seventeen', 'בעלי חיים', 'סוס ')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סוס</Text>
                                            </View>
                                        </View>
                                    </View>

                                </CollapseBody>

                            </Collapse>

                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>

                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>ציפורים</Text>
                                    </View>

                                </CollapseHeader>

                                <CollapseBody>




                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/bulbul.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eightteen']}
                                                    onPress={() => this.handlePress('Eightteen', 'בעלי חיים', 'בולבול צהוב שת')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>בולבול צהוב שת (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>


                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/baz.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Nineteen']}
                                                    onPress={() => this.handlePress('Nineteen', 'בעלי חיים', 'בז מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>בז מצוי (נפוץ-נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/dohelBrown.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty']}
                                                    onPress={() => this.handlePress('Twenty', 'בעלי חיים', 'דוחל חום-גרון')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דוחל חום-גרון (נפוץ-נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/dohelBlack.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty one']}
                                                    onPress={() => this.handlePress('Twenty one', 'בעלי חיים', 'דוחל שחור-גרון')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דוחל שחור-גרון (נפוץ-נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/dror.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty two']}
                                                    onPress={() => this.handlePress('Twenty two', 'בעלי חיים', 'דרור בית')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דרור בית (נפוץ-יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/hawi.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty three']}
                                                    onPress={() => this.handlePress('Twenty three', 'בעלי חיים', 'חוויאי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חוויאי (נפוץ-נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/yona.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty four']}
                                                    onPress={() => this.handlePress('Twenty four', 'בעלי חיים', 'יונת בית')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>יונת בית (נפוץ-יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/yargezi.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty five']}
                                                    onPress={() => this.handlePress('Twenty five', 'בעלי חיים', 'ירגזי מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>ירגזי מצוי (נפוץ-יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/kos.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty six']}
                                                    onPress={() => this.handlePress('Twenty six', 'בעלי חיים', 'כוס החרבות')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כוס החרבות (לא שכיח)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/carvan.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty seven']}
                                                    onPress={() => this.handlePress('Twenty seven', 'בעלי חיים', 'כרוון')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כרוון (שכיח)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/nahli.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty eight']}
                                                    onPress={() => this.handlePress('Twenty eight', 'בעלי חיים', 'נחליאלי לבן')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נחליאלי לבן (לא שכיח)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/netz.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Twenty nine']}
                                                    onPress={() => this.handlePress('Twenty nine', 'בעלי חיים', 'נץ מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נץ מצוי (נפוץ-יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/sibhi.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty']}
                                                    onPress={() => this.handlePress('Thirty', 'בעלי חיים', 'סיבכי שחור כיפה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סיבכי שחור כיפה (נפוץ-נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/sibhiHead.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty one']}
                                                    onPress={() => this.handlePress('Thirty one', 'בעלי חיים', 'סיבכי שחור ראש')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סיבכי שחור ראש (נפוץ-נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/slait.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty two']}
                                                    onPress={() => this.handlePress('Thirty two', 'בעלי חיים', 'סלעית קיץ')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סלעית קיץ (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/orev.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty three']}
                                                    onPress={() => this.handlePress('Thirty three', 'בעלי חיים', 'עורב אפור')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עורב אפור (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/orvani.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty four']}
                                                    onPress={() => this.handlePress('Thirty four', 'בעלי חיים', 'עורבני')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עורבני (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/aiit.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty five']}
                                                    onPress={() => this.handlePress('Thirty five', 'בעלי חיים', 'עיט חורש')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עיט חורש (נודד לא שכיח)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/alvitGray.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty six']}
                                                    onPress={() => this.handlePress('Thirty six', 'בעלי חיים', 'עלווית אפורה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עלווית אפורה (נפוץ נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/alvitWinter.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty seven']}
                                                    onPress={() => this.handlePress('Thirty seven', 'בעלי חיים', 'עלווית החורף')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עלווית החורף (נפוץ נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/efroni.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty eight']}
                                                    onPress={() => this.handlePress('Thirty eight', 'בעלי חיים', 'עפרוני מצויץ')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עפרוני מצויץ (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/pipion.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Thirty nine']}
                                                    onPress={() => this.handlePress('Thirty nine', 'בעלי חיים', 'פיפיון עצים')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>פיפיון עצים (נפוץ נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/pipionField.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty']}
                                                    onPress={() => this.handlePress('Fourty', 'בעלי חיים', 'פיפיון שדות')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>פיפיון שדות (נפוץ נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/pashosh.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty one']}
                                                    onPress={() => this.handlePress('Fourty one', 'בעלי חיים', 'פשוש')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>פשוש (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/tzofit.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty two']}
                                                    onPress={() => this.handlePress('Fourty two', 'בעלי חיים', 'צופית')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>צופית (נפוץ נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/tzotzelt.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty three']}
                                                    onPress={() => this.handlePress('Fourty three', 'בעלי חיים', 'צוצלת')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>צוצלת (נפוץ נודד)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/tzokit.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty four']}
                                                    onPress={() => this.handlePress('Fourty four', 'בעלי חיים', 'צוקית בודדת')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>צוקית בודדת (יציב לא שכיח)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/kak.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty five']}
                                                    onPress={() => this.handlePress('Fourty five', 'בעלי חיים', 'קאק')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>קאק (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/blackTail.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty six']}
                                                    onPress={() => this.handlePress('Fourty six', 'בעלי חיים', 'שחור זנב')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>שחור זנב (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/thor.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Fourty seven']}
                                                    onPress={() => this.handlePress('Fourty seven', 'בעלי חיים', 'תור צווארון')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>תור צווארון (נפוץ יציב)</Text>
                                            </View>
                                        </View>
                                    </View>

                                </CollapseBody>

                            </Collapse> 

                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>

                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>מפגעים</Text>
                                    </View>


                                </CollapseHeader>
                                <CollapseBody>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/garbage.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Five']}
                                                    onPress={() => this.handlePress('Five', 'אחר', "פסולת")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>פסולת</Text>
                                            </View>
                                        </View>
                                    </View>



                                </CollapseBody>

                                <CollapseHeader style={styles.typeStyle}>

                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>פריחה</Text>
                                    </View>


                                </CollapseHeader>
                                <CollapseBody>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/sahlav.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Seven']}
                                                    onPress={() => this.handlePress('Seven', 'פריחה', "סחלב")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סחלב</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/rakefet.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "רקפת")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>רקפת</Text>
                                            </View>
                                        </View>
                                    </View>



                                </CollapseBody>
                            </Collapse>


                        </ScrollView>
                    </View>
                    <Divider />
                    <View style={{ height: "17%", flexDirection: 'row' }}>

                        <View style={{ marginLeft: 12, marginTop: 20 }}>
                            <TouchableWithoutFeedback
                                // onPress={() => sayCheese('uploads/myPhoto1.jpg','Reports/rep3')}
                                onPress={() => pressPhoto("camera")}

                            >
                                <View><Icon name="camera" size={30} color="#505050" /></View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                // onPress={() => uploadImage('uploads/mydduse.jpg')}
                                onPress={() => pressPhoto("upload")}
                            >
                                <View style={{ marginTop: 20 }}><Icon name="images" size={30} color="#505050" /></View>
                            </TouchableWithoutFeedback>

                        </View>





                        <View style={{ width: "90%" }}>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="הכנס פרטים"
                                multiline={true}
                                numberOfLines={3}
                                onChangeText={text => this.setState({ body: text })}
                                value={this.state.body}
                            />
                        </View>


                    </View>
                    <View style={{ width: "100%", height: "14%" }}>
                        <TouchableWithoutFeedback onPress={() => {
                            let result = sendData(this.state.body, this.state.type, this.state.genre,this.state.data);
                            if (result === 0)
                                refreshPage();

                        }}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textStyleSendReport}>שלח דיווח</Text>

                            </View>
                        </TouchableWithoutFeedback>
                    </View>


                </View>
            </View>
        )
    }



}



export default ReportForm;

const styles = {
    typeStyle: {
        width: "100%",
        height: 80,
        borderWidth: 0.4,
        borderColor: 'black'
    },
    innerViewStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "green"
    },
    textStyleHeaders: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: "5%"
    },
    textStyleSendReport: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: "8%"
    },

    checkBoxStyle: {

    },
    buttonStyle: {
        flex: 1,
        borderColor: "#004577",
        borderWidth: 1,
        fontSize: 20,
        width: "100%",
        alignSelf: "center",
        overflow: 'hidden',
        backgroundColor: "#424242"

    },
    textInputStyle: {
        backgroundColor: "#D7D8D7",
        borderColor: "#004577",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        width: "90%",
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 10
    },
    container: {
        height: 110,
        width: "100%",
        borderWidth: 0.8,
        borderColor: '#dddddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {

        fontSize: 24,
        marginTop: 17

    }




}