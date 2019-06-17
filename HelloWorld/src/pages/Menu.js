import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'; 

import Header from '../components/Header'
export default class Menu extends React.Component {
	static navigationOptions = {
		title: "Menu"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header titulo={"UFFS"} />
				<Text style = {styles.MensagemMenu}>Seja bem vindo</Text>
				<Text style = {styles.Deslizar}>Deslize para começar</Text>
				<Image style = {styles.Imagem} source={require('../../assets/seta_direita.png')}/>
			</View>   
		);
 	}
}

const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width:'100%',
        height:'100%',
	},
	MensagemMenu: {
		fontSize: 40,
		color:'#7a7a7a',
		justifyContent:'center',
		paddingTop:'23%',
		paddingLeft:'12%',
	},
	Deslizar:{
		fontSize: 16,
		fontWeight:'bold',
		color:'#7a7a7a',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop:'10%',
		paddingLeft:'28%',
	},
	Imagem:{	
		width:90,
		height:90,
		alignItems: 'center',
		justifyContent: 'center',
		left:'35%'
	}
})