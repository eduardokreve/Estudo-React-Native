import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class SelecionaLinks extends React.Component {

    renderButton() {
        return(
            <View style={styles.opcoes}>
                <TouchableOpacity style={styles.buttonLinks}
                    onPress={() => this.props.navigation.navigate('Moodle')}>
                    <Text style={styles.url}>Moodle</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLinks}
                    onPress={() => this.props.navigation.navigate('Portal')}>
                    <Text style={styles.url}>Portal do Aluno</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLinks}
                    onPress={() => this.props.navigation.navigate('Emprestimos')}>
                    <Text style={styles.url}>Renovar Empréstimos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLinks}
                    onPress={() => this.props.navigation.navigate('Guia')}>
                    <Text style={styles.url}>Guia de Procedimentos</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
	    return (
		    <View style={styles.menu}>
                <Text style={styles.titulo}>Links Úteis:</Text>
                { this.renderButton() }
            </View>  
	    )
    }
}

const styles = StyleSheet.create({
	menu: {
        width: wp('100%'),
        height: hp('70%'),
    },
    titulo: {
        fontSize:22,
        color:'#7a7a7a',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:hp('5%'),
        paddingBottom: hp('5%')
    },
    opcoes: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonLinks: {
        width: wp('75%'),
        height: hp('8%'),
		backgroundColor: '#519387',
        borderRadius: 3,
        alignItems:'center',
        justifyContent: 'center'
    },
    url: {
        color:'white', 
        fontSize:24,
    }
})