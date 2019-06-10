//Formulário do Login
import React from 'react';
import { View, StyleSheet} from 'react-native';

const FormRow = props => {
	const { children, first, last } = props;
	return ( //styles.container é um vetor
		
		<View style={[
			styles.container, 
			first ? styles.first : null,
			last ? styles.last : null	
		]}> 
			{children}
		</View>
	)
};

//estilo do formulario
const styles = StyleSheet.create ({
	container: {
		padding:12,
		color:'#5c5c5c',
		backgroundColor:'#FFFFFF',
		borderRadius: 5,
		margin:8,
		elevation:1,
		textAlign: 'center',
	},
	first: {
		marginTop:10,
		fontFamily: 'monospace',
	},
	last:{
		marginBottom:10,
		fontFamily: 'monospace',
	}
});

export default FormRow;