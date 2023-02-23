import palavras from "../palavras"



export default function Jogo(){


    return (
        <div className="botao" onClick={sortearPalavra}><span>Escolha Palavra</span></div>
    )
    
}

function sortearPalavra(){

    const novaLista = [...palavras]

    const palavra = Math.floor(Math.random() * novaLista.length);

    

    return (
        <div>
            <span>{palavra}</span>
        </div>
    )


}