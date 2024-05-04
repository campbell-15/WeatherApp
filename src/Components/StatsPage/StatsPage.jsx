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

            <div class="ag-format-container">
                <div class="ag-courses_box">

                    <div class="ag-courses_item">
                        <div class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            Tempreture:
                            </div>

                            <div class="ag-courses-item_date-box">
                            {weatherData.main.temp} °C
                            </div>
                        </div>
                    </div>

                    <div class="ag-courses_item">
                        <div class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            Weather
                            </div>

                            <div class="ag-courses-item_date-box">
                            {weatherData.weather[0].main}
                            </div>
                        </div>
                    </div>

                    <div class="ag-courses_item">
                        <div class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            Feels Like
                            </div>

                            <div class="ag-courses-item_date-box">
                            {weatherData.main.feels_like}
                            </div>
                        </div>
                    </div>

                    <div class="ag-courses_item">
                        <div class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            Longitude
                            </div>

                            <div class="ag-courses-item_date-box">
                            {weatherData.coord.lon} °
                            </div>
                        </div>
                    </div>

                    <div class="ag-courses_item">
                        <div class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            Latitude
                            </div>

                            <div class="ag-courses-item_date-box">
                            {weatherData.coord.lat} °
                            </div>
                        </div>
                    </div>

                    <div class="ag-courses_item">
                        <div class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            Pressure
                            </div>

                            <div class="ag-courses-item_date-box">
                                {weatherData.main.pressure} hPa
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsPage;
