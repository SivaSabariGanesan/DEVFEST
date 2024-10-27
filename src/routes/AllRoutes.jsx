import { Route, Routes } from 'react-router-dom'
import { Events } from '../pages/Events'
import Layout from '../components/Layout'
import EventDetails from '../pages/EventDetails'
import CyberpunkOrganizers from '@/pages/ContactUs'
import LayoutNew from '@/components/LayoutNew'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/home' element={<LayoutNew />} />
        <Route path='/events' element={<Events />} />
        <Route path='/home/events' element={<Events />} />
        <Route path='/home/events/:id' element={<EventDetails />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/contact-us' element={<CyberpunkOrganizers />} />
    </Routes>
  )
}