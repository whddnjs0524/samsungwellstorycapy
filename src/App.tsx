import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './com/Navbar';
import Home from './pages/Home'

const App = () => {
  return (
    <Router basename='/samsungwellstorycapy'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App