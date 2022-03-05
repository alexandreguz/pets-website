import express from 'express'
import { router as catsController} from './controllers/catsController.js'
import { router as dogsController} from './controllers/dogsController.js'
import cors from 'cors'


const app = express()
const port = 9000

app.use(express.json())

app.use(cors())   

// set the path to the router 
app.use('/', catsController)
app.use('/', dogsController)




app.listen(port, () => console.log(`app listening port ${port}`))