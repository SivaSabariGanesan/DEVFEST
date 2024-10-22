import { Route, Routes } from 'react-router-dom'
import { Events } from '../pages/Events'
import Layout from '../components/Layout'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/events' element={<Events />} />
    </Routes>
  )
}
