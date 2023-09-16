/* eslint-disable react/prop-types */

export default function SearchForm({ setWeatherData }) {
    
    // Constants required for the Weather API
    const API_URL = 'http://api.weatherapi.com/v1/forecast.json?key='
    const API_KEY = //TODO: Add your API Key

    // Displays a random City as Placeholder in the Input
    const cityNames = ['Vienna', 'Paris', 'New York', 'Los Angeles', 'Tokyo', 'Sydney', 'Roma']
    const randomIndex = Math.floor(Math.random() * cityNames.length)


    // This function will be called when the form below will be submited
    const handleSubmit = (e) => {
        e.preventDefault()
        const cityName = document.querySelector('#city-input')
        const errorDisplay = document.querySelector('.error')

        if(cityName.value === '') {
            errorDisplay.innerHTML = 'Please enter a Cityname'
            setTimeout(() => {
                errorDisplay.innerHTML = ''
            }, 1500)
            return
        }

        // Fetches Data from API
        const fetchData = async () => {
             const response = await fetch(API_URL + API_KEY + `&q=${cityName.value}` + '&days=3' + '&aqi=no')
             const data = await response.json()
             setWeatherData(data)
             return data
        }
        fetchData()
        cityName.value = ''
        cityName.placeholder = '...'
        return
    }
    
    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <label htmlFor="city">Enter a Cityname</label>
            <input type="text" placeholder={`${cityNames[randomIndex]}...`} id="city-input"/>
            <button type="submit"><span className="material-symbols-outlined">search</span></button>
            <div className="error"></div>
        </form>
    )
}