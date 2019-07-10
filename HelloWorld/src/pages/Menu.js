import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'; 

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import Header from '../components/Header'
import styleRodape from '../components/styles/Rodape'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Menu extends React.Component {
	static navigationOptions = {
		title: "Menu"
	}
  	render() {
		return (
			<View>
				<GeneralStatusBarColor backgroundColor="#519387" barStyle="light-content"/>
				<View style={{backgroundColor: '#f7f7f7'}}>
					<View style = {styles.Menu}>
						<Header/>
						<View style={{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
							<Text style = {styles.MensagemMenu}>Seja bem vindo</Text>
						</View>
					</View> 
					<View style={styleRodape.rodape}>
						<TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
							<Image style = {styleRodape.icone} 
								source={require('../../assets/menu.png')}
							/>
						</TouchableOpacity>
					</View>  
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
		fontSize: wp('12%'),
		color:'#7a7a7a',
	},
})