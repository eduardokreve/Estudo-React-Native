import React from 'react';
import {View, Text, StyleSheet,} from 'react-native'; 

import Header from '../components/Header'

export default class Aula extends React.Component {
	static navigationOptions = {
		title: "Horários aula"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header/>
				<Text>Horários aula</Text>
			</View>   
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width:'100%',
        height:'100%',
	}
})