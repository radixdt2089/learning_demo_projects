import React from 'react'

function notification() {
    return (
        <div className="container p-6 max-w-sm flex mx-auto mt-8 bg-gray-200 space-x-8 rounded-md hover:scale-90 hover:bg-gray-100">
            <div className="flex-shrink-0">
                <img src="/radix.jpg" className="w-24 h-20"></img>
            </div>

            <div className="">
                <div className="text-2xl">Mail Box</div>
                <p>You have a new message!</p>
            </div>
            {/* <h1 className=""> Hello</h1> */}
            {/* <i className="fas fa-home"></i> */}
            {/* <img src="/radix.jpg" className="w-64 h-54"></img> */}
           </div>
    )
}

export default notification
