import React from 'react'
import {View, Text, Button} from 'react-native'

export default class CardapioErechim extends React.Component {
    render() {
        return(
            <View>
                <Text>Fome</Text>

                <Button
                    title="Voltar"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}