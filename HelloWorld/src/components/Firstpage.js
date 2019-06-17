
// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import all the components we are going to use.
 
export default class FirstPage extends React.Component {
  state = {
    data: [
      {
        dia: '03 de Junho', texto: 'Publicação dos Editais para o Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono da UFFS.',
        dia: '04 de Junho', texto: 'Período para inscrição para o Processo Seletivo de Transferência Interna e Retorno de Aluno-abandono daUFFS, Transferência Externa e Retorno de Graduado, para ingresso em 2019.2, na Secretaria Acadêmica',
        dia: '11 de Junho', texto: 'III Seminário Integrador de Extensão.' 
      }
    ],
  };
  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.dia}</Text>
      <Text>{item.texto}</Text>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <FlatList 
          style={{ marginTop: 30 }}
          contentContainerStyle={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});