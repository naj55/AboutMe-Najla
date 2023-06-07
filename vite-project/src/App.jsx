import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'
import { Routes, Route, } from 'react-router-dom';
import Cards from './components/Cards'
import Card1 from './components/Card1'
import Pnf from './components/PNF'

function App() {


  return (
    <>

      <Routes>
        <Route exact path="/" element={<Cards />}></Route>
        <Route path="/AboutMe" element={<About />}></Route>
        <Route path="/nav" element={<Nav />}></Route>
        <Route path="/Cards" element={<Cards />}></Route>
        <Route path="/*" element={<Pnf />}></Route>
        <Route path="/Cards/:id" element={<Card1 />}></Route >

      </Routes>

      <div>
        <Footer>

        </Footer>
      </div>
    </>
  )
}

export default App
