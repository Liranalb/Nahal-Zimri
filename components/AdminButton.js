import React, { Component } from 'react';
import {TextInput, View,Text, StyleSheet, TouchableOpacity,Button } from 'react-native';

class AdminButton extends Component {
    render() {
        return (
            <View style={{ width: "40%", flex: 2, paddingLeft: 3, paddingTop: 10 , flexDirection:'row'}}>
                <View style={styles.editButtons}>
                        <Button
                            title="מחק"
                            color="green"
                            onPress={() => this.props.onDelete()}
                        />
                    </View>

                    <View style={styles.editButtons}>
                        <Button
                            title="ערוך"
                            color="green"
                            onPress={() => this.editText()}
                        />
                    </View>

            
            </View>

        );
    }
}
export default AdminButton;

const styles = StyleSheet.create({
    
    editButtons:{
        paddingRight:1,
       
    }

});
