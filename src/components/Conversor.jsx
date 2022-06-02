import React, { useState } from "react";
import "./Conversor.css";

export default function Conversor(props) {
    const [value, setValue] = useState("")
    const [resultado, setResultado] = useState()

    function converter() {

        let de_Para = `${props.moedaA}_${props.moedaB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${de_Para}&compact=ultra&apiKey=a6dc893746632079e235`;

        fetch(url).then(resultado => {
            return resultado.json()
        }).then(json => {
            let cotacao = json[de_Para]
            let valorConvertido = parseFloat((value * cotacao).toFixed(2))

            setResultado(valorConvertido)
        })
    }

    return (
        <div className="conversor">
            <h1>{props.moedaA} para {props.moedaB}</h1>
            <input type="text" onChange={e => setValue(e.target.value)} />
            <button onClick={converter}>Converter</button>
            <p>Valor convertido: {resultado}</p>
        </div>
    )
}
