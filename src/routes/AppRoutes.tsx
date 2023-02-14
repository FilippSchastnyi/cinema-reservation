import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '@pages/Home/Home'
import Layout from '@components/Layout/Layout'
import Secret from '@components/Secret/Secret'
import Schedule from "@pages/Schedule/Schedule"

interface IAppRoutesProps {
  isAuthorized: boolean
}

const AppRoutes = (isAuthorized: IAppRoutesProps): JSX.Element =>
  isAuthorized ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/schedule/:cinemaId/:cardId" element={<Schedule />} />
        <Route path="/secret" element={<Secret />} />
      </Route>
    </Routes>
  ) : (
    <h1>Not authorized</h1>
  )

export default AppRoutes
