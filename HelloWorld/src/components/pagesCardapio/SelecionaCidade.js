import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class SelecionaCidade extends React.Component {

    renderButton() {
        return(
            <View style={styles.cidades}>
                <TouchableOpacity style={styles.buttonCidade}
                    onPress={() => this.props.navigation.navigate('CerroLargo')}>
                    <Text style={styles.nomeCidade}>Cerro Largo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCidade}
                    onPress={() => this.props.navigation.navigate('Chapeco')}>
                    <Text style={styles.nomeCidade}>Chapeco</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCidade}
                    onPress={() => this.props.navigation.navigate('Erechim')}>
                    <Text style={styles.nomeCidade}>Erechim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCidade}
                    onPress={() => this.props.navigation.navigate('Laranjeiras')}>
                    <Text style={styles.nomeCidade}>Laranjeiras do Sul</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
	    return (
		    <View style={styles.cardapio}>
                <Text style={styles.tituloCampus}>Selecione seu Campus:</Text>
                { this.renderButton() }
            </View>  
	    )
    }
}

const styles = StyleSheet.create({
	cardapio: {
        width: wp('100%'),
        height: hp('70%'),
    },
    tituloCampus: {
        fontSize:22,
        color:'#7a7a7a',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:hp('5%'),
        paddingBottom: hp('5%')
    },
    cidades: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonCidade: {
        width: wp('75%'),
        height: hp('8%'),
		backgroundColor: '#519387',
        borderRadius: 6,
        alignItems:'center',
        justifyContent: 'center'
    },
    nomeCidade: {
        color:'white', 
        fontSize:24,
    }
})