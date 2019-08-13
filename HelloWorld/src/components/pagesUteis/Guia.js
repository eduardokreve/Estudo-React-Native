import React from 'react'
import {WebView} from 'react-native'

export default class Guia extends React.Component {
    render() {
        const uri = 'https://www.uffs.edu.br/institucional/pro-reitorias/graduacao/guia_de_procedimentos'
        
        return (
            <WebView
				ref={(ref) => { this.webview = ref}}
				source={{ uri }}
				scalesPageToFit
				startInLoadingState
			/>
        )
    }
}
