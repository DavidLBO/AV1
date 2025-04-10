// components/ListaContatos.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ContactList({lista}) {
  return (
    <ScrollView style={styles.listaContainers}>

      <View style={styles.listaHeader}>
        <Text style={[styles.listaColuna, styles.listaTitulo]}>Nome</Text>
        <Text style={[styles.listaColuna, styles.listaTitulo]}>Telefone</Text>
      </View>

      {lista.map((item, index) => (
        <View key={index} style={styles.listaLinha}>
          <Text style={styles.listaColuna}>{item.nome}</Text>
          <Text style={styles.listaColuna}>{item.telefone}</Text>
        </View>

      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listaContainers: {
    flex: 3,
    marginTop: 10,
    marginBottom: 10,
    borderTopWidth: 2,
    borderColor: 'black',
    paddingTop: 15,
  },
  listaHeader: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  listaLinha: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  listaColuna: {
    flex: 2,
    fontSize: 16,
  },
  listaTitulo: {
    fontWeight: 'bold',
  },
});