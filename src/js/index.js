import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Cliente(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPesspa}> Nome: {props.data.nome}</Text>
      <Text style={styles.textoPesspa}> Idade: {props.data.idade} anos </Text>
      <Text style={styles.textoPesspa}> Cargo: {props.data.cargo}</Text>
      <Text style={styles.textoPesspa}> Senioridade: {props.data.grau}</Text>
      <Text style={styles.textoPesspa}>
        {' '}
        Disponibilidade: {props.data.disponibilidade}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#08145c',
    height: 180,
    marginBottom: 15,
    justifyContent: 'center',
  },
  textoPesspa: {
    color: '#FFF',
    fontSize: 20,
  },
});
export default Cliente;
