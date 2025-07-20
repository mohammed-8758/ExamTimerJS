import Home from './pages/Home'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import Setup from './pages/Setup'
import Timer from './pages/Timer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='setup' element={<Setup />} />
        <Route path='/timer' element={<Timer />}/>
      </Routes>  
    </BrowserRouter>
  )
}
export default App
