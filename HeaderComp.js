import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements"
import LogoHeaderComponent from "./LogoHeaderComponent"
import Icon from 'react-native-vector-icons/Entypo';

class HeaderComp extends Component {
    render() {
        return (
            <View>

                <Header
                    backgroundColor='#FAE5D3'

                    leftComponent={<TouchableOpacity
                        onPress={() => this.openUserMenu()}>
                        <Icon name="user" size={30} color="black" />
                    </TouchableOpacity>}

                    centerComponent={<LogoHeaderComponent imageUri={require('../assets/img/Logo.png')} />}
                    //centerComponent={<LogoHeaderComponent />}
                    
                    rightComponent={<TouchableOpacity
                        onPress={() => this.openUserMenu()}>
                        <Icon name="menu" size={30} color="black"/>
                    </TouchableOpacity>}
                />
            </View>

        );
    }
}
export default HeaderComp;

const styles = StyleSheet.create({
    
});