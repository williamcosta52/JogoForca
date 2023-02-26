import palavras from "../palavras"

export default function Jogo(props){

    const novaLista = [...palavras];

    const palavraOculta = [];
    
    return (
        <><div className="botao" onClick={SortearPalavra}><span>Escolher Palavra</span></div><div className="palavra">
            <span className={props.errouPalavra}>{props.mostrarPalavra}</span>
        </div></>
    )
    
    function SortearPalavra(){

        const palavra = Math.floor(Math.random() * novaLista.length);

        const mostrando = novaLista[palavra];

        for (let i = 0; i < mostrando.length; i++){

            palavraOculta.push(" _ ");
        }
        props.setPalavraSelecionada(mostrando)

        props.setMostrarPalavra(palavraOculta)

        props.setDesabilitado(false)
    }   
}