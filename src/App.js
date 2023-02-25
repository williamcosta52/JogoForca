import Jogo from "./componentes/Jogo";
import Letras from "./componentes/Letras";
import palavras from "./palavras";
import "./styles/reset.css";
import "./styles/style.css";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import { useState } from "react";

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function App(props) {

  const  [desabilitado, setDesabilitado] = useState(true);

  const [mostrarPalavra, setMostrarPalavra] = useState("");

  const [palavraSelecionada, setPalavraSelecionada] = useState("");

  const [imagem, setImagem] = useState(forca0)

  const [letraClicada, setLetraClicada] = useState([]);

  console.log(palavraSelecionada)

  return (
    <div className="container">
      <img src={imagem} />

    <div className="botaoteclado">
    <Jogo 
    setDesabilitado={setDesabilitado}
    mostrarPalavra={mostrarPalavra}
    setMostrarPalavra={setMostrarPalavra}
    setPalavraSelecionada={setPalavraSelecionada}
    />
        <div className="teclado">
          {alfabeto.map((letra, index) =>{
            return (
              <Letras
                key={index}
                letra={letra}
                desabilitado = {desabilitado}
                palavraSelecionada={palavraSelecionada}
                imagens={imagens}
                setImagem={setImagem}
                letraClicada={letraClicada}
                setLetraClicada={setLetraClicada}
                mostrarPalavra={mostrarPalavra}
                setMostrarPalavra={setMostrarPalavra}
                />
            );
          })}
        </div>
      </div>
    </div>
  );
}
