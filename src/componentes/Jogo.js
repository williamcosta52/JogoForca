import { useState } from "react";
import palavras from "../palavras"

export default function Jogo(){

    const [mostrarPalavra, setMostrarPalavra] = useState("");

    const novaLista = [...palavras];

    const palavraOculta = [];
    
    return (
        <><div className="botao" onClick={SortearPalavra}><span>Escolher Palavra</span></div><div className="palavra">
            <span className="palavraSorteada">{mostrarPalavra}</span>
        </div></>
    )
    
    function SortearPalavra(){

        const palavra = Math.floor(Math.random() * novaLista.length);

        const mostrando = novaLista[palavra];

        for (let i = 0; i < mostrando.length; i++){

            palavraOculta.push("_");
        }
        setMostrarPalavra(palavraOculta)
        

    }
    
    
}