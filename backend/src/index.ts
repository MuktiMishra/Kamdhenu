import dotenv from 'dotenv'
import app from './app.js'



dotenv.config();

const start = () => {
    try {

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on http://localhost:${process.env.PORT}`)
        })


    } catch (err) {
        console.log(`Error in starting server ===> ${err}`)
        process.exit(1);

    }
}

start();