import React, {Component} from 'react';
import { View, Image} from 'react-native';
import LoginPage from './src/pages/LoginPage';

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