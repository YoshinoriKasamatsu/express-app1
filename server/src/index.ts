import express from "express";
import path from "path";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.raw());
// app.use(express.urlencoded({ extended: true }));


// console.log(express.static(path.join(__dirname, 'public')));
// app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api/sayhello', (req, res) => {
  res.send('hello ' + req.body);
});

app.post('/api/sayhellobin', (req, res) => {
  console.log(req.body);
  res.send('hello ' + req.body);
});

app.post('/api/sayhellojson', (req, res) => {
  console.log(req.body);
  res.send('hello ' + req.body);
});

app.listen(port, () => {
  console.log(`start http://localhost:${port}`)
})


console.log("hello");

