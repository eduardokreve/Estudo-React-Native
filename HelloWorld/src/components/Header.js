import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window'); //pega o tamanho da tela

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
        color: '#ffffff',
        backgroundColor:'#519387',
        width:width,
        height:height/16,
        elevation: 5
    },
});

export default Header; 