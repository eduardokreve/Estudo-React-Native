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
		padding:10,
		backgroundColor:'white',
		marginTop:5,
		marginBottom: 5,
		elevation:1,
	},
	first: {
		marginTop:10,
	},
	last:{
		marginBottom:10,
	}
});

export default FormRow;