import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useState } from 'react'; 

import inputField from './components/inputField';
import buttonComponent from './components/buttonComponent';
import contactList from './components/contactList';

export default function App() {
  const [nome, setNome] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [lista, setLista] = useState([]);

  function cadastrarDados(){
    if(nome.trim() === '' || Telefone.trim() === '') return;
    setLista([...lista, {nome, Telefone}]);
    setNome('');
    setTelefone('');
  }

  return (
    <SafeAreaView style = {{flex: 1}}>

    <View style={styles.maiContainer}>
        <Text style = {styles.Title}>Cadastro de Usuário</Text>

        <inputField label="Nome:" value={nome} onChangeText={setNome} />
        <inputField label="Telefone:" value={Telefone} onChangeText={setTelefone} />

        <buttonComponent title={'Cadastrar'} onPress={cadastrarDados}/>

        <contactList lista={lista}/>

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
  Title: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});