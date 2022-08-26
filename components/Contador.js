const Contador=()=>{

const [contador,setContador]=React.useState(0)

const aumentar=()=>{
    setContador(contador+1)
}
const restar=()=>{
    setContador(contador-1)
}
    return (
    <div>
         <h1 className={contador<1?"menor":"mayor"}>Contador: {contador}</h1>
         <hr/>
         <button onClick={restar}>Disminuir</button>
         <button  onClick={aumentar}>Aumentar</button>
        
    </div>
    
   );
};