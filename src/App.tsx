import "./App.css";
import {Header} from "./layout/header/Header";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Works} from "./layout/sections/works/Works";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Particle} from "./components/particle/Particle";
import {GoToTopBtn} from "./components/goTopBtn/GoTopBtn";
import {WindowEmpty} from "./components/WindowEmpty";
import {useState} from "react";

function App() {

   const [closed, setClosed] = useState(true)

   return (
      <div className="App">
         <Particle/>
         <Header/>
         <Main/>
         <Skills/>
         <Works setClosed={setClosed}/>
         <Testimony/>
         <Contact/>
         <Slogan/>
         <Footer setClosed={setClosed}/>
         <GoToTopBtn/>
         <WindowEmpty closed={closed}>
            <button onClick={() => setClosed(true)}>X</button>
            <p>Empty :(</p>
         </WindowEmpty>
      </div>
   );
}

export default App;
