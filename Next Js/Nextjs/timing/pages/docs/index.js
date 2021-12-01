import React from 'react'
import Link from 'next/link'

function index({blogs}) {
    // console.log(process.env.NODE_TLS_REJECT_UNAUTHORIZED);
    // console.log(data);
    return (
        <div>
            <h1>Blog page</h1>
            {blogs.data.map(item => {
                return <Link href={`/docs/${item.id}`} key={item.id}><a><h4> {item.id}</h4></a></Link> 
            })}
        </div>
    )
}

export default index

// export async function getStaticPaths() {
//     const response = await fetch('https://gorest.co.in/public/v1/users');
//     const data = await response.json();

//     const paths = data.data.map(item => ({
//         params : {id : item.id}
//     }))
//     // console.log(paths);

//     return {
//         paths ,
//         fallback : false
//     }
// }


export async function getServerSideProps() {
    const response = await fetch(`https://gorest.co.in/public/v1/users`);
    const data = await response.json()

    return {
        props : {
            blogs : data
        }
    }
}