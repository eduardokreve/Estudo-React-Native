import React from 'react';
import {View, StyleSheet, TextInput, Text, Button, Alert, ActivityIndicator} from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow' //importa o formulario para a pagina do login

export default class LoginPage extends React.Component {
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
		this.setState({ isLoading: true, message: ''});	
		const {email, password} = this.state;

		const loginUserSuccess = user => {
			this.setState({message: "Sucesso!"});
		}

		const LoginUserFailed = error => {
			this.setState({
				message: this.getMessageByErrorCode(error.code)
			});
		}


		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)	
			.then(loginUserSuccess)
			.catch(error => {
				if (error.code === 'auth/user-not-found') {
					Alert.alert(
						'Usuário não encontrado', 
						'Deseja criar um cadastro?',
						[{
							text: 'voltar',
							onPress: () => console.log('Usuário não quer se cadastrar')
						},
						{
							text: 'Concerteza',
							onPress: () => {
								firebase
									.auth()
									.createUserWithEmailAndPassword(email, password)
									.then(loginUserSuccess)
									.catch(LoginUserFailed)
							}
						}],
						{cancelable: false}
					)
					return;
				}

				LoginUserFailed(error);
			})
			.then(() => this.setState({ isLoading: false }));
	}

	getMessageByErrorCode(errorCode) {
		switch (errorCode) {
			case 'auth/wrong-password':
				return 'Senha incorreta';
			case 'auth/user-not-found':
				return 'Usuário não encontrado';
			default:
				return 'Erro desconhecido';
		}
	}

	renderButton() {
		//mostra que está carregando
		if (this.state.isLoading)
			return <ActivityIndicator/>;

		return (
			<View style={styles.button}>
				<Button 
					title="ENTRAR"
					onPress={() => this.tryLogin()} 
				/>
			</View>	
		);
	}

	renderMessage() {
		const { message } = this.state;

		if(!message) return null;

		return (
			<View>
				<Text>
					{message}
				</Text>
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
						placeholder = "IdUFFS ou CPF" //mostra o campo
						value={this.state.email} //define o valor quando o usuario digitar
						onChangeText = {value => this.onChangeHandler('email', value)}
					/>
				</FormRow>
				<FormRow last> 
					<TextInput 
						style={styles.input}
						placeholder = "Senha"
						secureTextEntry
						value={this.state.password}
						onChangeText = {value => this.onChangeHandler('password', value)}
					/>
				</FormRow>
					
				{ this.renderButton() }
				{ this.renderMessage() }
				
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
		fontFamily:'monospace',
		paddingBottom:10,
	},
	container: {
		marginTop:10,
		backgroundColor:'#ffffff',
		paddingLeft:10,
		paddingRight:10,
		paddingTop:20,
	},
	input: {
		paddingLeft:5,
		paddingRight: 5,
		paddingBottom: 5,
	},
	button: {
		marginTop:35,
	}
});
