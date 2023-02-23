export default function Letras(props){

    return (
        
        <div>
            <button disabled onClick={clicou}>{props.letra}</button>
        </div>
    ) 

    function clicou(){
    console.log(props.letra);
    }
}