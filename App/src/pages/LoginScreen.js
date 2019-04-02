import React from 'react';
import {View, StyleSheet, TextInput, Button, ActivityIndicator} from 'react-native'
import firebase from 'firebase';

import FormRow from '../components/FormRow' //importa o formulario para a pagina do login

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		//define um valor inicial (vazio)
		this.state = { //seta os valores de email e password para vazio
			email: '',
			password: '',
			isLoading: false,
		}
	}

	componentDidMount() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyAgx6hkZbEDdPAifC1PUuIqD1ptUbE5RF8",
			authDomain: "series-1d0e0.firebaseapp.com",
			databaseURL: "https://series-1d0e0.firebaseio.com",
			projectId: "series-1d0e0",
			storageBucket: "series-1d0e0.appspot.com",
			messagingSenderId: "331769023710"
		};
		firebase.initializeApp(config);

	}	
	//função que seta os valores para email e password (novos valores)
	onChangeHandler(field, value) {
		this.setState ({
			[field]:value
		});
	}
	 
	tryLogin() {
		this.setState({ isLoading: true});	
		const {email, password} = this.state;

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)	
			.then(user => {
				console.log('Usuário autenticado', user); 
			})
			.catch(error => {
				console.log('Usuario não encontrado', error);
			})
			.then(() => this.setState({ isLoading: false }))
	}

	renderButton() {
		if (this.state.isLoading)
			return <ActivityIndicator/>;

		return (
			<View style={styles.button}>
				<Button 
					title="Login"
					onPress={() => this.tryLogin()} 
				/>
			</View>	
		);
	}

	render() { //o que vai ser renderizado
		return (
			<View style={styles.container}>
				<FormRow first> 
					<TextInput
						style={styles.input} 
						placeholder = "user@mail.com" //mostra o campo
						value={this.state.email} //define o valor quando o usuario digitar
						onChangeText = {value => this.onChangeHandler('email', value)}
					/>
				</FormRow>
				<FormRow last> 
					<TextInput 
						style={styles.input}
						placeholder = "******"
						secureTextEntry
						value={this.state.password}
						onChangeText = {value => this.onChangeHandler('password', value)}
					/>
				</FormRow>

				{this.renderButton() }
				
			</View>
		)
	}    
}

//estilo 
const styles = StyleSheet.create({
	container: {
		paddingLeft:10,
		paddingRight:10,
	},
	input: {
		paddingLeft:5,
		paddingRight: 5,
		paddingBottom: 5,
	},
	button: {
		marginTop:5,
	}
});

