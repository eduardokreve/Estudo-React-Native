import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'; 

import Header from '../components/Header'

const { width, height } = Dimensions.get('window'); //pega o tamanho da tela
export default class Eventos extends React.Component {
	static navigationOptions = {
		title: "Eventos"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header/>
				<Text>Eventos</Text>
			</View>   
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width: width,
        height:height,
	},
})