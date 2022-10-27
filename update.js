const dbConnect = require("./mongodb");

const update = async () => {
  const data = await dbConnect();
  const result = await data.update(
    { name: "note 10" },
    { $set: { name: "note 12" } }
  );
  console.log(result)
};

update();
