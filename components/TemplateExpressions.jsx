import MyComponent from './MyComponent.jsx';

const TemplateExpressions = () => {
    const name = "Deleon"
    const data = {
        age: 36,
        job: 'estudante',
        
    };
    
    

    return (
        <div>
            < MyComponent/>
            <h1>Ola {name} Belez? </h1>
            <h2>Qual sua profissão? <br/> {data.job}</h2>
            <h2>E qual sua idade?<br/> {data.age}</h2>
            
        </div>
    )
}
export default TemplateExpressions;