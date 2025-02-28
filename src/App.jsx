import { useState, useEffect } from 'react'
// import './App.css'
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';
import * as starshipsService from './services/starshipService'
// src/App.jsx


const App = () => {

  const [starships, serStarships] = useState([])

  // were taking the data from api and store it in starships
  async function fetchData() {
    const data = await starshipsService.index()
    serStarships(data.results) //.results is somthing from this api to show only api
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = async (formData) => {
    const data = await starshipsService.search(formData)
    serStarships(data.results)
  }

  return (
    <>
      <h1>starwars api</h1>
      <StarshipSearch handleSearch={handleSearch} />
      <StarshipList starships={starships} />
    </>
  );
}

export default App