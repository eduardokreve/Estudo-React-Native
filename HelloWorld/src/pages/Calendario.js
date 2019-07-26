import React from 'react'
import {View, StyleSheet,  TouchableOpacity, Image} from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import Header from '../components/Header'
import styleRodape from '../components/styles/Rodape'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

//teste com tabnavigator
import FirstPage from '../components/pagesCalendario/Firstpage'
import SecondPage from '../components/pagesCalendario/SecondPage'

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
		}
	}
)

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
			<View>
				<GeneralStatusBarColor backgroundColor="#519387" barStyle="light-content"/>
				<View style={{backgroundColor: '#f7f7f7',}}>
					<View style={styles.menu}>
						<Header/>
						<Meses/>
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
		)
 	}
}

const styles = StyleSheet.create({
	menu: {
		width:wp('100%'),
		height:hp('88%'),
	}
})