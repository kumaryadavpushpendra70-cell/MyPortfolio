import './App.css'
import Navbar from './components/Navbar'
import "./components/Navbar.css"
import Home from './components/Home.jsx'
import "./components/Home.css"
import About from "./components/About.jsx"
import "./components/About.css"
import Experience from "./components/Experience"
import"./components/Experience.css"
import Skills from "./components/Skills"
import './components/Skills.css'
import Projects from "./components/Projects"
import "./components/Projects.css"
import Contact from "./components/Contact"
import "./components/Contact.css"



function App() {

  return (
<>
   <Navbar></Navbar>
   <Home></Home>
   <About></About>
   <Skills></Skills>
   <Projects></Projects>
   <Experience></Experience>
   <Contact></Contact>
   </>
  )
}

export default App