import nextConnect from 'next-connect'
import multiparty from 'multiparty'

const middleware = nextConnect()

middleware.use(async (req, res, next) => {
  const form = new multiparty.Form()

  await form.parse(req, function (err, fields, files) {
    //    files.logo[0].path = `C:\\Users\\ankur.chovatiya\\Desktop\\Next Project\\learning-project\\${files.logo[0].originalFilename}`
      console.log(files);
    req.body = fields
    req.files = files
    next()
  })
})

export default middleware