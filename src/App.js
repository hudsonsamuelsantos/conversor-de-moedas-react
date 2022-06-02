import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moeda$</h1>
      <div className="linha">
        <Conversor moedaA="BRL" moedaB="USD" />
        <Conversor moedaA="USD" moedaB="BRL" />
      </div>
      <div className='linha'>
        <Conversor moedaA="BRL" moedaB="EUR" />
        <Conversor moedaA="EUR" moedaB="BRL" />
      </div>
      <div className='linha'>
        <Conversor moedaA="BRL" moedaB="CAD" />
        <Conversor moedaA="CAD" moedaB="BRL" />
      </div>
      <footer>Hudson Santos - Front-end React Developer</footer>
    </div>
  );
}

export default App;
