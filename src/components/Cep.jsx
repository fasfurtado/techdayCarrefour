import React, { useState } from 'react';

export default function Cep(props) {

      
const [cep, setCep] = useState('')

const mcepbutton = document.getElementById("cepbutton")
const mcepvalue = document.getElementById("cepvalue")

mcepvalue.addEventListener('change', (e) => {
      console.log(e.target.value);
      setCep(e.target.value);
});

mcepbutton.addEventListener('click', (e) => handleSubmit(e.target.value));

const handleSubmit = (event) => {

      console.log("CEP handleSubmit: " + cep);
      //executa em lojas o handleCepChange que foi enviado através do props
      props.onCepChange(cep);
      
}

//não será mais necessário porque estão sendo utilizados os campos do cabeçalho existente
/* <div>
            <form onSubmit={e => handleSubmit(e)}>
                  <label>DIGITE O CEP DA SUA ÁREA: </label>
                  <input type="text" value={cep} onChange={e => setCep(e.target.value)} />
                  <input type="submit" value="Enviar" />
            </form>
</div> */

//o componente Cep renderiza em branco porque estão sendo utilizados os campos do cabeçalho existente
return (
      <div></div>
)
                       
}
