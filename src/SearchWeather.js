import React, { useState } from 'react';



function SearchWeather() {
    let [city, setCity] = useState('')
    //let [responseObj, setResponseObj] = useState({});
    let [temp, setTemp] = useState('')
    let [icon, setIcon] = useState('')
    let [description, setDescription] = useState('')



    const searchWeather = async (e) => {
        e.preventDefault();


        //const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lat=0&lon=0&id=2172797&lang=null&units=imperial&mode=xml`;


        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "c48691588amshb4eaffd22ed7555p1db500jsn32802bce1da9"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTemp(data.main.temp)
                setIcon(data.weather[0].icon)
                setDescription(data.weather[0].description)
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
            <h1>Weather App</h1>
            <form onSubmit={searchWeather}>
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Search City...'
                    type='text'
                    name='city'
                    required
                />
                <button type='submit'>Search</button>
            </form>
            <div>
                <p>Temp: {temp}</p>
                <p>Weather: {description} </p>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} onerror='this.style.display = "none"' />
            </div>
        </>
    )
}

export default SearchWeather
