import React from 'react';
import {View, 
	StyleSheet, 
	TextInput, 
	Text, 
	ActivityIndicator, 
	TouchableOpacity,
	Image,
	Dimensions} from 'react-native';

import FormRow from '../components/FormRow'

const { width, height } = Dimensions.get('window'); //pega o tamanho da tela

export default class Login extends React.Component {
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
					onPress={() => this.props.navigation.navigate('MenuNavigation')}>
				<Text style={{color:'white', fontSize:24}}>ENTRAR</Text>
				</TouchableOpacity>
			</View>	
		);
	}

	render() { //o que vai ser renderizado
		return (
			<View style = {{backgroundColor: '#f7f7f7', width:width, height:height}}>
				<View style = {styles.image}>
					<Image source={require('../../assets/login-logo.png')}/>	
				</View>
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
			</View>
		)
	}    
}

const styles = StyleSheet.create({
	image: {
		resizeMode: 'contain',
		width:250,
		height:71,
		paddingTop: '15%',
		left:'15%',
		justifyContent:'center',
		alignItems: 'center',
	},
	container: {
		paddingLeft:'3%',
		paddingRight:'3%',
		paddingTop:'20%',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	text:{
		color:'#5c5c5c',
		textAlign:'center',
		fontSize:16,
		paddingBottom:'4%',
	},
	input: {
		paddingLeft:5,
		paddingRight: 5,
		paddingBottom: 7,
		fontSize:19,
	},
	textButton:{
		width: '100%',
		paddingLeft:'22%',
		paddingRight:'22%',
		paddingBottom:'3%',
		paddingTop:'4%',
		marginTop:'8%',
		backgroundColor: '#519387',
		borderRadius: 3,
		elevation: 5,
	}
});
