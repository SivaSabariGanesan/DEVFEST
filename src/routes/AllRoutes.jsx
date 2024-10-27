import { Route, Routes } from 'react-router-dom'
import { Events } from '../pages/Events'
import Layout from '../components/Layout'
import EventDetails from '../pages/EventDetails'
import CyberpunkOrganizers from '@/pages/ContactUs'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/contact-us' element={<CyberpunkOrganizers />} />
    </Routes>
  )
}