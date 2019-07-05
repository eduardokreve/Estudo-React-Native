import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'; 

import Header from '../components/Header'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Menu extends React.Component {
	static navigationOptions = {
		title: "Menu"
	}
  	render() {
		return (
			<View style={{backgroundColor: '#f7f7f7'}}>
				<View style = {styles.Menu}>
					<Header/>
					<View style={{flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
						<Text style = {styles.MensagemMenu}>Seja bem vindo</Text>
						<Text style = {styles.Deslizar}>Deslize para a direita</Text>
					</View>
				</View> 
				<View style={styles.rodape}>
					<TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
						<Image style = {styles.icone} 
							source={require('../../assets/menu.png')}
						/>
					</TouchableOpacity>
				</View>  
			</View>
		);
 	}
}

const styles = StyleSheet.create({
	Menu: {
		width:wp('100%'),
		height:hp('88%'),
	},
	MensagemMenu: {
		fontSize: wp('9.75%'),
		color:'#7a7a7a',
	},
	Deslizar:{
		fontSize: wp('5%'),
		color:'#7a7a7a',
	},
	rodape:{
		width:wp('100%'),
		height:hp('12%'),
		backgroundColor:'#519387',
		justifyContent: 'center',
		alignItems:'center',
		elevation: 5,
	},
	icone:{
		bottom:hp('1.75%'),
		resizeMode: 'contain', 
		height:hp('15%'),
		width:wp('15%'),
	}
})