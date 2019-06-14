import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { createDrawerNavigator } from 'react-navigation-drawer';
import { useScreens } from 'react-native-screens';

//import das telas
import Login from './src/pages/Login'
import Menu from './src/pages/Menu'

useScreens(); //otimização do react-navigation

const MenuNav = createDrawerNavigator(
	{
		Menu,
		test,
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