import React, { Component } from "react";
import {
    View,
    Text,
    Image,

} from "react-native";
import { Divider } from 'react-native-paper';

class UnitInfoUser extends React.Component {

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ flex: 2 }}>
                    <View style={{ width: '100%', height: '100%' }}>
                        <Image source={this.props.imageUri}
                            style={styles.imageStyle}

                        />
                    </View>

                </View>
                <View style={{ flex: 3 }}>

            


                        <View style={{ height: '16%'}}>
                            <Text style={styles.textTitleStyle}>{this.props.title}</Text>
                        </View>

                        

                        <View style={{ height: "60%"}}>
                            <Text style={styles.textDetailStyle}>{this.props.subTitle}</Text>
                        </View>
                       
                        <View style={{ height: "10%"}}>
                            <Text style={styles.textDetailButton}>לחץ להמשך הכתבה...</Text>
                        </View>
                        
                        
                        <View style={{ height: "14%"}}>
                            <Text style={styles.textDetailButton}>תאריך העלאה | {this.props.date}</Text>
                        </View>

                </View>

            </View>
        );
    }
}
export default UnitInfoUser;


const styles = {

    containerStyle: { //article component box
        height: 250,
        width: "100%",
        alignSelf: 'center',
        borderWidth:1.1,
        borderColor: '#FFAF50',
        borderRadius: 10,
        flexDirection: 'row-reverse',
        backgroundColor: '#F4D5A7',
        overflow: 'hidden'


    },
    headlineStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textShadowColor: "gray",
        textShadowRadius: 10
    },


    imageStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        //   borderBottomLeftRadius: 10,   // cause some scrolling problems
        //   borderTopLeftRadius: 10
    },
    editButtons: {
        marginLeft: "2%"
    },
    buttonsContainer: {
        width: "100%",
        height: "21%",
        flexDirection: 'row',
    },
    textTitleStyle: { //box header
        alignSelf: "auto",
        fontWeight: "bold",
        fontSize: 20,
        marginRight: '3%',
        marginLeft: '3%',
        marginTop: '3%'

    },
    textDetailStyle: {
        fontWeight: "normal",
        fontSize: 16,
        marginRight: '3%',
        marginLeft: '3%'
    },

    textDetailButton: {
        color: 'gray',
        fontWeight: "normal",
        fontSize: 16,
        marginRight: '3%',
        marginLeft: '3%',
        marginTop: '3%'
    }
}
