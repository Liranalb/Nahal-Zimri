import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,

} from "react-native";


class InfoUnitAdmin extends React.Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
            }} >
                <View style={styles.imageStyle}>
                    <Image
                        source={this.props.imageUri}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
                <View style={{
                    flex: 1,
                }} >
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                        }}>{this.props.catagory}</Text>
                    </View>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                        }}>{this.props.title} </Text>
                    </View>
                    <View style={{
                        width: "50%",
                        flexDirection: 'row-reverse',
                        alignSelf: "flex-end",
                    }} >
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: 16,
                        }}> {this.props.detail} </Text>
                    </View>
                    <View >
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: 16,
                        }}> תאריך העלאה | {this.props.date}  </Text>
                    </View>
                </View>

            </View>
        );
    }
}
export default InfoUnitAdmin;

const styles = StyleSheet.create({
    
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: "#FFAF50",
        position: 'absolute',
        borderWidth: 4,
        height: "75%",
        width: "30%"
    },
});