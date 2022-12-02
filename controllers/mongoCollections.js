exports.mongoCollections = async (req,res)=>{
    const {client} = require("../server")
    if(client){
        const dataBase = client.db("School");
        console.log(dataBase)
    }else{
        console.log("No")
    }
}