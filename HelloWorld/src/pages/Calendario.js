import React from 'react';
import {View, Text, StyleSheet,} from 'react-native'; 
import { createStackNavigator, 
	createMaterialTopTabNavigator,
	createAppContainer 
} from 'react-navigation'; 

import Header from '../components/Header'
//teste com tabnavigator
import FirstPage from '../components/Firstpage'
import SecondPage from '../components/SecondPage'

const TabScreen = createMaterialTopTabNavigator(
	{
	  Home: { screen: FirstPage },
	  Settings: { screen: SecondPage },
	},
	{
	  tabBarPosition: 'top',
	  swipeEnabled: true,
	  animationEnabled: true,
	  tabBarOptions: {
		activeTintColor: '#FFFFFF',
		inactiveTintColor: '#F8F8F8',
		style: {
		  backgroundColor: '#633689',
		},
		labelStyle: {
		  textAlign: 'center',
		},
		indicatorStyle: {
		  borderBottomColor: '#87B56A',
		  borderBottomWidth: 2,
		},
	  },
	}
  );

const App = createStackNavigator({
	TabScreen: {
	  screen: TabScreen,
	},
  });

const Meses = createAppContainer(App);

export default class Calendario extends React.Component {
	static navigationOptions = {
		title: "Calendário Acadêmico"
	}
  	render() {
		return (
			<View style = {styles.Menu}>
				<Header titulo={"UFFS"} />
				<Meses style= {styles.Meses}/>
			</View>   
		);
 	}
}


const styles = StyleSheet.create({
	Menu: {
		backgroundColor: '#f7f7f7',
		width:'100%',
        height:'100%',
	},
	Meses :{
		marginTop:'0%',
		
	}
})