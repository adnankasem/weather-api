import React, { useState } from 'react';



function SearchWeather() {
    let [city, setCity] = useState('')
    //let [responseObj, setResponseObj] = useState({});
    //let [temp, setTemp] = useState('')
    let [icon, setIcon] = useState('')
    //let [description, setDescription] = useState('')
    //let [info, setInfo] = useState({})



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
                const info = data
                //setInfo(data)
                console.log('HELLOOOO', info)

                setIcon(data.weather[0].icon)


            })
            .catch(err => {
                console.error(err);
            });
    }
    //city name, temp in F, icon, description
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



            {/* <div className='city'>
                <h2 className='city-name'>
                    <span>{info.name}</span>
                    <sup>{info.sys.country}</sup>
                </h2>
                <div className='city-temp'>
                    {Math.round(info.main.temp)}
                    <sup>&deg;F</sup>
                </div>
                <div className='info'>
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} onError={(e) => { e.target.onerror = null; e.target.src = "image_path_here" }} alt={info.weather[0].description} />
                    <p className='description'>{info.weather[0].description}</p>
                </div>
            </div> */}
        </>
    )
}

export default SearchWeather
