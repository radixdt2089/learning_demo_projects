import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'

 const feture =  (...url) => { console.log(...url); return fetch(url).then(res => res.data )}


function Login(da) {
/* const {data , error} = useSWR("http://localhost:3000/api/user" , feture)
    // console.log(da);
    //const data = useSWR('http://localhost:3000/api/user' , getData()) */
    const server = process.env.SERVER;
    const url = 'https://api.jikan.moe/v3/top/anime/1/airing';
    // const url = `${process.env.SERVER}/api/user`;
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    console.log(server);
    const { data, error } = useSWR(url, fetcher)
    console.log(data);
    return (    
        <div>
            hello from login 
        </div>  
    )
}

export default Login


async function getData(args) {
    console.log(args+"asdfasfd");
    const data = await fetch(args);
    const da = await data.json()
    return da;
}


// export async function getStaticProps() {
//     // const data = await fetch("http://localhost:3000/api/user");
//     // const da = await data.json()
   
//     // const data = await getData()


//     console.log(data);
//     return {
//         props : {
//             data
//         }
//     }
// }