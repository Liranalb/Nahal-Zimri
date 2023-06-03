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

let keyID, photoUploaded = false, username = "";

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
const ITEMS = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

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
        db.ref('Users/' + uid).once('value', function (snapshot) {
            const exist = (snapshot.val() !== null);
            if (exist) {
                data = snapshot.val();
                username = data.Username;

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
                <View style={{ width: "100%", height: "13%" }}>

                    <Header
                        backgroundColor='#FAE5D3'
                        centerComponent={<LogoHeaderComponent imageUri={require('../../assets/img/logo.png')} />}
                    />
                </View>
                <View style={{ backgroundColor: '#FAE5D3', height: "89%", width: "90%", alignSelf: 'center', marginTop: "2%" }}>

                    <View style={{ width: "100%", height: "64%" }}>
                        <ScrollView>
                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>

                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>ציפורים</Text>
                                    </View>

                                </CollapseHeader>

                                <CollapseBody>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/bird.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['One']}
                                                    onPress={() => this.handlePress('One', 'בעלי חיים', 'דרור')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דרור</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/BigHankan.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Two']}
                                                    onPress={() => this.handlePress('Two', 'בעלי חיים', 'חנקן גדול')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חנקן גדול</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/summerSil.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Nine']}
                                                    onPress={() => this.handlePress('Nine', 'בעלי חיים', 'סלעית הקיץ')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סלעית הקיץ</Text>
                                            </View>
                                        </View>
                                    </View>

                                </CollapseBody>

                            </Collapse>

                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>
                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>יונקים</Text>
                                    </View>

                                </CollapseHeader>
                                <CollapseBody>

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
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'שועל מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>שועל מצוי</Text>
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
                                                    checked={this.state.checkItems['Six']}
                                                    onPress={() => this.handlePress('Six', 'בעלי חיים', 'צבי')}
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
                                                    checked={this.state.checkItems['Four']}
                                                    onPress={() => this.handlePress('Four', 'בעלי חיים', 'שפן סלע')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>שפן סלע</Text>
                                            </View>
                                        </View>
                                    </View>

                                </CollapseBody>

                            </Collapse>

                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>
                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>זוחלים</Text>
                                    </View>

                                </CollapseHeader>
                                <CollapseBody>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/zikit.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'זיקית')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>זיקית</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/zehaman_shahor.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'זעמן שחור')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>זעמן שחור</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/homet_gamad.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'חומט גמד')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חומט גמד</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/homet_menumar.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'חומט מנומר')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חומט מנומר</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/hardon_matzuy.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'חרדון מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>חרדון מצוי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/letaha_zriza.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לטאה זריזה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>לטאה זריזה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/menifanit_mtzuya.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'מניפנית מצויה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>מניפנית מצויה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/nahash.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'נחש')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נחש</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/tzav_yabasha_matzuy.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'צב יבשה (מצוי)')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>צב יבשה (מצוי)</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/tzefa_matzui.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'צפע מצוי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>צפע מצוי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/shmamit_habatim.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'שממית בתים')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>שממית בתים</Text>
                                            </View>
                                        </View>
                                    </View>

                                </CollapseBody>

                            </Collapse>

                            <Collapse>
                                <CollapseHeader style={styles.typeStyle}>
                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>פרפרים</Text>
                                    </View>

                                </CollapseHeader>
                                <CollapseBody>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/hasaparit_haseora.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'הספרית השעורה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>הספרית השעורה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/hasparit_hanashran.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'הספרנית הנשרן')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>הספרנית הנשרן</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/zanav_snonit_nahe.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'זנב סנונית נאה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>זנב סנונית נאה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/cahilil_afor.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל האפון')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כחליל האפון</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/cahilil_hahafarkeset.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל האספסת')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כחליל האספסת</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/cahilil_hashabrak.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל השברק')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כחליל השברק</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/cahlil_hahomha.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל החומעה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כחליל החומעה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/ktom_kanaf_metzil.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כתום כנף המצילתיים')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כתום כנף המצילתיים</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/levnin_hakasia.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לבנין הכאסיה')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>לבנין הכאסיה</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/levnin_hatiltan.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לבנין התלתן')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>לבנין התלתן</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/levnin_mizrhai.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לבנין מזרחי')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>לבנין מזרחי</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/nimpit_hadardar.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'נימפית הדרדר')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נימפית הדרדר</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/nimpit_hahorshaf.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'נימפית החורשף')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נימפית החורשף</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/stirit_meshuyeshet.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'סטירית משויישת')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סטירית משויישת</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/tinshemit_hamurkavim.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Three']}
                                                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'תנשמית המורכבים')}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>תנשמית המורכבים</Text>
                                            </View>
                                        </View>
                                    </View>

                                </CollapseBody>

                            </Collapse>

                            <Collapse>

                                <CollapseHeader style={styles.typeStyle}>
                                    <View style={styles.innerViewStyle}>
                                        <Text style={styles.textStyleHeaders}>פריחה</Text>
                                    </View>

                                </CollapseHeader>
                                <CollapseBody>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/irus_hasrgel.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "אירוס הסרגל")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>אירוס הסרגל</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/dvoranit_dinsmor.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "דבורנית דינסמור")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דבורנית דינסמור</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/dam_hamakabim.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "דם המכבים")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>דם המכבים</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/zamzumit_metzuya.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "זמזומית מצויה")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>זמזומית מצויה</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/calanit_metzuya.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "כלנית מצויה")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כלנית מצויה</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/carcum_horpi.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "כרכום חורפי")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>כרכום חורפי</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/matziz_suri.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "מציץ סורי")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>מציץ סורי</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/marganit_hasade.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "מרגנית השדה")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>מרגנית השדה</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/marva.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "מרווה")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>מרווה</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/nurit_asia.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "נורית אסיה")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נורית אסיה</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/netz_halav.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "נץ חלב")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>נץ חלב</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/sahlav_parparni.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "סחלב פרפרני")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סחלב פרפרני</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/satvanit_hayore.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "סתוונית היורה")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>סתוונית היורה</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/irit_gdola.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "עירית גדולה")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עירית גדולה</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/hakuvit_hagalgal.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "עכובית הגלגל")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>עכובית הגלגל</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/pereg.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "פרג")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>פרג</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/kotziz_suri.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "קוציץ סורי")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>קוציץ סורי</Text>
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

                                    <View style={styles.container}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../assets/img/shum_meshulash.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                                                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'פריחה', "שום משולש")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>שום משולש</Text>
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
                                                    checked={this.state.checkItems['Eight']}
                                                    onPress={() => this.handlePress('Eight', 'אחר', "פסולת")}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.textStyle}>פסולת</Text>
                                            </View>
                                        </View>
                                    </View>

                                    

                                </CollapseBody>
                                
                            </Collapse>
                            <View>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                let reportInfo = "1. בחרו קטגוריה מתוך הרשימה.\n";
                                reportInfo += "2. בחרו בע\"ח, צומח או מפגע מתוך התפריט.\n";
                                reportInfo += "3. מלאו מספר פרטים לגבי הדיווח.\n";
                                reportInfo += "4. הוסיפו תמונה באמצעות סמלון המצלמה או מתוך הגלריה שלכם.\n";
                                reportInfo += "5. לאחר שמילאתם את כל הפרטים לחצו על הכפתור \"שלח דיווח\".\n\n";
                                reportInfo += "דיווחים שאושרו ע\"י ההנהלה יפורסמו במסך הדיווחים הראשי.";
                                
                                Alert.alert(
                                    "כיצד מדווחים?",
                                    reportInfo,
                                    [{ text: "הבנתי", onPress: () => console.log("OK Pressed") }]
                                  );
                                }
                            }>
                            <Text style={styles.howToReport}>כיצד מדווחים? הקישו למידע נוסף</Text>

                        </TouchableWithoutFeedback>
                    </View>
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
                                <View style={{ marginTop: 15 }}><Icon name="images" size={30} color="#505050" /></View>
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
                    <View style={{ width: "100%", marginTop: "2%" }}>
                        <TouchableWithoutFeedback onPress={() => {
                            let result = sendData(this.state.body, this.state.type, this.state.genre, this.state.data);
                            if (result === 0)
                                refreshPage();

                        }}>
                            <View style={styles.submitButtonStyle}>
                                <Text style={styles.textStyleSendReport}>שליחת דיווח</Text>

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
    howToReport: {
        fontSize: 18,
        color: "#404040",
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: "6%"
    },

    typeStyle: {
        marginTop: "0.5%",
        width: "100%",
        height: 50,
        borderColor: 'green'
    },
    innerViewStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "green",
        justifyContent: 'center'
    },
    textStyleHeaders: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'center'
    },
    textStyleSendReport: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: "8%"
    },

    checkBoxStyle: {

    },
    submitButtonStyle: {
        width: "105%",
        height: "100%",
        borderColor: "#FF8C37",
        borderWidth: 1,
        alignSelf: "center",
        backgroundColor: "#FF8C37",
        borderRadius: 25,

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
        height: 90,
        width: "100%",
        borderWidth: 0.8,
        borderColor: '#dddddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {

        fontSize: 24,
        marginTop: 17

    }

}