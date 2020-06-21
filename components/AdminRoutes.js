import React, {useState, useEffect } from "react"
import { Header, CheckBox, ListItem } from "react-native-elements"
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Image, View, TextInput, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert, unstable_enableLogBox } from "react-native"
import { Footer, Container, Right } from "native-base"
import HeaderComp from "./HeaderComp";
import UnitRoutes from "./UnitRoutes";
import AdminButton from "./AdminButton";
import AdminUnitRoutes from './AdminUnitRoutes'
import NewOpenRoute from "./NewOpenRoute";
import { db } from '../config/Firebase'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "./DrawerContent";
import Icon from 'react-native-vector-icons/Entypo';

var currItem;
var currImg;
var dataType;

//let photoUploaded = false;
let keyID;

function sendData(name, mark, level, type, details, animals, duration, km) {
    let rouId = 'rou' + keyID;
    let dataPath = 'Routes/rou' + keyID;
    let newRou = {
        name: name,
        PathType: dataType,
        mark: mark,
        level: level,
        km: km,
        duration: duration,
        details: details,
        id: rouId, 
        type: type,
        animals: animals
    }
    db.ref(dataPath).set(newRou);
    return 0;
}

function AdminRoutesScreen({ navigation }) {
  
    let currentType = dataType;
    let routesArray = [];
    const [name, onChangeName] = useState('');
    const [mark, onChangeMark] = useState('');
    const [level, onChangeLevel] = useState('');
    const [km, onChangeKm] = useState('');
    const [duration, onChangeDuration] = useState('');
    const [details, onChangeDetails] = useState('');
    const [type, onChangeType] = useState('');
    const [animals, onChangeAnimals] = useState('');
    const [loaded, setLoaded] = useState(false);

    function refreshPage() {
        onChangeName("");
        onChangeMark("");
        onChangeLevel("");
        onChangeKm("");
        onChangeDuration("");
        onChangeDetails("");
        onChangeType("");
        onChangeAnimals("");
        setLoaded({ loaded: false });
        keyID = newPostKey();
        //photoUploaded = false;
    }

    //load data
    let data = null;
    db.ref('Routes').on('value', function (snapshot) {
        const exist = (snapshot.val() !== null);
        if (exist) {
            data = snapshot.val();
            console.log("data loaded: " + loaded);
            if (loaded === false)
                setLoaded(true);

        }
    });

    
    let newPostKey = () => {
        return db.ref().child('Routes').push().key;
    }


    
    // on mount
    useEffect(() => {
        keyID = newPostKey();
        console.log("Produced key:  " + keyID);

    }, []);
    // on unmount
    useEffect(() => {
        return () => {

        }
    }, []);

    let convertDataToArray = (data, routesArray) => {
        if (data === null)
            return null;
        for (var route in data) {
            if (data.hasOwnProperty(route)) {
                if (data[route].PathType === currentType) {
                    routesArray.push(data[route]);
 
                }
            }
        }

    }

    convertDataToArray(data, routesArray);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#FAE5D3' }}>
             <HeaderComp
                openUserProfile={() => navigation.navigate('Current')}
                openUserMenu={() => navigation.dangerouslyGetParent().openDrawer()}
            />
            <ScrollView>
                {
                    console.log("second"),
                    routesArray.map((item) => {
                        return (
                            <View>
                                <TouchableWithoutFeedback onPress={() => {navigation.navigate('newOpRo'); currItem = item;  currImg={ uri: item.imageLink }}}>
                                    <View>
                                        <AdminUnitRoutes imageUri={{ uri: item.imageLink }}
                                            name={item.name}
                                            level={item.level}
                                            km={item.km}
                                            duration={item.duration}
                                            type={item.type}
                                            details={item.details}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })
                }

                <View>
                <Text style={{ fontSize: 18,fontWeight: "bold", alignSelf:"center", alignItems: "center"}} >הוספת מסלול:</Text>
                    <Text style={{ fontSize: 16}}>שם המסלול:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeName(text)}
                        value={name}
                    />
                    <Text style={{ fontSize: 16}}>רמת הקושי:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeLevel(text)}
                        value={level}
                    />
                    <Text style={{ fontSize: 16}}>ק"מ:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeKm(text)}
                        value={km}
                    />
                    <Text style={{ fontSize: 16}}>משך זמן ההליכה:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeDuration(text)}
                        value={duration}
                    />
                    <Text style={{ fontSize: 16}}>סוג המסלול:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeType(text)}
                        value={type}
                    />
                     <Text style={{ fontSize: 16}}>בעלי חיים במסלול:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeAnimals(text)}
                        value={animals}
                    />
                    <Text style={{ fontSize: 16}}>סימון:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeMark(text)}
                        value={mark}
                    />
                    <Text style={{ fontSize: 16}}>פרטים:</Text>
                    <  TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeDetails(text)}
                        value={details}
                    />
                </View>
                <Text style={{ fontSize: 16}}>הוספת תמונה:</Text>
                <TouchableWithoutFeedback 
                // onPress={() => uploadImage('uploads/mydduse.jpg')}
                //onPress={() => pressPhoto("upload")}
                >
                    <View style={{width:"10%",marginLeft:"85%", marginTop: "5%" ,borderColor: "green", borderRadius: 10,borderWidth: 2,}}><Icon name="images" size={30} color="#505050" /></View>
                
                </TouchableWithoutFeedback>
                 <TouchableWithoutFeedback
                    onPress={() => {
                        let result = sendData(name, mark, level, type, details, animals, duration, km);
                        console.log("result is: " + result);
                        if (result === 0)
                            refreshPage();
                    }}
                >
                    <View style={styles.buttonStyle}>
                        <Text
                            style={{ alignSelf: 'center', marginTop: "5%", fontSize: 18 }}
                        >הוסף</Text>
                    </View>
                </TouchableWithoutFeedback>
                
            </ScrollView>
        </View>
    )
}

/*
<Icon name="camera" size={30}
                    color="black" />
<Button style={styles.buttonStyle}
                    onPress={() => alert('Pressed!')}
                    title="עדכן"
                />
*/

/*

*/
function NewOpenRouteScreen() {
    return (
        <NewOpenRoute item={currItem} img={currImg}/>
    );
}

const logStack = createStackNavigator();
const DrawerRoute = createDrawerNavigator();

function AdminRoutesStack() { //for navigation. not in use yet
    

    return (
        
        <logStack.Navigator initialRouteName="routesA">
            <logStack.Screen options={{ headerShown: false }} name="routesA" component={AdminRoutesScreen} />

            <logStack.Screen name="newOpRo" options={{ headerShown: false }}
                component={NewOpenRouteScreen} />

        </logStack.Navigator>
        
    );
}

function AdminRoutes(props) {
    dataType= props.dataType;
    return (
        <DrawerRoute.Navigator initialRouteName="reports" drawerPosition="right"
            drawerStyle={{ width: '45%' }} drawerContent={props => <DrawerContent {...props} />}>
            <DrawerRoute.Screen name="reports" component={AdminRoutesStack} />

        </DrawerRoute.Navigator>

    );
}


export default AdminRoutes;

const styles = {
    
    /*textInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 15,
    },*/
    textInput: {
        backgroundColor: "#FFF4E3",
        borderColor: "green",
        width: "90%",
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20,
        alignSelf: "center",
        textAlignVertical: 'top',
        marginTop: 5
        /*height: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white'*/
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
        fontSize: 10,
        width: "30%",
        height: "7%",
        alignSelf: "center",
        marginTop: "5%",
        marginBottom: "10%",
        overflow: 'hidden'
    },
    CheckBoxStyle: {
        backgroundColor: "#F6D365",
        borderColor: "#FFAF50",
        borderWidth: 2,
        width: "30%",
        flex: 1,
        marginTop: 10
    }
}
