import React from 'react';
import './StatsPage.css';
import { useLocation } from 'react-router-dom';

const StatsPage = () => {
    const location = useLocation();
    const weatherData = location.state ? location.state.weatherData : null;

    return (
        <div className="container">
            <div className="top-bar">
            {weatherData && (
                    <h1>Weather stats for {weatherData.name}</h1>
                )}
            </div>

            <div className="stats">
                {weatherData && (
                <div>
                    <p className='stat-item'>Temperature: {weatherData.main.temp} °C</p>
                    <p className='stat-item'>Humidity: {weatherData.main.humidity}%</p>
                    <p className='stat-item'>Wind Speed: {weatherData.wind.speed} km/h</p>
                </div>
            )}
            </div>
        </div>

        // <div>
        //     <h1>Weather Stats</h1>
            // {weatherData && (
            //     <div>
            //         <p>Temperature: {weatherData.main.temp} °C</p>
            //         <p>Humidity: {weatherData.main.humidity}%</p>
            //         <p>Wind Speed: {weatherData.wind.speed} km/h</p>
            //     </div>
            // )}
        // </div>
    )
}

export default StatsPage;
