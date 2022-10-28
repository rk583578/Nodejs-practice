const mongoose = require("mongoose");
const url = "mongodb://0.0.0.0:27017/e-comm";
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const productModel = mongoose.model("products", productSchema);

const createInDB = async () => {
  await mongoose.connect(url);
  const data = new productModel({
    name: "p11",
    brand: "poco",
    price: 3532,
    category: "mobile",
  });

  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  await mongoose.connect(url);
  let data = await productModel.updateOne(
    { name: "p11" },
    { $set: { price: 789, name: "p15" } }
  );
  console.log(data);
};


const deleteInDB= async ()=>{
  await mongoose.connect(url);
  let data = await productModel.deleteOne({ name: "p15" });
  console.log(data);
}

const findInDB = async ()=>{
  await mongoose.connect(url);
  let data = await productModel.findOne({ name: "nokia a33" });
  console.log(data);
}

findInDB();
