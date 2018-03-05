import { MongoClient, Db } from 'mongodb';

class DbClient{
    public db: Db;



    public async connect() {
        try{
            // noinspection TypeScriptUnresolvedFunction
            this.db = await MongoClient.connect("mongodb://localhost:27017", {});
            console.log("Connected to db");
            return this.db;
        }catch(e){
            console.log(e);
        }
    }
}

export = new DbClient();