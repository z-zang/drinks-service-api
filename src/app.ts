import express from "express";

export const app = express();

app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));
app.get('/coffeelover', (req, res) => res.send('I like coffee!'));
app.get('/coffee', (req, res) => {
    const coffeeName = req.body.coffeeName || 'Latte'

    res.status(200).json({
        drinkType: 'Coffee',
        name: coffeeName
    })
});