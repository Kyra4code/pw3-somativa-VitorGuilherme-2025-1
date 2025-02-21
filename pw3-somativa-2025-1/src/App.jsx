import BookCards from "./components/BookCards.jsx"
import './App.css';
import capa_livro from "./assets/image.png";
import Button from "./components/Button.jsx"

function App() {
  return (
    <>
      <div>
        <h1>PW3-WEBAPP-LIVRARIA</h1>
        <BookCards
        title="Bom dia"
        autor="Kyra4code"
        imagem={capa_livro}
        />
      </div>
    </>
  )
}

export default App
