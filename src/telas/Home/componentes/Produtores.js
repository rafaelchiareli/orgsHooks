import React, {useState, useEffect} from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores() {
  const [titulo, setTitulo] = useState('');
  const [lista, seLista] = useState([]);
  
  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    seLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return;
    <Text style={estilos.titulo}>{titulo}</Text>;
  }

  return (
    <FlatList
      data={lista}
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      ListFooterComponent={TopoLista}></FlatList>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontSize: 'bold',
  },
});
