import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'; 

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import Header from '../components/Header'
import styleRodape from '../components/styles/Rodape'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Uteis extends React.Component {
	static navigationOptions = {
		title: "Úteis"
	}
  	render() {
		return (
			<View>
				<GeneralStatusBarColor backgroundColor="#519387" barStyle="light-content"/>
				<View style = {styles.Menu}>
					<Header/>
					<Text>Uteis</Text>
				</View> 
				<View style={styleRodape.rodape}>
					<TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
						<Image style = {styleRodape.icone} 
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
		backgroundColor: '#f7f7f7',
		width:wp('100%'),
        height:hp('88%'),
	}
})