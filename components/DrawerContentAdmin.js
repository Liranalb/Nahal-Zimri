import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import {
    Avatar,
    Title,
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from "../config/Firebase"

export function DrawerContentAdmin(props) {


    return (
        <View style={{ flex: 1 }}>
            
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.titleSection}>
                        <View style={{ marginRight: '25%', marginTop: '8%', marginBottom: '6%', flexDirection: 'column' }}>
                            {/* <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Title style={styles.title}>נחל זמרי</Title>

                            </View> */}
                            <Avatar.Image
                                source={require('../assets/img/logo3.png')}
                                size={120}
                            />
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style={styles.drawerItem}

                            label="מסך ראשי"
                            labelStyle={styles.drawerLable}
                            onPress={() => { props.navigation.navigate('HomeAdmin') }}
                        />
                        <DrawerItem style={styles.drawerItem}

                            label="עדכונים וכתבות"
                            labelStyle={styles.drawerLable}
                            onPress={() => { props.navigation.navigate('InfAd') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                        label="דיווח תצפית"
                        labelStyle={styles.drawerLable}
                        onPress={() => { props.navigation.navigate('Reports') }}
                        />

                        <DrawerItem style={styles.drawerItem}

                        label="אודות נחל זמרי"
                        onPress={() => { props.navigation.navigate('AboutAdmin') }}
                        labelStyle={styles.drawerLable}
                        />
                        <DrawerItem style={styles.drawerItem}
                        label="טבע ומורשת בפסגת זאב"
                        onPress={() => { props.navigation.navigate('AboutPZAdmin') }}
                        labelStyle={styles.drawerLable}
                    />

                        <DrawerItem style={styles.drawerItem}

                        label="פייסבוק"
                        labelStyle={{ color: '#3b5998', fontWeight: "bold", fontSize: 18 }}
                        onPress={() => { Linking.openURL('https://www.facebook.com/NahalZimri') }}
                        />
                        <DrawerItem style={styles.drawerItem}

                        label="אינסטגרם"
                        onPress={() => { Linking.openURL('https://www.instagram.com/nahalzimri/') }}
                        labelStyle={{ color: '#fe4164', fontWeight: "bold", fontSize: 18 }}
                        />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

                <DrawerItem style={{ flexDirection: 'row' }}
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="התנתק"
                    onPress={() => firebase.auth().signOut()}

                />

            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1


    },
    titleSection: {
        paddingLeft: 20,
        flexDirection: 'row-reverse',
        marginBottom: 5
    },
    title: {
        fontSize: 25,
        //color: '#FF8C37',
        fontWeight: 'bold',
        paddingBottom: 3

    },
    drawerItem: {
        //flexDirection: 'row',
        backgroundColor: '#FAD3B2'
    },


    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        
    },
    drawerLable: {
        fontWeight: "bold",
        fontSize: 18
    }

});