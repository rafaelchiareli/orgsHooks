import React, {useState, useEffect} from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import {carregaProdutores} from '../../../servicos/carregaDados';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo, setTitulo] = useState('');
  const [lista, seLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    seLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Produtor {...item} />}
      ListFooterComponent={TopoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
