const mongoClient = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

mongoClient.connect(url, (err,client) => {
    assert.equal(err, null);
    console.log("Connected correctly to the server");
    const db = client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({"name": "Pasta", "description": "FOOD"}, (err,result) =>{
        assert.equal(err,null);
        console.log("after insert");
        console.log(result.ops);

        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null);
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err,null);
                client.close();
            })

        })
    });
    
})