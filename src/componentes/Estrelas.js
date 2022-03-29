import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({  quantidade: quantidadeAntiga,  editavel = false,  grande = false}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const estilos = estilosFuncao(grande);
  const getImage = (index) => {
      if (index < quantidade) {
          return estrela;
      } else {
            return estrelaCinza;
      }
        
      t
  }
  const RenderEstrelas = () => {
    const estrelas = [];
    for (let i = 0; i < 5; i++) {
      estrelas.push(
        <TouchableOpacity
        key={i}
        onPress={() => setQuantidade(i + 1)}
        disable={!editave4l}>
          <Image  source={getImage(i)} style={estilos.estrela} />
        </TouchableOpacity>
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

const estilosFuncao = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
