import "./App.css";
import Conversor from "./components/Conversor";

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moeda$</h1>
      <div className="linha">
        <Conversor firstCurrency="BRL" secondCurrency="USD" />
        <Conversor firstCurrency="USD" secondCurrency="BRL" />
      </div>
      <div className="linha">
        <Conversor firstCurrency="BRL" secondCurrency="EUR" />
        <Conversor firstCurrency="EUR" secondCurrency="BRL" />
      </div>
      <div className="linha">
        <Conversor firstCurrency="BRL" secondCurrency="CAD" />
        <Conversor firstCurrency="CAD" secondCurrency="BRL" />
      </div>
      <footer>Hudson Santos - Front-end React Developer</footer>
    </div>
  );
}

export default App;
