import myMiddleware from '../../../middleware/imageSave'
import nextConnect from 'next-connect'

const handler = nextConnect()

handler.use(myMiddleware);

handler.get( (req , res) => {

    console.log("get req");
    res.end('hello from index')
})  
// handler.post()

export default handler