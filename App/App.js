import {createAppContainer, createStackNavigator} from 'react-navigation';

import LoginScreen from './src/pages/LoginScreen' //importa a tela de login

const AppNavigator = createStackNavigator({
	'Login': {
		screen: LoginScreen,
		navigationOptions: {
			title: 'Bem vindo',
		}
    },
}, 
{
	defaultNavigationOptions: {
		title:"Series!",
		headerTintColor:'white',
		headerStyle: {
			backgroundColor: '#6ca2f7',
			borderBottomWidth: 1,
			borderBottomColor:'#c5c5c5',
		},
		headerTitleStyle: {
			color: 'white',
			fontSize:30,
		}
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;