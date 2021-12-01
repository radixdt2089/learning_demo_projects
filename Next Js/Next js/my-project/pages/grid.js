import React from 'react'

function grid() {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-7 mt-8">
            <div className="col-start-2 col-span-3 row-span-3 bg-red-300 h-20 rounded-md">1</div>
            <div className="bg-red-300 rounded-md">1</div>
            <div className="bg-red-300">1</div>
            <div className="bg-red-300 rounded-full">1</div>
            <div className="bg-red-300">1</div>
            <div className="bg-red-300">1</div>
            <div className="bg-red-300 shadow">1</div>
            <div className="bg-red-300 h-24 shadow-lg ">1</div>
            <div className="bg-red-300 shadow-2xl ">1</div>
            <div className="bg-red-300 shadow-inner shadow-2xl ">1</div>
            <div className="bg-red-300 blur">1</div>
            <div className="bg-red-300 filter blur-md contrast-500 ">1</div>
            <div className="bg-red-300 brightness-200">1</div>
            <div className="bg-red-300 drop-shadow">1</div>
            <div className="bg-red-300 ">1</div>
            {/* <div className="bg-red-300">1</div> */}
            
        </div>
    )
}

export default grid
