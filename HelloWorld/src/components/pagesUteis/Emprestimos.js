import React from 'react'
import {WebView} from 'react-native'

export default class Emprestimos extends React.Component {
    render() {
        const uri = 'http://consulta.uffs.edu.br/pergamum/biblioteca_s/php/login_usu.php?flag=index.php'
        
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
