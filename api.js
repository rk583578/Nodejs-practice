const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
const mongodb = require("mongodb");

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insert(req.body);
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  console.log(req.body);
});

app.delete("/:name", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.deleteOne({name:req.params.name});
  resp.send("deleted");
  console.log(result);
});

app.listen(4500);
