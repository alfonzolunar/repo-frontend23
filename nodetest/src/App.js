import './App.css';
import Compclass from './components/compclass';
import ComFuncional from './components/compfuncional';

function App() {
  return (
    <div className="App">
        <h1>Hola buenas noches</h1>
        <p>Cordial Saludo</p>
        <div className="comp-class"><Compclass /></div>
        <div className="comp-func"><ComFuncional /></div>      
    </div>
  );
}

export default App;
