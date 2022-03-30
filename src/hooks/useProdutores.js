import { useState, useEffect } from "react";
import { carregaProdutores } from "../servicos/carregaDados";
export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, seLista] = useState([]);
  
    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        seLista(retorno.lista);
      }, []);
    return (    
        [titulo, lista]

    );
  
}