import imageSave from '../../middleware/imageSave'
// import handlerMidlerware from '../../middleware/imageSave'
import nextConnect from 'next-connect';

export default function handler(req , res) {
    // const handl = nextConnect()

    res.end('hello')
    // handl.get(req, res => {
    //     console.log('hello from get reqest');
    // })

    // handl.post(req , res => {
    //     console.log('hello from post request');
    // })

    // res.end('hello');
}