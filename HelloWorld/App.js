import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Home Screen</Text>
                <Button
                    title="Ir para detalhes"
                    onPress={()=> this.props.navigation.navigate('Details')}
                />
			</View>
		);
  	}
}

class DetailsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
			</View>
		);
	}
}
  
const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
	  	Details: DetailsScreen
	},
	{
		initialRouteName: "Home"
	}
  );
  



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}