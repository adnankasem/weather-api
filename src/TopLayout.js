import React, { useState } from 'react'

export default function TopLayout() {

    let [query, setQuery] = useState('')
    let [data, setData] = useState({})

    async function fetchData(query) {
        console.log(query)
        let response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${query}&units=imperial`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "c48691588amshb4eaffd22ed7555p1db500jsn32802bce1da9"
            }
        })
        let data = await response.json()
        return data;
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log('Enter Pressed')
            let data = await fetchData(query)

            setData(data)
            console.log(data)
            setQuery('')

        }
    }

    return (
        <>
            <div>
                <h1>Weather App</h1>
                <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Search Your City'
                />
            </div>
            <div>
                {data.name}{data.sys.country}
                {data.main.temp}
                {data.weather[0].main}
                {data.weather[0].icon}
            </div>
        </>
    )
}
