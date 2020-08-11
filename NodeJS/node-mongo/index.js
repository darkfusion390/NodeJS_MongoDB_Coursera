const mongoClient = require('mongodb');
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

mongoClient.connect(url).then((client) => {
    // assert.equal(err, null);
    console.log("Connected correctly to the server");
    const db = client.db(dbname);
    // const collection = db.collection('dishes');

    dboper.insertDocument(db, {name: "Peanuts", description: "chutney da way"}, 'dishes')
    .then((result) => {
        console.log("Inserted document:\n", result.ops);
        return dboper.findDocuments(db, 'dishes')
    })
    .then((docs) => {
            console.log("Found documents: \n", docs);
            return dboper.updateDocument(db, {name: "Peanuts", description: "chutney da way"}, {description: "Updated test"}, 'dishes')
    })
    .then((result) => {
            console.log("Updated document: \n", result.result);
            return dboper.findDocuments(db, 'dishes')
    })
    .then((docs) => {
            console.log("Found documents: \n", docs);
            return db.dropCollection('dishes')
    })
    .then((result) => {
            console.log("Dropped Collection: "+ result);

            client.close();
    })


    // collection.insertOne({"name": "Pasta", "description": "FOOD"}, (err,result) =>{
    //     assert.equal(err,null);
    //     console.log("after insert");
    //     console.log(result.ops);

    //     collection.find({}).toArray((err,docs) => {
    //         assert.equal(err,null);
    //         console.log("Found:\n");
    //         console.log(docs);

    //         db.dropCollection('dishes', (err, result) => {
    //             assert.equal(err,null);
    //             client.close();
    //         })

    //     })
    // });
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));