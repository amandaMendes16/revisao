import Imagem from './img/kaue.jpg'
import './App.css';
import ProfileImage from './component/ProfileImage';
function App() {
  
    return(
      <div className='App'>
        <h1>
          Música
        </h1>

        <ProfileImage
        titulo='System of a Down'
        imagem={Imagem}
        alt='teste'
        />

      </div>

    );
  
}
export default App;