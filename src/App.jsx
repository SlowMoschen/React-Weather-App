import { useState } from 'react'
import './App.css'
import Conatiner from './components/Container'
import SearchForm from './components/searchForm'
import WeatherCard from './components/weatherCard'

function App() {

  // Array to store fetched Data in SearchForm Component
  const [weatherData, setWeatherData] = useState([])

  return (
    <>
      <Conatiner className={'app'}>
        <Conatiner className={"form-wrapper"}>
          <SearchForm setWeatherData={setWeatherData}/>
        </Conatiner>
        <Conatiner className={'cards-wrapper'}>
          <WeatherCard weatherData={weatherData}/>
        </Conatiner>
      </Conatiner>
    </>
  )
}

export default App
