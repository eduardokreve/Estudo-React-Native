import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'

import data from '../json/CardapioChapeco.json'
import styles from '../styles/StyleCardapio' 
class CardapioSegunda extends React.Component {
    render() {
        return(
            <View style={styles.cardapio}>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={data['Cardapio'][0]['Segunda']}  
                    renderItem={({item}) => <Text style={styles.texto}>{item}</Text>}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        )
    }
}

class CardapioTerca extends React.Component {
    render() {
        return(
            <View style={styles.cardapio}>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={data['Cardapio'][0]['Terça']}  
                    renderItem={({item}) => <Text style={styles.texto}>{item}</Text>}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        )
    }
}

class CardapioQuarta extends React.Component {
    render() {
        return(
            <View style={styles.cardapio}>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={data['Cardapio'][0]['Quarta']}  
                    renderItem={({item}) => <Text style={styles.texto}>{item}</Text>}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        )
    }
}

class CardapioQuinta extends React.Component {
    render() {
        return(
            <View style={styles.cardapio}>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={data['Cardapio'][0]['Quinta']}  
                    renderItem={({item}) => <Text style={styles.texto}>{item}</Text>}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        )
    }
}

class CardapioSexta extends React.Component {
    render() {
        return(
            <View style={styles.cardapio}>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={data['Cardapio'][0]['Sexta']}  
                    renderItem={({item}) => <Text style={styles.texto}>{item}</Text>}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        )
    }
}

const TabScreen = createMaterialTopTabNavigator(
	{
	    Segunda: { screen: CardapioSegunda },
        Terça: { screen:  CardapioTerca },
        Quarta: { screen:  CardapioQuarta },
        Quinta: { screen:  CardapioQuinta },
        Sexta: { screen:  CardapioSexta }
	},
	{
		tabBarOptions: {
			scrollEnabled: true,
			labelStyle: {
				fontSize: 13,
				color:'white'
			},
			tabStyle: {
				width: wp('100%') / 3,
			},
			style: {
				backgroundColor: '#519387',
			},
			indicatorStyle: {
				backgroundColor: 'white'
			}
		}
	}
)

const CardapioDaSemana  = createAppContainer(TabScreen);

export default class CardapioChapeco extends React.Component {
    render() {
        return(
            <CardapioDaSemana/>
        )
    }
}

