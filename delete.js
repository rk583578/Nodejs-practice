const dbConnect = require('./mongodb');

const deleteData= async ()=>{
    let data= await dbConnect();
    let result= await data.deleteMany({name:"note 12"})
    console.log(result)
}

deleteData();