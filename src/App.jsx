import { useState } from 'react'

import Header from "./components/Header"
import Resultado from "./components/Resultado"
import Formulario from "./components/Formulario"


function App() {

  function classificarIMC(imc) {
  if (imc < 17) return 'Muito abaixo do peso';
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Acima do peso';
  if (imc < 35) return 'Obesidade 1';
  if (imc < 40) return 'Obesidade 2 (severa)';
  return 'Obesidade 3 (mórbida)';
}

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    if (!isNaN(alturaNum) && !isNaN(pesoNum) && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Seu IMC é ${imc.toFixed(2)}`);
      setClassificacao(classificarIMC(imc));
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
  }

  return (
    <>
    <div>
    <Header />
    <Resultado resultado={resultado} classificacao={classificacao} />
    <Formulario altura={altura} setAltura={setAltura} peso={peso} setPeso={setPeso} calcularIMC={calcularIMC} />
    </div>
    </>
  )
}

export default App