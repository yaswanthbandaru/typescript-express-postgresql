const database = require('./db/db'); // Import the database connection
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req: XMLHttpRequest, res: any ) => {
    try {
        const result: any = await database.query('SELECT * FROM student');
        console.log(result);
        res.json(result.rows);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/', async (req: any, res: any) => {
    try {
        const { name, phone } = req.body;
        const result = await database.query(
            'INSERT INTO student (name, phone) VALUES ($1, $2) RETURNING *',    
            [name, phone]
        )
        console.log(result);
        res.json(result.rows);

    } catch (err: any) {
        console.log(err.message);
        console.log('server error')
        res.status(500).send('Server error');
    }
})


app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
})

/*

GET REquest cmd: 
curl -X GET http://localhost:3000/

POST Request cmd:
curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{ "name": "ram", "phone": 223231243}'

*/