/* eslint-disable react/prop-types */

export default function WeatherCard({ weatherData }) {

    // Constant to check if the weatherData Arraz is empty
    const isDataEmpty = weatherData.length === 0 ? true : false

    // Function to convert Date to European Standard and output the rigth Weekday
    function convertDate(date) {
        const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const dateString = new Date(date).toLocaleDateString('de-DE', {year: 'numeric', month:'2-digit', day:'2-digit'})
        const weekDay = weekdays[new Date(date).getDay()]

        return {fulldate: dateString, weekday: weekDay}
    }

    // If the Data Array is empty just one Card with an Infotext will be rendered
    if(isDataEmpty) {
        return <div className="card">
                    <h3>To show a forecast, please enter a Cityname.</h3>   
                </div>
    }

    // If there is Data in the Array it will be rendered with 3 Weather Cards
    if(!isDataEmpty) {
        const { country, name } = weatherData.location
        const { forecastday } = weatherData.forecast


        return (
            <>
                <div className="location">
                    <h3>{country}</h3>
                    <h4>{name}</h4>
                </div>
                {forecastday.map((day, index) => {
                    const { date, day: { avghumidity, avgtemp_c, maxtemp_c, maxwind_kph, mintemp_c, condition: { text, icon}} } = day
                    
                    const convertedDates = convertDate(date)

                   return <div className="card" key={index}>
                            <div className="date">
                                <h2>{convertedDates.weekday}</h2>
                                <h3>{convertedDates.fulldate}</h3>
                            </div>
                            <div className="quick-infos">
                                <img src={icon}/>
                                <p>{text}</p>
                            </div>
                            <div className="details">
                                <p>Max. Temp.: <span className="info">{maxtemp_c}°C</span></p>
                                <p>Min. Temp.: <span className="info">{mintemp_c}°C</span></p>
                                <p>average Temp.: <span className="info">{avgtemp_c}°C</span></p>
                                <p>average Humidity: <span className="info">{avghumidity}%</span></p>
                                <p>Max. Windspeed: <span className="info">{maxwind_kph} km/h</span></p>
                            </div>
                        </div>
                })}
            </>
        )
    }
}