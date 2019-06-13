import React from 'react';
import {View, Text, Button, StyleSheet,} from 'react-native'; 

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
			</View>   
		);
 	}
}

 /* <Button style = {{alignItems: 'center', justifyContent:'center'}} 
		onPress={() => this.props.navigation.navigate('LoginNavigation')} title ="Voltar"	
	/>
*/
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