import React from 'react';
import {
    StyleSheet,
    Text, 
    View
} from 'react-native';

const Header = ({titulo}) => {
    return (
        <View>
            <Text style={styles.header}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize:30,
        textAlign:'center',
        justifyContent: 'center',
        fontWeight:'bold',
        color: '#FFFFFF',
        backgroundColor:'#519387',
        width:'100%',
        height:'30%',
    },
});


export default Header; 