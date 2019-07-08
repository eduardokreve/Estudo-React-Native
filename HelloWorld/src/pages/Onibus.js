import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'; 

import Header from '../components/Header'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
const { width, height } = Dimensions.get('window'); //pega o tamanho da tela
export default class Onibus extends React.Component {
	static navigationOptions = {
		title: "Horário de ônibus"
	}
  	render() {
		return (
			<View>
				<GeneralStatusBarColor backgroundColor="#519387" barStyle="light-content"/>
			
				<View style = {styles.Menu}>
					<Header/>
					<Text>Horário de ônibus</Text>
				</View> 
			</View>  
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width: width,
        height: height,
	}
})