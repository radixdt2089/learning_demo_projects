// import handler from "../hello";

export default function handler(req , res) {

    const {pid} = req.query
    console.log(req.method);
    res.end(`Post : ${pid}`)

}


