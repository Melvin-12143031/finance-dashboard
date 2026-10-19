import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key)

      return storedValue
        ? JSON.parse(storedValue)
        : initialValue
    } catch (error) {
      console.error('Failed to read Local Storage:', error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Failed to save to Local Storage:', error)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage