import React from 'react';
import {View, Text, StyleSheet,} from 'react-native'; 

import Header from '../components/Header'

export default class Calendario extends React.Component {
	static navigationOptions = {
		title: "Horário de ônibus"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header titulo={"UFFS"} />
				<Text>Horário de ônibus</Text>
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
		color:'#adadad',
		justifyContent:'center',
		paddingTop:'30%',
		paddingLeft:'12%',
	}
})