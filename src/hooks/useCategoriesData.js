import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // Fetching Categories
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-acures-3igqjnh6n.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}
