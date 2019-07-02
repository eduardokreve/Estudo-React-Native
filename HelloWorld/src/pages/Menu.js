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
				<Header titulo={"UFFS"} />
				<View style = {styles.Menu}>
					<Text style = {styles.MensagemMenu}>Seja bem vindo</Text>
					<Text style = {styles.Deslizar}>Deslize para a direita</Text>
					<TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
						<Image style = {styles.Imagem} 
							source={require('../../assets/seta_direita.png')}
						/>
					</TouchableOpacity>
				</View>   
			</View>
		);
 	}
}

const styles = StyleSheet.create({
	Menu: {
		height:hp('100%'),
		width:wp('100%'),
		justifyContent:'center',
		alignItems: 'center',
		bottom:hp('10%')
	},
	MensagemMenu: {
		fontSize: wp('9.75%'),
		color:'#7a7a7a',
	},
	Deslizar:{
		fontSize: wp('5%'),
		color:'#7a7a7a',
	},
	Imagem:{	
		height:hp('15%'),
		width:wp('20%'),
	}
})