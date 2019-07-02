import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Header = ({titulo}) => {
    return (
        <View>
            <Text style={styles.header}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color: '#ffffff',
        width:wp('100%'),
        height:hp('100%')/16,
        fontSize:30,
        elevation: 5,
        textAlign:'center',
        justifyContent: 'center',
        fontWeight:'bold',
        backgroundColor:'#519387',
    },
});

export default Header; 