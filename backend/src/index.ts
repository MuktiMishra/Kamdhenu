import dotenv from 'dotenv'
import app from './app.js'
import https from 'https'
import fs from 'fs'



dotenv.config();

const start = () => {
    try {

        const port = process.env.PORT as any || 4000

        const options = {
            key: fs.readFileSync("/etc/letsencrypt/live/server.kamdhenuskills.com/privkey.pem"),
            cert: fs.readFileSync("/etc/letsencrypt/live/server.kamdhenuskills.com/fullchain.pem")
        }

        const displayURL = `https://server.kamdhenuskills.com:${port}`

        // app.listen(port, () => {
        //     console.log(`Server is listening at http://localhost:${port}`)
        // })
        https.createServer(options, app).listen(port, '0.0.0.0', () => {
            console.log(`Server listening on ${displayURL}`)
        })

    } catch (err) {
        console.log(`Error in starting server ===> ${err}`)
        process.exit(1);

    }
}

start();