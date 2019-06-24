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
                    <View style={{flex: 1, flexDirection: 'column', marginTop:'5%', justifyContent: 'space-around'}}>
                       
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
                    <TouchableOpacity style={{padding:'5%'}} onPress={this.navigateToScreen("")}>
                        <Image style={{justifyContent:'flex-start', alignItems:'center', bottom:'5%'}} source={require('../../assets/configuração.png')}/> 
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
        height:height
    },
    header: {
        elevation:1.5,
        backgroundColor:'#f7f7f7',
        width:'100%',
        height:'15%',
        borderColor:'#EBEBEB',
        borderWidth: 1,
        flex:1,
    },
    perfil:{
        left:'3%',
        bottom:'33%'
    },
    nomeUser: {
        fontSize:28,
        color: '#7a7a7a',
        left:'45%',
        top:'88%',
        fontWeight:'bold',
    },
    scrowView: {
        elevation:1,
        width:'100%',
        height:'75%',
        borderWidth: 1,
        borderColor:'#EBEBEB',
        backgroundColor:'#f7f7f7',
    },
    touch:{
        alignContent:'flex-start',
        alignItems:'flex-start', 
        padding:'2%'
    },  
    imagem:{
        flex: 1,
        resizeMode: 'contain', 
    },
    menus:{
        alignItems:'center',
        justifyContent:'center',
        color: '#7a7a7a',
        fontSize: 18,
        left:'22%',
        bottom:'50%'
    },
    footerView: {
        width:'100%',
        height:'10%',
        elevation:1.5,
        backgroundColor:'#f7f7f7',
        borderWidth: 1,
        borderColor:'#EBEBEB'
    },
    menConf:{
        alignItems:'center',
        justifyContent:'center',
        color: '#7a7a7a',
        fontSize:20,
        left:'20%',
        bottom:'43%'
    },
})