import React from 'react';
import {View, StyleSheet,  TouchableOpacity, Image} from 'react-native'; 
import { createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'; 

import Header from '../components/Header'
//teste com tabnavigator
import FirstPage from '../components/Firstpage'
import SecondPage from '../components/SecondPage'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
				width: wp('100%') / 3,
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
			<View style={{backgroundColor: '#f7f7f7',}}>
				<View style={styles.Menu}>
					<Header/>
					<Meses/>
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