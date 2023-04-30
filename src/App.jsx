import Home from './pages/Home'
import Layout from './components/layout/index'
import { Navigate, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/Dashboard'
import Coffee from './pages/Coffee'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Navigate to='/' />} />
        <Route path='/checkout' element={<Checkout/>}  />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/my-account' element={<Dashboard/>} />
        <Route path='/products/coffee' element={<Coffee/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  )
}

export default App
