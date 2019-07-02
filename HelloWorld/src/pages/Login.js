import React from 'react';
import {View, 
	StyleSheet, 
	TextInput, 
	Text, 
	ActivityIndicator, 
	TouchableOpacity,
	Image} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import FormRow from '../components/FormRow'

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
			<View style = {{backgroundColor: '#f7f7f7', width:wp('100%'), height:hp('100%'),}}>
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
		justifyContent:'center',
		alignItems: 'center',
		resizeMode: 'contain',
		width:wp('100%'),
		height:hp('15%'),
	},
	container: {
		paddingLeft:wp('3%'),
		paddingRight:wp('3%'),
		justifyContent: 'center',
		alignItems: 'center',
		width: wp('100%'),
		height:hp('85%'),
		bottom:hp('10%'),
	},
	text:{
		color:'#5c5c5c',
		textAlign:'center',
		fontSize:16,
	},
	input: {
		paddingLeft:5,
		paddingRight: 5,
		paddingBottom: 7,
		fontSize:19,
	},
	textButton:{
		width: '100%',
		paddingLeft:wp('22%'),
		paddingRight:wp('22%'),
		paddingBottom:hp('2%'),
		paddingTop:hp('2%'),
		marginTop:hp('2.6%'),
		backgroundColor: '#519387',
		borderRadius: 3,
		elevation: 5,
	}
});
