import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './components/Home'
import Property from './components/property';
import Catalog from './components/Catalog';
import Plan from './components/Plan';
import Post from './components/Post';
import './App.css'

function App() {
 

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/plan" element={<Plan/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
