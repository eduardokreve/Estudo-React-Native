import React from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native'; 

import Header from '../components/Header'

const { width, height } = Dimensions.get('window'); //pega o tamanho da tela
export default class Menu extends React.Component {
	static navigationOptions = {
		title: "Cardápio R.U"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header titulo={"UFFS"} />
				<Text>Cardapio</Text>
			</View>   
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width:width,
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