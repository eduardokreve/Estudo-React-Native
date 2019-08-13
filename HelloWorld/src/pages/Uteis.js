import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import Header from '../components/Header'
import styleRodape from '../components/styles/RodapeStyle'

//Importa cada WebView
import SelecionaLinks from '../components/pagesUteis/SelecionaLinks'
import Moodle from '../components/pagesUteis/Moodle'
import Portal from '../components/pagesUteis/Portal'
import Emprestimos from '../components/pagesUteis/Emprestimos'
import Guia from '../components/pagesUteis/Guia'

const Links = createStackNavigator (
	{
		Home: {screen : SelecionaLinks},
		Moodle: {screen : Moodle},
		Portal: {screen : Portal},
		Emprestimos: {screen : Emprestimos},
		Guia: {screen : Guia},
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			header: null
		}
	}
)

const AppContainer = createAppContainer (Links)

export default class Uteis extends React.Component {
	static navigationOptions = {
		title: "Úteis"
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
		);
 	}
}


const styles = StyleSheet.create({
	menu: {
		backgroundColor: '#f7f7f7',
		width:wp('100%'),
        height:hp('88%')
	}
})