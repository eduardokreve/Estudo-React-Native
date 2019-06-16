import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
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
useScreens(); //otimização do react-navigation

const MenuNav = createDrawerNavigator(
	{
		Menu,
		Calendario,
		Cardapio,
		Uteis,
		Eventos,
		Aula,
		Onibus
	},
	{
		drawerType: 'slide',
		drawerPosition: 'left',
		headerMode: ' float ',
	}
)

const NavegacaoPrincipal = createStackNavigator({
		'LoginNavigation':{
			screen:Login,
			navigationOptions:{
				header: null, 
			}
		},
		'MenuNavigation':{
			screen: MenuNav,
			navigationOptions:{
				header: null,
			},
		},
  
		initialRouteName: 'LoginNavigation'
});

const AppContainer = createAppContainer(NavegacaoPrincipal);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}