import React from 'react'

const SearchBox = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
      <>
       
        <h1 className='text-2xl text-slate-500 my-3'>Find Weather of your city</h1>
        <form onSubmit={fetchWeather} className=''>
          <input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="Enter the city"
            className='w-full max-w-md letter-wider text-lg s px-6 py-4 border mr-4 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
           
          />
          <button type={"submit"} className='bg-blue-700 text-white px-6 py-3 rounded-lg'>Search</button>
        </form>
      </>
    );
}

export default SearchBox
