import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';
import Events from './components/Events.jsx';
import Challenge from './components/Challenge.jsx';
import './App.css';

function App() {

  return (
    <>
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
    </>
  );
}

export default App
