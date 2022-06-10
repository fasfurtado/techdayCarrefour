import React, { useRef, useEffect, useState, useCallback } from 'react'
import { FormSelect } from "react-bootstrap";
import Api from '../Api.js';
import '../commons/styles/asset.min.css';
import '../commons/styles/styles.css';
import Cep from "./Cep.jsx";
import Produtos from "./Produtos.jsx";


export default function Lojas() {


    const selectedLoja = useRef();

    const [loja, setLoja] = useState('');
    const [lojasData, setLojasData] = useState([]);
    const [cep, setCep] = useState('');

    const getLojasData = useCallback((cep) => {
      //Pega a lista de lojas próximas ao CEP do usuário
      Api.getLojas(cep)
        .then(lojasData => {
          setLojasData(lojasData);
          console.log("Agora carregou lojasData e vai colocar no ref a primeira loja mais próxima...");
          selectedLoja.current = lojasData['0'].id;  
          setLoja(selectedLoja.current);
          console.log("selectedLoja = " + selectedLoja.current);
        })
        .catch(console.log("carregando lojas..."))
    },[])

    
    useEffect(() => {
      //Executa toda vez que o CEP for alterado, e se o CEP não for nulo pega as lojas do CEP
      console.log("passou no loja useeffect change cep");
      if (cep) {
        getLojasData(cep);
    }},[cep])


  const handleLojaChange = value => {
        //Executa quando o usuário troca a loja na Caixa de Seleção de Lojas da página
        console.log("Mudou a loja no handleLojaChange: " + value);
        setLoja(value);
        selectedLoja.current = value;
        console.log(value);
  }
  
  const handleCepChange = value => {
    //Executa quando o CEP for alterado no componente <Cep />, onde essa função foi passada pelo <props>
    console.log("MUDOU O CEP no handleCepChange: " + value);
    //altera o estado cep
    setCep(value.replace("-",""));
    //pega as lojas do cep alterado
    getLojasData(value.replace("-",""));
  }
  
  const renderLoja = (
    <div className="form-control w-100 flex">
    <label className="form-label">Escolha a loja de sua preferência :&nbsp;&nbsp;</label>
    <FormSelect className="form-select" value={loja} onChange={e => handleLojaChange(e.target.value)}>
               {lojasData.map((a, b) => (
                 <option value={a['id']}>{a['name']}</option>
                  ))
               }
    </FormSelect>
    </div>
  )

  return (
          <div>
            <Cep onCepChange = {e => handleCepChange(e)} />
            {renderLoja}
            <Produtos loja={selectedLoja.current}/>
          </div>
  )

}