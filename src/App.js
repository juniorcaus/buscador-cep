import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu Cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 292929-025</h2>

        <span>Rua: Canarinho barra</span>
        <span>Complemento: Perto de um Hospital</span>
        <span>Boa Vista</span>
        <span>Vila Velha - ES</span>


      </main>
      
    </div>
  );
}

export default App;
