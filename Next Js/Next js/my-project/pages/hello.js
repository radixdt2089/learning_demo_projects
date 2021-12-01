import React from 'react'
import Head from 'next/head'

function hello() {
    return (
        <div className="container mx-auto bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
            {/* <Head>
                Hello Wo
            </Head> */}
            <h1 className="text-6xl font-bold">Next js + tailwindcss</h1>
            <p className="font-serif text-2xl  md:font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p</p>
        </div>
    )
}

export default hello
