import React, {Component} from 'react';
import { View, Image, StyleSheet} from 'react-native';
import LoginPage from './src/pages/LoginPage';

export default class App extends Component {
	render() {
		return(
			<View style = {styles.container}>
				<Image style = {styles.image}
					source={require('./download.png')}
				/>
				<LoginPage/>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container: {
		justifyContent: 'center',
	},
	image: {
		justifyContent: 'center', 
		alignItems: 'center',
		backgroundColor: 'transparent',
	}
});