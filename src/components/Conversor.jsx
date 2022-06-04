import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Conversor.css";

export default function Conversor({ firstCurrency, secondCurrency }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState();

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
      <h1>
        {firstCurrency} para {secondCurrency}
      </h1>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleConvertMoney}>Converter</button>
      <p>Valor convertido: {result}</p>
    </div>
  );
}
