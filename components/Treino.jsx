const Treino = () => {

    const a = 1;
    const b = 2;


    const handleTest = () => {
    alert (1 + 2);
 }

    return (
        
        <div>
            <p>treino</p>
            <button onClick = {() => console.log('apertado')}>
                clique
            </button>

            <button onClick={() => console.log(a + b)}>
                somar
            </button>
           <button onClick={handleTest}>com handle</button>
        </div>
    );
}
export default Treino;