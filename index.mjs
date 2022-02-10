import express from "express";
//import axios from "axios";

const app = express();

//TODO:
// 1 - create 3 plans and save each
// 2 - create 12 test users

app.use(express.json());
app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello world');
});

// [ ] Create a plan
// [ ] Use axios to create a plam
app.post('/create_plan', (req, res) => {
    let obj = req.body;
    console.log(obj);
    res.type('application/json');
    res.status(200).send('Success');
});

// [ ] List of plans that were registered
 
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

