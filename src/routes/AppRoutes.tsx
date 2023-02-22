import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '@pages/Home/Home'
import Layout from '@components/Layout/Layout'
import Secret from '@components/Secret/Secret'
import MoviePreview from "@pages/MoviePreview/MoviePreview"
import Booking from "@pages/Booking/Booking"

const AppRoutes = ({isAuthorized}: {isAuthorized: boolean }): JSX.Element => (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/schedule/:cinemaId/:movieId" element={<MoviePreview />} />
        <Route path="/booking/:cinemaId/:sessionId" element={<Booking />} />
        <Route path="/secret" element={<Secret />} />
      </Route>
    </Routes>
  )

export default AppRoutes
