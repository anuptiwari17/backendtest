require('dotenv').config()

const express= require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Namaskaar");
})

app.get('/users', (req, res) => {
    res.send("<h1>Har har mahadev</h1>");
});

app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted succesfully!");
})

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});


app.listen(process.env.PORT, () => {
    console.log('Server running on port 3000');
  });
  