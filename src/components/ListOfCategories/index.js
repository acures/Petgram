import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Loader } from '../Loader'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

const DEFAULT_CATEGORIES = [1, 2, 3, 4, 5, 6]

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  // Handle Scrolling
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? DEFAULT_CATEGORIES.map(load => <Loader key={load} />)
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
