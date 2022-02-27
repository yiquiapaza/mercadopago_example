import "dotenv/config";
import express from "express";
import axios from "axios";

import mercadopago from 'mercadopago';

// Express config
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", "./views");


// Mercadopago config
mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);


// Views pug

app.get('/', (req, res) => {
    res.render('index', { title: 'MercadoPago API', message: 'Hello world'})
});


//! Create a front end 
//app.post('/create_token', (req, res) => {
//    mercadopago.
//
//});

app.post('/find_customer', (req, res) => {
    let data = req.body
    mercadopago.customers.search({
        qs: { email: data.email }
    }).then((customer) => {
        console.log(customer);
        res.status(200).send(customer);
    }).error(error => {
        res.status(400).send(error);
    })
});

//TODO:
// 1 - create 3 plans and save each
// 2 - create 12 test users

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello world');
});


// eslint-disable-next-line no-undef
let plan = {}

// eslint-disable-next-line no-undef
let user = []

// [x] Create a plan
// [x] Use axios to create a plam
app.post('/create_plan', (req, res) => {
    //console.log(req);
    plan = req.body;
    axios.post(process.env.API_CREATE_PLAN, plan,{
        headers: {
            Authorization: `Bearer  ${process.env.ACCESS_TOKEN}`,
        }
    }).then(response => {
        console.log(response);
        res.status(200).send(response.data);
    }).catch(error => {
        console.log(error)
        res.status(400).send(error)
    });
});

// [ ] List of plans that were registered
app.get('/list_plans');

// [ ] Create Usear and save in a file
app.post('/create_user', (req, res) => {
    let data = req.body
    axios.post(process.env.API_CREATE_USER, data, {
        headers: {
            Authorization:`Bearer ${process.env.ACCESS_TOKEN}` 
        }
    }).then(response => {    
        user.push(req.body);
        console.log(response);
        res.status(200).send(response.data);
    }).catch(error => {
        console.log(error);
        res.status(400).send(error); 
    });
})

app.post('/create_subscription', (req, res)=>{
    let data = req.body;
    axios.post(process.env.API_CREATE_SUBSCRIPTION, data, {
        headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    }).then(response => {
        console.log(response.data);
        res.status(200).send(response.data);
    }).catch(error => {
        console.log(error);
        res.status(400).send(error);
    });    
});



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

