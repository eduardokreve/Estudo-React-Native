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
        paddingTop:'3%',
        fontSize:30,
        textAlign:'center',
        justifyContent: 'center',
        fontWeight:'bold',
        color: '#ffffff',
        backgroundColor:'#519387',
        width:'100%',
        elevation: 5
    },
});

export default Header; 