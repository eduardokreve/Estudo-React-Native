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
					<Header style = {styles.Header}titulo={"UFFS"} />
			  	<Text style = {styles.TituloMenu}>Seja bem vindo</Text>
		    </View>
       
		);
 	}
}

 /* <Button style = {{alignItems: 'center', justifyContent:'center'}} 
		onPress={() => this.props.navigation.navigate('LoginNavigation')} title ="Voltar"	
	/>
*/
const styles = StyleSheet.create({
	Header: {
		backgroundColor:'red',
	},
	Menu: {
		backgroundColor: '#EBEBEB',
	//	width: '100%',
	},
	TituloMenu: {
		fontSize: 28,
		fontWeight:'bold',
		color:'#ADADAD',
		alignItems: 'center', 
		justifyContent:'center',
	}
})