import React from 'react'

function post() {
    return (    
        <div className="container mx-auto mt-8">
            <div className="rounded-xl mx-auto bg-white shadow-2xl max-w-md overflow-hidden md:max-w-2xl">
            <div className="md:flex space-x-5">
                <div className="">
                    <img src="/img.jfif" className="h-48 w-full object-cover" alt=""/>
                </div>
                <div className="">
                    <div className="text-sm text-indigo-500 uppercase font-semibold">Case Study</div>
                    <a href="#" className="text-lg mt-1 text-black font-medium">Finding new customer for your business</a>
                    <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default post
