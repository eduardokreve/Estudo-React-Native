import React from 'react'
import {Linking , WebView} from 'react-native'


export default class Portal extends React.Component {
    render() {
        const uri = 'https://aluno.uffs.edu.br'
        
        return (
            <WebView
				ref={(ref) => { this.webview = ref; }}
				source={{ uri }}
		
			/>
        )
    }
}
