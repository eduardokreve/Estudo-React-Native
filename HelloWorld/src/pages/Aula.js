import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 

import Header from '../components/Header'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Aula extends React.Component {
	static navigationOptions = {
		title: "Horários aula"
	}
  	render() {
		return (
			<View>
				<GeneralStatusBarColor backgroundColor="#519387" barStyle="light-content"/>
				<View style = {styles.Menu}>
					<Header/>
					<Text>Horários aula</Text>
				</View>  
			</View> 
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width:wp('100%'),
		height:hp('100%'),
	}
})