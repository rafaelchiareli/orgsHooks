import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Estrela from './Estrela';


export default function Estrelas({  quantidade: quantidadeAntiga,  editavel = false,  grande = false}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);


 
  const RenderEstrelas = () => {
    const estrelas = [];
    for (let i = 0; i < 5; i++) {
      estrelas.push(
        <Estrela 
        key={i}
        onPress={() => setQuantidade(i + 1)}
        desabilitada={!editavel}
        preechida={i < quantidade}
        grande={grande} />

      );
    }
    return estrelas;
  };
  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas></RenderEstrelas>
    </View>
  );
}

const estilos = 
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },

  });
