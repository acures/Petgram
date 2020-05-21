import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { PhotoCard } from './container/PhotoCard'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'

import { Router } from '@reach/router'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCard photoId={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
          )
      }
    </>
  )
}

export default App
