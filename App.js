import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useState } from 'react'; 


import {rotulo_input_bnt, rotulo_input_titulo } from './components/mensagens';
import InputField from './components/InputField';
import ButtonComponent from './components/ButtonComponent';
import ContactList from './components/ContactList';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [lista, setLista] = useState([]);

  function cadastrarDados(){
    if(nome.trim() === '' || telefone.trim() === '') return;
    setLista([...lista, {nome, telefone}]);
    setNome('');
    setTelefone('');
  }

  return (
    <SafeAreaView style = {{flex: 1}}>

    <View style={styles.maiContainer}>
        <Text style = {styles.title}>{rotulo_input_titulo}</Text>

        <InputField label="Nome:" value={nome} onChangeText={setNome} />
        <InputField label="Telefone:" value={telefone} onChangeText={setTelefone} />

        <ButtonComponent title={rotulo_input_bnt} onPress={cadastrarDados}/>

        <ContactList lista={lista}/>

        <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  maiContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'flex-start',
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});