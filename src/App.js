import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
