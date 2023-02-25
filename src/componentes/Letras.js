import { useState } from "react";

export default function Letras(props){

    const [letraSelecionada, setLetraSelecionada] = useState(false);

    return (
        <div>
            <button disabled={props.desabilitado || letraSelecionada} onClick={clicou}>{props.letra.toUpperCase()}</button>
        </div>
    ) 

    function clicou(){

        if (props.palavraSelecionada.includes(props.letra)){
            setLetraSelecionada(true);

            props.setMostrarPalavra(props.letra)

        }else if (!props.palavraSelecionada.includes(props.letra)){
            setLetraSelecionada(true);

            props.setLetraClicada([...props.letraClicada, props.letra]);

            props.setImagem(props.imagens[props.letraClicada.length + 1]);
        }
    }   
}