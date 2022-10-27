const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: "note 10",
      brand: "infinix",
      price: "453$",
      category: "mobile",
    },
    {
      name: "note 10",
      brand: "sumsang",
      price: "43$",
      category: "mobile",
    },
    {
      name: "note 11",
      brand: "micimax",
      price: "403$",
      category: "mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
