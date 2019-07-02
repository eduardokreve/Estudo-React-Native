import React from 'react';
import { 
	createStackNavigator, 
	createAppContainer,
} from 'react-navigation'; 
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

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
		drawerWidth: wp('80%'),
		drawerType: 'slide',
		drawerPosition: 'left',
		headerMode: ' float ',
		navigationOptions:{
			header: null,
		},
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
		},
  
		initialRouteName: 'LoginNavigation'
});

const AppContainer = createAppContainer(NavegacaoPrincipal);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}