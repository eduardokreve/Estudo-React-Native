import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class SelecionaCidade extends React.Component {
    render() {
	    return (
		    <View style = {styles.Cidades}>
                <Text>Selecione seu Campus:</Text>

                <Button 
                    title="Cerro Largo"
                    onPress={() => this.props.navigation.navigate('CerroLargo')}
                />
            </View>  
	    )
    }
}

const styles = StyleSheet.create({
	cidades: {
		backgroundColor: '#f7f7f7',
		width:wp('100%'),
		height:hp('100%'),
	}
})