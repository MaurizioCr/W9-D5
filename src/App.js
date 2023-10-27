import './App.css';
import Footer from './Components/MyFooter';
import ColorSchemesExample from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import HarryPotter from './Components/HarryPotter';
import Piratideicaraibi from './Components/Piratideicaraibi';
import Marvel from './Components/Marvel';
function App() {
//Stefano ho la febbre sii clemente, questo è ciò che sono riuscito a fare


  return (
    <>
    <header>
      <ColorSchemesExample/>
    </header>
    <main>
      <HarryPotter movie={'Harry Potter'}/>
      <Piratideicaraibi movie={'Pirates of the Caribbean'}/>
      <Marvel/>
    </main>
    <footer>
      <Footer/>
    </footer>
      </>
  );
}

export default App;
