import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Router } from '@reach/router'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      {

        <Router>
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
        </Router>
      }
      <NavBar />
    </>
  )
}

export default App
