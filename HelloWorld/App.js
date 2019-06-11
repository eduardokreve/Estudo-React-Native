import React, { Component } from 'react';
import {View, StyleSheet, 
	TextInput, Text, 
	Alert, ActivityIndicator, 
	TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'; 

import FormRow from './src/components/FormRow'

//https://shift.infinite.red/react-navigation-drawer-tutorial-a802fc3ee6dc
class Menu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}



class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		//define um valor inicial (vazio)
		this.state = { //seta os valores
			email: '',
			password: '',
			isLoading: false,
			message: '',
		}
	}

	
	//função que seta os valores para email e password (novos valores)
	onChangeHandler(field, value) {
		this.setState ({
			[field]:value
		});
	}

	renderButton() {
		//mostra que está carregando
		if (this.state.isLoading)
			return <ActivityIndicator/>;

		return (
			<View style={styles.button}>
				<TouchableOpacity style={styles.textButton}
					onPress={() => this.props.navigation.navigate('Main')}>
				<Text style={{color:'white', fontSize:24}}>ENTRAR</Text>
				</TouchableOpacity>
			</View>	
		);
	}

	render() { //o que vai ser renderizado
		return (
			<View style={styles.container}>
				<Text style ={styles.text}>Entre com seu IdUFFS</Text>
				<FormRow first> 
					<TextInput
						style={styles.input} 
						placeholder = "IdUFFS" 
						placeholderTextColor = "#adadad"
						value={this.state.email} //define o valor quando o usuario digitar
						onChangeText = {value => this.onChangeHandler('email', value)}
					/>
				</FormRow>
				<FormRow last> 
					<TextInput 
						style={styles.input}
						placeholder = "Senha"
						placeholderTextColor = "#adadad"	
						secureTextEntry
						value={this.state.password}
						onChangeText = {value => this.onChangeHandler('password', value)}
					/>
				</FormRow>
					
				{ this.renderButton() }
				
			</View>
		)
	}    
}

//estilo 
const styles = StyleSheet.create({
	text:{
		color:'#5c5c5c',
		textAlign:'center',
		fontSize:16,
		paddingBottom:'4%',
	},
	container: {
		paddingLeft:'3%',
		paddingRight:'3%',
		paddingTop:'20%',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	input: {
		paddingLeft:5,
		paddingRight: 5,
		paddingBottom: 7,
		fontSize:19,
	},
	textButton:{
		width: '100%',
		paddingLeft:'19%',
		paddingRight:'19%',
		paddingBottom:'3%',
		paddingTop:'4%',
		marginTop:'8%',
		backgroundColor: '#519387',
		borderRadius: 3,
		elevation: 2,
	}
});


const RootStack = createStackNavigator({
  {
		'Login':{
			screen:LoginForm,
		}
	},
  {
		initialRouteName: 'Login',
		headerMode: 'screen',
  }
});
https://stackoverflow.com/questions/50290050/how-to-implement-both-drawernavigator-and-stacknavigator
const menuNavigation = createDrawerNavigator({
	{
		'MenuLateral':{
			screen:Menu
		}
	},
	{
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: SlideMenu,
    navigationOptions: {
      drawerLockMode: 'locked-closed',
    },
})


const AppContainer = createAppContainer(menuNavigation);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
    
  }
}