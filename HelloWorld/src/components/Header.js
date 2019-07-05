import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>UFFS</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#519387',
        elevation: 5,
        width:wp('100%'),
        height:hp('100%')/16,
        flexDirection: 'row',
        justifyContent:'center',
    },
    title: {
        color: '#ffffff',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
    }
});

 