import { useState } from 'react'

const useLocalStorage = key => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)))

  const removeItem = () => {
    localStorage.removeItem(key)
    setItem(null)
  }

  const setItem = newValue => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  return [value, { setItem, removeItem }]
}

export default useLocalStorage
