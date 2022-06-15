import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Conversor.css";

export default function Conversor() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState();

  const [firstCurrency, setFirstCurrency] = useState("")
  const [secondCurrency, setSecondCurrency] = useState("")

  const handleConvertMoney = async () => {
    const url = `https://api.apilayer.com/currency_data/convert?to=${secondCurrency}&from=${firstCurrency}&amount=${value}`;

    try {
      const response = await axios.get(url, {
        headers: {
          apiKey: "ZTRz2SbcJOGK6d43mKq730ncoQL1VXUe",
        },
      });
      setResult(response?.data?.result);
      toast.success("Conversão realizada com sucesso!");
    } catch (error) {
      toast.error("Erro ao converter moeda");
    }
  };

  return (
    <div className="conversor">
      <h1>Conversor de Moeda$</h1>

      <div className="inputAndCurrency">
        <input type="text" onChange={(e) => setValue(e.target.value)} />

        <select name="select" onChange={(e) => setFirstCurrency(e.target.value)}>
          <option value="">De</option>
          <option value="BRL">Real</option>
          <option value="USD">Dólar</option>
          <option value="EUR">Euro</option>
          <option value="CAD">Dólar Canadense</option>
        </select>
      </div>

      <div className="inputAndCurrency">
        <input type="text" readOnly value={result} />

        <select name="select" onChange={(e) => setSecondCurrency(e.target.value)}>
          <option value="">Para</option>
          <option value="USD">Dólar</option>
          <option value="BRL">Real</option>
          <option value="EUR">Euro</option>
          <option value="CAD">Dólar Canadense</option>
        </select>
      </div>

      <button onClick={handleConvertMoney}>Converter</button>
    </div>
  );
}
