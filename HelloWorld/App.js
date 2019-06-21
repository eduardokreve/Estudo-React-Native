import React from 'react';
import { 
	createStackNavigator, 
	createAppContainer,
} from 'react-navigation'; 
import {Dimensions} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { useScreens } from 'react-native-screens';

//import das telas
import Login from './src/pages/Login'
import Menu from './src/pages/Menu'
import Calendario from './src/pages/Calendario'
import Cardapio from './src/pages/Cardapio'
import Uteis from './src/pages/Uteis'
import Eventos from './src/pages/Eventos'
import Aula from './src/pages/Aula'
import Onibus from './src/pages/Onibus'

import EstiloMenuLateral from './src/components/EstiloMenuLateral'

const { width, height } = Dimensions.get('screen'); //pega o tamanho da tela

useScreens(); //otimização do react-navigation


const MenuNav = createDrawerNavigator(
	{
		Menu: {screen: Menu},
		Calendario: {screen: Calendario},
		Cardapio: {screen: Cardapio},
		Uteis: {screen: Uteis},
		Eventos: {screen: Eventos},
		Aula: {screen: Aula},
		Onibus: {screen: Onibus}
	},
	{	
		contentComponent: EstiloMenuLateral,
		drawerWidth: Math.min(height, width) * 0.85,
		drawerType: 'slide',
		drawerPosition: 'left',
		headerMode: ' float ',
		navigationOptions:{
			header: null,
		},
	}
)
//https://reactnative.sataiva.com/reactnative-intro/reactnative-drawerNavigator/
const NavegacaoPrincipal = createStackNavigator({
		'LoginNavigation':{
			screen:Login,
			navigationOptions:{
				header: null, 
			}
		},
		'MenuNavigation':{
			screen: MenuNav
		},
  
		initialRouteName: 'LoginNavigation'
});

const AppContainer = createAppContainer(NavegacaoPrincipal);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}