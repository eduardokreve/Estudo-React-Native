import React, {Component} from 'react';
import { View, StyleSheet, Image, AppRegistry} from 'react-native';
import { useScreens } from 'react-native-screens';
import LoginPage from './src/pages/LoginPage';

useScreens(); //otimização do react-navigation

export default class App extends Component {
	render() {
		return(
			<View>
				<Image
					style={{width: 368, height: 137}}
					source={require('./download.png')}
				/>
				<LoginPage/>
			</View>
		)
	}
}