import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList , TouchableWithoutFeedback} from 'react-native';
 
export default class FirstPage extends React.Component {
  state = {
    data: [
      {
        id: '0', dia: '01 Jan', texto: 'Confraternização universal.',
      },
      {
        id: '1', dia: '14 a 18 Jan', texto: 'Prazo para envio pelas Coordenações à Diretoria de Pós-Graduação da relação de matrículas para cancelamento (alunos que não poderão realizar rematrícula).',
      },
      {
        id: '2', dia: '23 a 31 Jan', texto: 'Rematrículas on-line PPGs.' 
      },
      {
        id: '3', dia: '30 Jan', texto: 'Período para publicação de editais de Processo Seletivo aluno Regular 2019.2',
      },
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