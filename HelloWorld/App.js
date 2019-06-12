import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { createDrawerNavigator } from 'react-navigation-drawer';
import { useScreens } from 'react-native-screens';

//import das telas
import Login from './src/pages/Login'
import Menu from './src/pages/Menu'

useScreens(); //otimização do react-navigation

const menuNav = createDrawerNavigator({
	'StackNavigator': {
		screen: Menu,
	}
})

const NavegacaoPrincipal = createStackNavigator({
		'LoginNavigation':{
			screen:Login,
			navigationOptions:{
				header: null, 
			}
		},
		'MenuNavigation':{
			screen: menuNav,
			navigationOptions:{
				header: null,
			}
		},
  
		initialRouteName: 'LoginNavigation'
});

const AppContainer = createAppContainer(NavegacaoPrincipal);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}