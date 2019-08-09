import React, {Component} from 'react';
import  {Text, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Image
    } from 'react-native';
import { NavigationActions } from "react-navigation";
import GeneralStatusBarColor from './GeneralStatusBarColor'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class EstiloMenuLateral extends Component {

    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return(
            <View>
                <GeneralStatusBarColor backgroundColor="#519387" barStyle="light-content"/>
            
                <View style = {styles.container}>
                    
                    <View style = {styles.header}> 
                        <Image style={styles.perfil} source={require('../../assets/icone_usuario.png')}/>      
                        <TouchableOpacity>
                            <Text style={styles.nomeUser}>
                                Usuário
                            </Text> 
                        </TouchableOpacity> 
                    </View>
                
                    <View style={styles.scrowView}>
                        <View style={{flex: 1, flexDirection: 'column', marginTop:'5%', justifyContent: 'space-evenly'}}>
                        
                            <TouchableOpacity style={styles.touch} onPress={this.navigateToScreen("Calendario")}>
                                <Image style={styles.image} source={require('../../assets/calendario_academico.png')}/> 
                                <Text style={styles.menus}>
                                    Calendário Acadêmico
                                </Text> 
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.touch} onPress={this.navigateToScreen("Cardapio")}>
                                <Image style={styles.image} source={require('../../assets/ru.png')}/> 
                                <Text style={styles.menus}>
                                    Cardápio R.U
                                </Text> 
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.touch} onPress={this.navigateToScreen("Uteis")}>
                                <Image style={styles.image} source={require('../../assets/links.png')}/> 
                                <Text style={styles.menus}>
                                    Úteis
                                </Text> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.touch} onPress={this.navigateToScreen("Eventos")}>
                                <Image style={styles.image} source={require('../../assets/eventos.png')}/> 
                                <Text style={styles.menus}>
                                    Eventos
                                </Text> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.touch} onPress={this.navigateToScreen("Aula")}>
                                <Image style={styles.image} source={require('../../assets/horario_aula.png')}/> 
                                <Text style={styles.menus}>
                                    Horários aula
                                </Text> 
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.touch} onPress={this.navigateToScreen("Onibus")}>
                                <Image style={styles.image} source={require('../../assets/horario_onibus.png')}/> 
                                <Text style={styles.menus}>
                                    Horário de ônibus
                                </Text> 
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.footerView}>

                        <TouchableOpacity onPress={this.navigateToScreen("Menu")}>
                            <Image style={styles.imageConfig} 
                                source={require('../../assets/configuração.png')}/> 
                            <Text style={styles.menConf}>
                                Configurações
                            </Text> 
                        </TouchableOpacity>

                    </View>

                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:wp('100%'),
        height:hp('100%'),
    },
    header: {
        flex:1,
        width:wp('100%'),
        height:hp('13%'),
        backgroundColor:'#f7f7f7',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        padding:'3%'
    },
    perfil:{
        resizeMode:'contain', 
        width:wp('20%'),
        height:hp('20%'), 
    },
    nomeUser: {
        fontSize:wp('6%'),
        color: '#5c5c5c',
        left:wp('15%'),
        fontWeight:'bold',
    },
    scrowView: {
        width:wp('100%'),
        height:hp('72%'),
        backgroundColor:'#f7f7f7',
    },
    touch:{
        alignContent:'flex-start',
        alignItems:'flex-start', 
        paddingLeft:wp('5%'),
    },  
    image:{
        resizeMode: 'contain', 
        width:wp('9.5%'),
        height:hp('9.5%'), 
    },
    menus:{
        alignItems:'center',
        justifyContent:'space-between',
        color: '#5c5c5c',
        fontSize: wp('5%'),
        left:wp('15%'),
        bottom:hp('6.75%')
    },
    footerView: {
        width:wp('100%'),
        height:hp('12%'),
        backgroundColor:'#f7f7f7',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center', 
    },
    imageConfig:{
        resizeMode: 'contain', 
        width:wp('9.8%'),
        height:hp('9.8%'), 
        left:wp('5%')
    },
    menConf:{
        color:'#5c5c5c',
        fontSize:wp('5.75%'),
        left:wp('20%'),
        bottom:hp('7.5%')
    }
})