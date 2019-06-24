import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'; 
import { createMaterialTopTabNavigator,
	createAppContainer,
} from 'react-navigation'; 

import Header from '../components/Header'
//teste com tabnavigator
import FirstPage from '../components/Firstpage'
import SecondPage from '../components/SecondPage'

const { width, height } = Dimensions.get('window'); //pega o tamanho da tela

const TabScreen = createMaterialTopTabNavigator(
	{
	  Janeiro: { screen: FirstPage },
		Fevereiro: { screen: SecondPage },
		Março: { screen: FirstPage },
		Abril: { screen: SecondPage },
		Maio: { screen: FirstPage },
		Junho: { screen: SecondPage },
		Julho: { screen: FirstPage },
		Agosto: { screen: SecondPage },
		Setembro: { screen: FirstPage },
		Outubro: { screen: SecondPage },
		Novembro: { screen: FirstPage },
	 	Dezembro: { screen: SecondPage }
	},
	{
		tabBarOptions: {
			scrollEnabled: true,
			labelStyle: {
				fontSize: 13,
				color:'black'
			},
			tabStyle: {
				width: Dimensions.get('window').width / 3,
			},
			style: {
				backgroundColor: 'white',
			},
			indicatorStyle: {
				backgroundColor: '#519387'
			}
		},
	}
);

TabScreen.navigationOptions = {
	header:null
}

const Meses = createAppContainer(TabScreen);

export default class Calendario extends React.Component {
	static navigationOptions = {
		title: "Calendário Acadêmico"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header titulo={"UFFS"} />
				<Meses style= {styles.Meses}/>
			</View>   
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width:width,
    height:height,
	}
})