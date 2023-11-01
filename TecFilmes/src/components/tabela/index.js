import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const TabelaDeDados = () => {
  const tableHead = ['ID', 'Nome', 'CPF', 'Renda'];
  const tableData = [
    ['1', 'João', '123.456.789-00', 'R$ 1500,00'],
    ['2', 'Maria', '987.654.321-00', 'R$ 2000,00'],
    ['3', 'Carlos', '111.222.333-44', 'R$ 1800,00'],
    // Adicione mais linhas conforme necessário
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text2}
        />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30},
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 , color:'#fff'},
  text2: {margin: 6, color:'#000'}
});

export default TabelaDeDados;
