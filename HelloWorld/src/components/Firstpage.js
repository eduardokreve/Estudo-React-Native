import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
 
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
      <View style={styles.item}>
        <FlatList 
            style={{ marginTop: 30 }}
            contentContainerStyle={styles.list}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },  
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});