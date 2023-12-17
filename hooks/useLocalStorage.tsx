import { useEffect, useState } from 'react'

function getStorageValue(key: string, defaultValue: any) {
  if (typeof window !== 'undefined') {
    const val = localStorage.getItem(key)
    if(typeof val === 'string'){
      const initial = JSON.parse(val)
      return initial || defaultValue
    }
    return defaultValue
  }
  return defaultValue
}

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export default useLocalStorage
