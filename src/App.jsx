import Home from './pages/Home'
import Layout from './components/layout/index'
import { Navigate, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Navigate to='/' />} />
        <Route path='/checkout' element={<Checkout/>}  />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  )
}

export default App
