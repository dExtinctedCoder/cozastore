import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages'

export const RoutesWrapper = () => {
  return (
    <Routes>
      <Route Component={LandingPage} path="/" />
    </Routes>
  )
}
