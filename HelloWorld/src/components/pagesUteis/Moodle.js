import React from 'react'
import {WebView} from 'react-native'

export default class Moodle extends React.Component {
    render() {
        const uri = 'https://moodle-academico.uffs.edu.br/login/index.php'
        
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
