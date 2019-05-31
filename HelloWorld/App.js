import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Person extends React.Component {
	constructor (props) {
		super(props);
		this.state = {name : ""};
	}
	render() {
		return (
			<View style={styles.container}>
				<Text onPress={()=> this.setState({name : "Dellen"})}>My name is {this.state.name}</Text>	
			</View>
		);
  	}
}

export default class App extends React.Component {
  render() {
		return (
			<Person/>
		);
  }
}
const styles = StyleSheet.create({
	container: {
	 flex: 1,
	 justifyContent: 'center',
	},
	buttonContainer: {
	  margin: 20
	},
	alternativeLayoutButtonContainer: {
	  margin: 20,
	  flexDirection: 'row',
	  justifyContent: 'space-between'
	}
  });
