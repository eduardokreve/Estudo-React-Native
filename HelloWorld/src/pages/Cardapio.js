import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native' 
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import Header from '../components/Header'
import styleRodape from '../components/styles/Rodape'

//Importa o cardapio de cada cidade
import SelecionaCidade from '../components/pagesCardapio/SelecionaCidade.js'
import CardapioCerroLargo from '../components/pagesCardapio/CardapioCerroLargo.js'


const Cidades = createStackNavigator (
	{
		Home: {screen : SelecionaCidade},
		CerroLargo: {screen : CardapioCerroLargo},
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			header: null
		}
	},
)

const AppContainer = createAppContainer (Cidades);

export default class Cardapio extends React.Component {
	static navigationOptions = {
		title: "Cardápio R.U"
	}
	render() {
		return (
			<View>
				<GeneralStatusBarColor backgroundColor="#519387" barStyle="light-content"/>
				
				<View style = {styles.menu}>
                    <Header/>
					<AppContainer/>
				</View>

				<View style={styleRodape.rodape}>
				  <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
					  <Image style = {styleRodape.icone} 
						  source={require('../../assets/menu.png')}
					  />
				  </TouchableOpacity>
			  </View>  
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	menu: {
		backgroundColor: '#f7f7f7',
		width:wp('100%'),
		height:hp('88%'),
	}
})
