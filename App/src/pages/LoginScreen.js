import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native'

import FormRow from '../components/FormRow' //importa o formulario para a pagina do login

export default class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        //define um valor inicial (vazio)
        this.state = { //seta os valores de email e password para vazio
            email: '',
            password: '',
        }
    }

    //função que seta os valores para email e password (novos valores)
    onChangeHandler(field, value) {
	    this.setState ({
		    [field]:value
	    });
    }

    render() { //o que vai ser renderizado
        return (
            <View>
                <FormRow> 
                    <TextInput
                        style={styles.input} 
                        placeholder = "user@mail.com" //mostra o campo
                        value={this.state.email} //define o valor quando o usuario digitar
                        onChangeText = {value => this.onChangeHandler('email', value)}

				    />
                </FormRow>
                <FormRow> 
                    <TextInput 
                        style={styles.input}
                        placeholder = "******"
					    secureTextEntry
                        value={this.state.password}
                        onChangeText = {value => this.onChangeHandler('password', value)}
				    />
                </FormRow>
            </View>
        )
    }    
}

//estilo 
const styles = StyleSheet.create({
	input: {
	    paddingLeft:5,
	    paddingRight: 5,
	    paddingBottom: 5,
    }
});

