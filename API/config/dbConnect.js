import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Heroldi:123@dbprojetofinal.lnxnr.mongodb.net/DBProjetoFinal");

let db = mongoose.connection;

export default db;