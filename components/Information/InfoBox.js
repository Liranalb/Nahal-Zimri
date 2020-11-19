import React, { Component } from "react";
import {
    View,
    Text,
    Image
} from "react-native";


class InfoBox extends Component {

    

    render() {
        return (
                <View style={styles.containerStyle}>
                    <View style={{ flex: 2}}>
                        <View style={{ width: '100%', height: '100%' }}>    
                            <Image source={this.props.imageUri}
                                style={styles.imageStyle}
                            />
                        </View>
                    </View>
                    
                    <View style={{ flex: 3}}>
                        
                        
                        <View style={{ height: '16%'}}>
                            <Text style={styles.textTitleStyle}>{this.props.headline}</Text>
                        </View>



                            <Text numberOfLines={10} style={styles.textDetailStyle}>{this.props.body}</Text>
                            


                    </View>

                </View>
        );
    }
}
export default InfoBox;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    containerStyle: {
        height: 250,
        width: "98%",
        alignSelf: 'center',
        borderWidth: 1.1,
        borderColor: '#FFAF50',      // A3A3A3
        borderRadius: 10,
        flexDirection: 'row-reverse',
        backgroundColor: '#F4D5A7',
        overflow: 'hidden'

    },
    textTitleStyle: {
        alignSelf: 'auto',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
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
    
    imageStyle: {
         flex: 1, 
         width: null, 
         height: null, 
         resizeMode: 'cover' ,
      //   borderBottomLeftRadius: 10,   // cause some scrolling problems
      //   borderTopLeftRadius: 10
    }
}