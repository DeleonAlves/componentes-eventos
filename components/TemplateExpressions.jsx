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
            <p>Ola {name} Belez? </p>
            <p>Qual sua profissão? <br/> {data.job}</p>
            <p>E qual sua idade?<br/> {data.age}</p>
            
        </div>
    )
}
export default TemplateExpressions;