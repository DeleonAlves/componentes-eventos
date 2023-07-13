

const Challenge = () => {
   
    const a = 30;
    const b = 25;
        
   

   
    return (
        <div>
            <h1>A  é {a}</h1>
            <h1>B é {b}</h1>
            <button onClick={() => console.log(a+b)}> Aperte para somar</button>
        </div>


    );



}
export default Challenge;