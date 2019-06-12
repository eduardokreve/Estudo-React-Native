import React from 'react';
import {View, FlatList, Button} from 'react-native'; 

export default class Menu extends React.Component {
	static navigationOptions = {
		title: "Menu"
	}
  	render() {
		return (
	    	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			    <Button onPress={() => this.props.navigation.navigate('LoginNavigation')} title ="Voltar"/>
		    </View>
       
		);
 	}
}