import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList , TouchableWithoutFeedback} from 'react-native';
 
export default class SecondPage extends React.Component {
  state = {
    data: [
      {
        id: '0', dia: '08 Fev', texto: 'Período para realização das formaturas dos concluintes 2018.2.',
      },
      {
        id: '1', dia: '11 Fev', texto: 'Publicação  dos  editais  com os  resultados  de  Transferência  Interna   e  Retorno  de  Aluno-abandono  da  UFFS,Transferência Externa e Retorno de Graduado, para ingresso em 2019.1.',
      },
      {
        id: '2', dia: '15 Fev', texto: 'Final do período de férias docentes.' 
      },
      {
        id: '3', dia: '13 a 15 Fev', texto: 'Período para matrícula dos selecionados no Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono  da   UFFS,  Transferência  Externa  e   Retorno  de   Graduado,  para   ingresso  em  2019.1, na SecretariaAcadêmica.',
      },
      {
        id: '4', dia: '13 a 24 Fev', texto: 'Período para destrancamento ou renovação de trancamento de matrícula da graduação para o semestre 2019.1, via Portal do Aluno.',
      },
      {
        id: '5', dia: '13 a 17 Fev', texto: 'Período para rematrícula 2019.1 da graduação, via Portal do Aluno.' 
      },
      {
        id: '6', dia: '18 a 22 Fev', texto: 'Período de planejamento do ano letivo da graduação.',
      },
      {
        id: '7', dia: '18 a 19 Fev', texto: 'Período para análise dos pedidos de rematrícula da graduação.'
      },
      {
        id: '8', dia: '20 a 24 Fev', texto: 'Período para solicitação de ajustes de matrícula 2019.1 da graduação, via Portal do Aluno.'
      },
      {
        id:'9', dia: '25 a 26 Fev', texto: 'Período para análise dos pedidos de ajustes de matrícula da graduação.'
      },
      {
        id:'10', dia: '25 Fev', texto: 'INÍCIO DO SEMESTRE LETIVO DA GRADUAÇÃO.'
      },
      {
        id: '11', dia: '27 Fev', texto: 'Período para inclusão extraordinária de CCR, via Portal do Aluno.'
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