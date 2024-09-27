import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexoCliente] = useState([
    { key: 0, sexo: ' ' },
    { key: 1, sexo: 'Masculino' },
    { key: 2, sexo: 'Feminino' },
  ]);
  const [aluno, setAluno] = useState(false);
  const [nome, setNome] = useState(''); // Estado para capturar o nome
  const [idade, setIdade] = useState(''); // Estado para capturar a idade

  let clientesItem = sexo.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexo} />;
  });

  function cadastro() {
    // Exibir o alerta com todas as informações cadastradas
    Alert.alert(
      'Cadastro realizado com sucesso!',
      `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo[sexoSelecionado].sexo}\nAluno: ${aluno ? 'Sim' : 'Não'}`,
      [{ text: "OK" }] // Adiciona botão de confirmação
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Banco do Sujeito!</Text>

      <TextInput
        style={styles.nomeCliente}
        placeholder="Digite Seu Nome"
        value={nome}
        onChangeText={(texto) => setNome(texto)} // Capturar o nome
      />

      <TextInput
        style={styles.idadeCliente}
        placeholder="Digite Sua Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={(texto) => setIdade(texto)} // Capturar a idade
      />

      <Picker
        selectedValue={sexoSelecionado}
        onValueChange={(itemValue, itemIndex) => setSexoSelecionado(itemValue)}
      >
        {clientesItem}
      </Picker>

      <Text style={styles.sexos}>Sexo: {sexo[sexoSelecionado].sexo}</Text>

      <Switch
        value={aluno}
        onValueChange={(valorSelecionado) => setAluno(valorSelecionado)}
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={aluno ? 'green' : 'red'}
      />

      <Text style={{ textAlign: 'left', marginLeft: 3, fontSize: 18, fontWeight: 'bold' }}>
        Aluno: {aluno ? 'Sim' : 'Não'}
      </Text>

      <TouchableOpacity style={[styles.botao]} onPress={cadastro}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Abrir Conta</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
  },
  nomeCliente: {
    width: 350,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 9,
    borderColor: '#dd7b22',
    marginTop: 25,
    marginLeft: 10,
  },
  idadeCliente: {
    width: 110,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderColor: '#dd7b22',
    marginTop: 25,
    marginLeft: 10,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  sexos: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'Left',
    marginLeft: 2,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 85,
    marginLeft: 105,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
