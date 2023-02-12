import express from "express";
import path from "path";
import { Config } from "./config";
import fs from "fs";
import { ExcelDataStore } from "./data-store/excel-data-store";

const port = 3000;
const app = express();

// データロード
const excelDataStore = new ExcelDataStore();
excelDataStore.loadData();


app.use(express.json());
app.use(express.raw());


app.post('/api/login', (req, res) => {
  console.log(req.body);
});

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

app.use('/', express.static(path.join(__dirname, Config.staticFilesPath)));
app.use('/*', express.static(path.join(__dirname, Config.staticFilesPath)));

app.listen(port, () => {
  console.log(`start http://localhost:${port}`)
})
