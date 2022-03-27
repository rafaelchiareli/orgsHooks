import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../servicos/carregaDados';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
  }
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    return (
      <View styles={estilos.topo}>
        <Image style={estilos.imagem} source={logo} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
