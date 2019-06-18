import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList , TouchableWithoutFeedback} from 'react-native';
 
export default class FirstPage extends React.Component {
  state = {
    data: [
      {
        id: '0', dia: '03 de Junho', texto: 'Publicação dos Editais para o Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono da UFFS.',
      },
      {
        id: '1', dia: '04 de Junho', texto: 'Período para inscrição para o Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono daUFFS, Transferência Externa e Retorno de Graduado, para ingresso em 2019.2, na Secretaria Acadêmica',
      },
      {
        id: '2', dia: '11 de Junho', texto: 'III Seminário Integrador de Extensão.' 
      },
      {
        id: '3', dia: '03 de Junho', texto: 'Publicação dos Editais para o Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono da UFFS.',
      },
      {
        id: '4', dia: '04 de Junho', texto: 'Período para inscrição para o Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono daUFFS, Transferência Externa e Retorno de Graduado, para ingresso em 2019.2, na Secretaria Acadêmica',
      },
      {
        id: '5', dia: '11 de Junho', texto: 'III Seminário Integrador de Extensão.' 
      },
      {
        id: '6', dia: '04 de Junho', texto: 'Período para inscrição para o Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono daUFFS, Transferência Externa e Retorno de Graduado, para ingresso em 2019.2, na Secretaria Acadêmica',
      }
    ],
  };

  renderItem = ({ item }) => (
      <View style={styles.listItem}>
        <Text style={styles.dia}> {item.dia} </Text>
        <Text style={styles.texto}> {item.texto} </Text>
      </View> 
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            contentContainerStyle={styles.flat}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={this.renderFooter}
            
            onEndReached={this.loadRepositories}
            onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },  
  flat: {
    paddingHorizontal: 20,
    marginTop:20,
    marginBottom:20,
  },
  listItem: {
    backgroundColor: '#ebebeb',
    marginTop: 5,
    marginBottom: 10,
    padding: 15,
    borderRadius: 4,
    elevation: 2
  },
  dia:{
    fontWeight:'bold',
    fontSize:17,
    textAlign:'center',
  },
  texto:{
    marginTop:5,
    color:'#474747',
    fontSize:15,
    textAlign:'justify'
  }
});