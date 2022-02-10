import 'dotenv/config'
import express from "express";
import axios from "axios";

const app = express();

//TODO:
// 1 - create 3 plans and save each
// 2 - create 12 test users

app.use(express.json());
app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello world');
});


// eslint-disable-next-line no-undef
let plan = {}

// [ ] Create a plan
// [ ] Use axios to create a plam
app.post('/create_plan', (req, res) => {
    console.log(req);
    plan = req.body;
    axios.post(process.env.API_CREATE_PLAN,plan,{
        headers: {
            Authorization: `Bearer  ${process.env.ACCESS_TOKEN}`
        }
    }).then(response => {
         console.log(response);
    }).catch(error => {
        console.log(error)
    });
    res.status(200).send('Success');
});

// [ ] List of plans that were registered

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

