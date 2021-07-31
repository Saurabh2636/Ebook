const express=require('express')
const router = express.Router();
const schema = require('../../models/schema')

router.get('/',(req,res)=>{
  schema.find()
  .then(books => res.json(books))
  .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
 });
 router.post('/', async (req, res) => {
  await schema.create(req.body)
  .then(()=> res.json({ msg: 'Book added successfully' }))
  .catch(() => res.status(400).json({ error: 'Unable to add this book' }));
});
router.get('/:id', (req, res) => {
  schema.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

  module.exports = router;