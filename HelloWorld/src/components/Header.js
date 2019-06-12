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
        fontSize:50,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 10,
    },
});


export default Header; 