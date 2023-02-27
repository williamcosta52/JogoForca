export default function Letras(props){

    return (
        <div>
            {props.palavraSelecionada !== "" && !props.array.includes(props.letra) && !props.fimDeJogo ? <button data-test="letter" disabled={false} onClick={clicou}>{props.letra.toUpperCase()}</button> : <button data-test="letter" disabled={true} onClick={clicou}>{props.letra.toUpperCase()}</button>}
        </div>
    )
    function clicou(){

        props.setArray([...props.array, props.letra]);

        if (props.palavraSelecionada.includes(props.letra)){
            for (let i = 0; i < props.palavraSelecionada.length; i++){
                if (props.palavraSelecionada[i] === props.letra){
            props.setMostrarPalavra(props.mostrarPalavra.slice(props.mostrarPalavra[i] = props.letra));
        }
        if (props.mostrarPalavra.join("") === props.palavraSelecionada){
            props.setMostrarPalavra(props.palavraSelecionada);
            props.setErrouPalavra("verde");
            props.setFimDeJogo(true);
        }
            }
        }else if (!props.palavraSelecionada.includes(props.letra)){
            props.setLetraClicada([...props.letraClicada, props.letra]);
            props.setImagem(props.imagens[props.erro.length + 1]);
            props.setErro([...props.erro, props.letra]);
            if (props.erro.length >= 5){
                props.setImagem(props.imagens[6]);
                props.setMostrarPalavra(props.palavraSelecionada);
                props.setErrouPalavra("vermelho");
                props.setFimDeJogo(true);
            }
        }
    }   
}