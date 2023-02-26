import { useState } from "react";

export default function Letras(props){

    const [letraSelecionada, setLetraSelecionada] = useState(false);

    return (
        <div>
            <button data-test="letter" disabled={props.desabilitado || letraSelecionada} onClick={clicou}>{props.letra.toUpperCase()}</button>
        </div>
    ) 

    function clicou(){

        if (props.palavraSelecionada.includes(props.letra)){
            setLetraSelecionada(true);

            for (let i = 0; i < props.palavraSelecionada.length; i++){

                if (props.palavraSelecionada[i] === props.letra){

            props.setMostrarPalavra(props.mostrarPalavra.slice(props.mostrarPalavra[i] = props.letra))
            
        }

        if (props.mostrarPalavra.join("") === props.palavraSelecionada){

            props.setMostrarPalavra(props.palavraSelecionada);
            props.setErrouPalavra("verde");
            props.setDesabilitado(true)
        }
            }

        }else if (!props.palavraSelecionada.includes(props.letra)){
            setLetraSelecionada(true);

            props.setLetraClicada([...props.letraClicada, props.letra]);

            props.setImagem(props.imagens[props.letraClicada.length + 1]);

            props.setErro([...props.erro, props.letra]);

            if (props.erro.length >= 5){
                props.setDesabilitado(true);
                props.setImagem(props.imagens[6]);
                props.setMostrarPalavra(props.palavraSelecionada);
                props.setErrouPalavra("vermelho");
            }
        }
    }   
}