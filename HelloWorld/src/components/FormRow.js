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
		backgroundColor:'#ffffff',
		borderRadius: 5,
		margin:9,
		width: '100%',
		shadowOpacity: 0.2,
		shadowRadius: 1,
		elevation: 2,
	},
	first: {
		marginTop:10,
	},
	last:{
		marginBottom:10,
	}
});

export default FormRow;