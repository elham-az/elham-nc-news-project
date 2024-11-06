import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(endpoint)
      .then((response) => {
        setData(response.data);
        setLoading(false)
      })
      .catch((err) => {
        setError(err);
        setLoading(false)
      })
  }, [endpoint])

  return { data, loading, error }
}

export default useFetch;
