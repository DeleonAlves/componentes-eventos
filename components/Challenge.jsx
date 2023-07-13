

const Challenge = () => {
   
    const a = 30;
    const b = 25;
        
   

   
    return (
        <div>
            <p>A  é {a}</p>
            <p>B é {b}</p>
            
            <button onClick={() => console.log(a+b)}> Aperte para somar</button>
        </div>


    );



}
export default Challenge;