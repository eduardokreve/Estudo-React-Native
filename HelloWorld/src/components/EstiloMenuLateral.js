import React, {Component} from 'react';
import  {Text, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Image,
    Dimensions
    } from 'react-native';
import { NavigationActions } from "react-navigation";

const { width, height } = Dimensions.get('window'); //pega o tamanho da tela
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
                        <TouchableOpacity/*onPress={this.navigateToScreen("Tela")}*/>
                            <Text style={styles.nomeUser}>
                                Usuário
                            </Text> 
                        </TouchableOpacity>
                        <Image style={styles.perfil} source={require('../../assets/icone_usuario.png')}/>       
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
                    <TouchableOpacity style={{padding:'6%'}} onPress={this.navigateToScreen("")}>
                        <Image style={styles.imageConfig} 
                            source={require('../../assets/configuração.png')}/> 
                            <Text style={styles.menConf}>
                                Configurações
                            </Text> 
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:width,
        height:height,
    },
    header: {
        flex:1,
        width:'100%',
        height:'13%',
        backgroundColor:'#f7f7f7',
        borderColor:'#7a7a7a',
        borderWidth: 0.3,
    },
    perfil:{
        resizeMode: 'contain', 
        width:64,
        height:64, 
        justifyContent:'center',
        alignItems:'center', 
        bottom:'20%',
        left:'3%'
    },
    nomeUser: {
        fontSize:28,
        color: '#5c5c5c',
        left:'25%',
        top:'88%',
        fontWeight:'bold',
    },
    scrowView: {
        width:'100%',
        height:'72%',
        borderWidth: 0.3,
        borderColor:'#7a7a7a',
        backgroundColor:'#f7f7f7',
    },
    touch:{
        alignContent:'flex-start',
        alignItems:'flex-start', 
        paddingLeft:'5%',
    },  
    image:{
        resizeMode: 'contain', 
        width:35,
        height:35, 
        alignItems: 'center',
		justifyContent: 'center',
    },
    menus:{
        alignItems:'center',
        justifyContent:'center',
        color: '#5c5c5c',
        fontSize: 16,
        left:'20%',
        bottom:'50%'
    },
    footerView: {
        width:'100%',
        height:'13%',
        backgroundColor:'#f7f7f7',
        borderWidth: 0.3,
        borderColor:'#7a7a7a'
    },
    menConf:{
        alignItems:'center',
        justifyContent:'center',
        color: '#5c5c5c',
        fontSize:18,
        fontWeight:'bold',
        left:'22.5%',
        bottom:'45%'
    },
    imageConfig:{
        resizeMode: 'contain', 
        justifyContent:'flex-start', 
        alignItems:'center', 
        width:35,
        height:35, 
        bottom:'10%'
    }
})