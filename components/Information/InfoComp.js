import React, { Component } from "react"
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native"
import Icon from 'react-native-vector-icons/Entypo'
import Carousel from 'react-native-snap-carousel'

class InfoComp extends Component {

    constructor() {
        super()
        this.state = {
            activeIndex: 0,
            carouselItems: [
                { path: require('../../assets/img/diy.jpg') },
                { path: require('../../assets/img/mammal.jpg') },
                { path: require('../../assets/img/fox.jpg') },
                { path: require('../../assets/img/blossom.jpg') },

            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={styles.carouselStyle}>
                <Image source={item.path}
                    style={{ flex: 1, width: "100%", height: "100%", resizeMode: 'cover' }}
                />
            </View>
        );
    }

    render() {
        return (

            <View style={{ width: "100%", height: "100%" }}>

                <View style={styles.imgStyle}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                        {/* <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems} //change to database 
                        sliderWidth={412}
                        itemWidth={412}
                        enableSnap= {true}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } /> */}
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />

                    </View>

                </View>

                <View style={{ width: "100%", height: "60%", backgroundColor: "#FAE5D3" }}>
                    <View style={styles.textVStyle}>
                        <Text
                            style={styles.textStyle}
                        >{this.props.headline}</Text>
                    </View>
                    <View style={styles.mainStyle}>
                        <ScrollView>

                            <Text
                                style={styles.mainTextStyle}
                            >{this.props.body}

                            </Text>

                        </ScrollView>
                    </View>

                    <View style={{ width: "100%", height: "15%", alignSelf: 'center' }}>

                        <TouchableOpacity
                            onPress={this.props.onCrossPress}
                        >
                            <Icon name="cross" size={50} color='gray'
                                style={{ alignSelf: 'center' }}
                            />

                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}

export default InfoComp;

const styles = {
    imgStyle: {
        width: "100%",
        height: "40%",
        // backgroundColor: '#FAE5D3',
        alignSelf: 'center',
        // backgroundColor: '#434343'
    },
    textStyle: { //text header
        alignItems: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        //textDecorationLine: 'underline',
        //textShadowColor: "gray",
        textShadowRadius: 15
    },
    textVStyle: {
        alignItems: 'center',
        marginTop: "3%",
        width: "100%",
        height: "10%"
    },
    mainStyle: { //text box
        width: "92%",
        height: "70%",
        alignSelf: 'center',
        backgroundColor: "#FBF5E5",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#CECECE",
        marginTop: '2%'
    },
    mainTextStyle: {
        fontSize: 17,
        marginRight: '3%',
        marginLeft: '3%',
        marginTop: '3%'
    },
    carouselStyle: {
        borderRadius: 5,
        backgroundColor: "white",
        height: "100%",
        width: "100%"

    }

}