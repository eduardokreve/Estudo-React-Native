import React, {Component} from 'react';
import  {Text, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Image
    } from 'react-native';
import { NavigationActions } from "react-navigation";


export default class EstiloMenuLateral extends Component {

    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return(
            <View style = {styles.container}>
                
                <View style = {styles.header}> 
                        <TouchableOpacity onPress={this.navigateToScreen("Calendario")}>
                            <Text style={styles.nomeUser}>
                                Usuário
                            </Text> 
                            <Image source={require('../../assets/icone_usuario.png')}/>
                        </TouchableOpacity>
                </View>

                <View style={styles.scrowView}>

                </View>

                <View style={styles.footerView}>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%'
    },
    header: {
        elevation:2,
        backgroundColor:'white',
        width:'100%',
        height:'20%',
        borderColor:'#EBEBEB',
        borderWidth: 1,
        flex:1
    },
    nomeUser: {
        fontSize:28,
        color: '#7a7a7a',
        left:'50%',
        top:'50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrowView: {
        elevation:1,
        width:'100%',
        height:'70%',
        borderWidth: 1,
        borderColor:'#EBEBEB'
    },
    footerView: {
        elevation:2,
        backgroundColor:'white',
        width:'100%',
        height:'10%',
        borderWidth: 1,
        borderColor:'#EBEBEB'
    }

})