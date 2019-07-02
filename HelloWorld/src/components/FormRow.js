//Formulário do Login
import React from 'react';
import { View, StyleSheet} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
		backgroundColor:'#ffffff',
		paddingLeft:wp('5%'),
		paddingTop:hp('2%'),
		paddingBottom:hp('2%'),
		borderRadius: 5,
		margin:10,
		width: wp('94%'),
		shadowOpacity: 0.3,
		shadowRadius: 1.3,
		elevation: 2,
	},
	first: {
		marginTop:hp('5%'),
	},
	last:{
		marginBottom:hp('5%'),
	}
});

export default FormRow;