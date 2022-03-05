import express from 'express'
import { router as catsController} from './controllers/catsController.js'
import { router as dogsController} from './controllers/dogsController.js'

const app = express()
const port = 9000

app.use(express.json())

// set the path to the router 
app.use('/', catsController)
app.use('/', dogsController)




app.listen(port, () => console.log(`app listening port ${port}`))