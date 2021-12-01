import React from 'react'

const server = process.env.SERVER;
const key = process.env.JWT_KEY;
console.log(key);
function Hello({name , id}) {
    console.log(name);
    return (
        <div>
            hello 
        </div>
    )
}

export default Hello

export async function getStaticProps() {
   const data = await fetch(`${server}/api/user`);
    console.log(data);
    return {
        props : {
            data : await data.json()
        }
    }

}