import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput
} from "react-native";

class EditReports extends Component {

    editText() {

    }

    render() {
        return (

            <View style={{ height: 260, width: 150, marginLeft: 10, borderWidth: 0.8, borderColor: '#dddddd' }}>
                <View style={{ flex: 6 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text>קטגוריה:</Text>
                    <TextInput
                        defaultValue={this.props.catagory}
                      //  onChangeText = {description => this.setState({ description })}
                    />
                </View>
                <View style={{ flex: 4, paddingLeft: 10, paddingTop: 10 }}>
                    <TextInput
                        defaultValue={this.props.name}
                      //  onChangeText = {description => this.setState({ description })}
                    />
                    
                    
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <TextInput
                        defaultValue={this.props.date}
                      //  onChangeText = {description => this.setState({ description })}
                    />
                </View>

                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>מגיש הדיווח</Text>
                </View>

                <View style={{ width: "40%", flex: 2, paddingLeft: 3, paddingTop: 10 , flexDirection:'row'}}>
                    <View style={styles.editButtons}>
                        <Button
                            title="ערוך "
                            color="green"
                            onPress={() => this.editText()}
                        />
                    </View>

                    <View style={styles.editButtons}>
                        <Button
                            title="מחק "
                            color="green"
                            onPress={() => this.editText()}
                        />
                    </View>

                    <View style={styles.editButtons}>
                        <Button
                            title="אשר "
                            color="green"
                            onPress={() => this.editText()}
                        />
                    </View>
                </View>

            </View>

        );
    }
}
export default EditReports;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    editButtons:{
        paddingRight:1,
       
    }

});

