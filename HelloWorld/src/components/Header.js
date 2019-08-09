import React from 'react'
import {
    StyleSheet,
    Text, 
    View
} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>UFFS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:wp('100%'),
        height:hp('100%')/16,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#519387',
        elevation: 2, //android > 5.0
        //ios
        shadowOffset:{height:3,width:0},
        shadowOpacity:0.3
    },
    title: {
        color: '#ffffff',
        fontSize: 38,
        fontWeight:'bold',
    }
})

 