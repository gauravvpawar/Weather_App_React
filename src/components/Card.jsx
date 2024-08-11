import React from 'react'

const Card = (props) => {
    const {weather} = props;
   
    return (
        <>
            <div className=' w-[40%]  mx-auto  gap-6 my-10 border-4 border-slate-500 rounded-lg'>
                <div className='my-10 grid gap-3 '>
                    <h1 className='my-3 text-2xl font-semibold text-red-600'>{weather.name.toUpperCase()}</h1>
                    <h3>Temperature : <span className='font-bold'>{weather.main.temp}&deg;c</span></h3>
                    <h3>Minimun Temperature : <span className='font-bold'> {weather.main.temp_min}&deg;c</span></h3>
                    <h3>Maximum Temperature : <span className='font-bold'>{weather.main.temp_max}&deg;c</span></h3>
                    <h3>Humidity : <span className='font-bold'>{weather.main.humidity} </span></h3>
                    <h3>Weather it can be describe as <i>{weather.weather[0].main}</i></h3>
                    <h3>Weather it feels like -<span className='font-bold'>{weather.main.feels_like}</span></h3>
                </div>
                
            </div>
            
        </>)
}

export default Card
