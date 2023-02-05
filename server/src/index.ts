import express from "express";
import path from "path";

const port = 3000;
const app = express();

// console.log(express.static(path.join(__dirname, 'public')));
// app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/api/sayhello', (req, res) => {
  res.send('hello ' + req.body);
});

app.use('/api/sayhello', (req, res) => {
  res.send('hello ' + req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

