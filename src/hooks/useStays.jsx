import { useEffect, useState } from 'react'
import jsonStays from '../data/stays.json'

export const useStays = () => {
  const [stays, setStays] = useState([])

  async function fetchStays () {
    return jsonStays
  }

  useEffect(() => {
    fetchStays().then((stays) => {
      setStays(jsonStays)
    })
  }, [])

  return { stays }
}
