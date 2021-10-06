import React, { useState } from 'react'

export default function TopLayout() {

    let [query, setQuery] = useState('')
    let [data, setData] = useState({})

    // testinggg

    async function fetchData(query) {
        console.log(query)
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=523fce137a4bd0a638eb90ddbca2417f&units=imperial`, {
            "method": "GET"
        })
        let data = await response.json()
        return data;
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            console.log('Enter Pressed')
            let data = await fetchData(query)

            setData(data)
            console.log(data)
            setQuery('')

        }
    }

    return (
        <>

            <div className='container'>
                <div className='input'>
                    <input
                        className='input__box'
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder='Search a City...'
                    />
                </div>
                {data.weather && (
                    <>
                        <h2>
                            <span>{data.name}</span>
                            <sup>{data.sys.country}</sup>
                        </h2>

                        <div className='weather'>

                            <div className='info'>{data.weather[0].main}</div><div><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /></div>
                            <div className='temp'><h2>{Math.round(data.main.temp)} </h2> <sup>&deg;F</sup></div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
