const path = require('path')
const express = require('express');
const exp = express()
const cors = require('cors');

exp.set('json spaces', 2); 
exp.use(express.json())
exp.use(express.urlencoded({ extended: false }))
exp.use(cors({ origin: '*' }))
exp.use(express.static(path.join(__dirname, '/totem/')))


//ROUTES
exp.use(require('./routes/persons'))
exp.use(require('./routes/students'))
exp.use(require('./routes/rooms'))
exp.use(require('./routes/lessons'))
exp.use(require('./routes/sessions'))
exp.use(require('./routes/teachers'))
exp.use(require('./routes/lessonslists'))
exp.use(require('./routes/sales'))
exp.use(require('./routes/tokens'))
exp.use(require('./routes/attendances'))
exp.use(require('./routes/totem'))



exp.get('/', (req, res) => {
  res.send('Server Work')
})


exp.listen(3001, () => {
  console.log('app listening at http://localhost:' + 3001);
})