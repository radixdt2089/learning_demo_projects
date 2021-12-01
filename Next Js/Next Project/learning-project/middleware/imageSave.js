import nextConnect from 'next-connect'

const imgsave = nextConnect()

imgsave.get(async(req , res , next) => {
    console.log('hello');
    // res.json({str : 'hello from middleware'})
    next()
})

export default imgsave