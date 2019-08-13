import React from 'react'
import {WebView} from 'react-native'

export default class Portal extends React.Component {
    render() {
        const uri = 'https://aluno.uffs.edu.br'
        
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
