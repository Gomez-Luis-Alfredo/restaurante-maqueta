import Categorias from "./component/Categorias"
import Chef from "./component/Chef"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Main from "./component/Main"
import MasRecetas from "./component/MasRecetas"
import NewLetter from "./component/NewLetter"
import PostInstagram from "./component/PostInstagram"


function App() {


  return (
    <> 
    <Header/>
    <div id="/">
    <Hero/>
    </div>
    <div id="categoria">
    <Categorias/>
    </div>
    <div id="recetas">
    <Main/>
    </div>
    <div id="chef">
    <Chef/>
    </div>
    <div id="post">
    <PostInstagram/>
    </div>
    <div id="extras">
    <MasRecetas/>
    </div>
    <div id="contacto">
    <NewLetter/>
    </div>
    <Footer/>
     
    </>
  )
}

export default App
