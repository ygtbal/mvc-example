import model from '../models/index';

export const createBook = (req, res) => {
  const book = new model.books({
    title: req.body.title,
    content: req.body.content
  })
  return book.save().then(() => {
    return res.json({
      mes: 'ok'
    })
  }).catch((err) => {
    return res.json({
      msg: err.toString(),
    })
  })
}