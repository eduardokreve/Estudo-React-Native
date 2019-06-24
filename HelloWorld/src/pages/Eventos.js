import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'; 

import Header from '../components/Header'

const { width, height } = Dimensions.get('window'); //pega o tamanho da tela
export default class Calendario extends React.Component {
	static navigationOptions = {
		title: "Eventos"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header titulo={"UFFS"} />
				<Text>Eventos</Text>
			</View>   
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width: width,
        height:height,
	},
	MensagemMenu: {
		fontSize: 40,
		color:'#adadad',
		justifyContent:'center',
		paddingTop:'30%',
		paddingLeft:'12%',
	}
})